import os

import gradio as gr
import torch
from colpali_engine.models.paligemma_colbert_architecture import ColPali
from colpali_engine.trainer.retrieval_evaluator import CustomEvaluator
from colpali_engine.utils.colpali_processing_utils import (
    process_images,
    process_queries,
)
import spaces
from pdf2image import convert_from_path
from PIL import Image
from torch.utils.data import DataLoader
from tqdm import tqdm
from transformers import AutoProcessor

# Load model
model_name = "vidore/colpali"
token = os.environ.get("HF_TOKEN")
model = ColPali.from_pretrained(
    "google/paligemma-3b-mix-448", torch_dtype=torch.float32, device_map="mps", token = token).eval()

model.load_adapter(model_name)
processor = AutoProcessor.from_pretrained(model_name, token = token)

mock_image = Image.new("RGB", (448, 448), (255, 255, 255))


@spaces.GPU
def search(query: str, ds, images, k):

    device = "mps"
    if device != model.device:
        model.to(device)
        
    qs = []
    with torch.no_grad():
        batch_query = process_queries(processor, [query], mock_image)
        batch_query = {k: v.to(device) for k, v in batch_query.items()}
        embeddings_query = model(**batch_query)
        qs.extend(list(torch.unbind(embeddings_query.to("cpu"))))

    retriever_evaluator = CustomEvaluator(is_multi_vector=True)
    scores = retriever_evaluator.evaluate(qs, ds)

    top_k_indices = scores.argsort(axis=1)[0][-k:][::-1]

    results = []
    for idx in top_k_indices:
        results.append((images[idx], f"Page {idx}"))

    return results


@spaces.GPU
def index(files, ds):
    """Example script to run inference with ColPali"""
    images = []
    for f in files:
        images.extend(convert_from_path(f))

    if len(images) >= 150:
        raise gr.Error("The number of images in the dataset should be less than 150.")

    # run inference - docs
    dataloader = DataLoader(
        images,
        batch_size=4,
        shuffle=False,
        collate_fn=lambda x: process_images(processor, x),
    )

    
    device = "mps"
    if device != model.device:
        model.to(device)
        
          
    for batch_doc in tqdm(dataloader):
        with torch.no_grad():
            batch_doc = {k: v.to(device) for k, v in batch_doc.items()}
            embeddings_doc = model(**batch_doc)
        ds.extend(list(torch.unbind(embeddings_doc.to("cpu"))))
    return f"Uploaded and converted {len(images)} pages", ds, images


def get_example():
    return [[["climate_youth_magazine.pdf"], "How much tropical forest is cut annually ?"]]

with gr.Blocks(theme=gr.themes.Soft()) as demo:
    gr.Markdown("# ColPali: Efficient Document Retrieval with Vision Language Models 📚")
    gr.Markdown("""Demo to test ColPali on PDF documents. The inference code is based on the [ViDoRe benchmark](https://github.com/illuin-tech/vidore-benchmark).

    ColPali is model implemented from the [ColPali paper](https://arxiv.org/abs/2407.01449).

    This demo allows you to upload PDF files and search for the most relevant pages based on your query.
    Refresh the page if you change documents !

    ⚠️ This demo uses a model trained exclusively on A4 PDFs in portrait mode, containing english text. Performance is expected to drop for other page formats and languages.
    Other models will be released with better robustness towards different languages and document formats !
    """)
    with gr.Row():
        with gr.Column(scale=2):
            gr.Markdown("## 1️⃣ Upload PDFs")
            file = gr.File(file_types=["pdf"], file_count="multiple", label="Upload PDFs")

            convert_button = gr.Button("🔄 Index documents")
            message = gr.Textbox("Files not yet uploaded", label="Status")
            embeds = gr.State(value=[])
            imgs = gr.State(value=[])

        with gr.Column(scale=3):
            gr.Markdown("## 2️⃣ Search")
            query = gr.Textbox(placeholder="Enter your query here", label="Query")
            k = gr.Slider(minimum=1, maximum=10, step=1, label="Number of results", value=5)

    # with gr.Row():
    #    gr.Examples(
    #        examples=get_example(),
    #        inputs=[file, query],
    #    )

    # Define the actions
    search_button = gr.Button("🔍 Search", variant="primary")
    output_gallery = gr.Gallery(label="Retrieved Documents", height=600, show_label=True)

    convert_button.click(index, inputs=[file, embeds], outputs=[message, embeds, imgs])
    search_button.click(search, inputs=[query, embeds, imgs, k], outputs=[output_gallery])

if __name__ == "__main__":
    demo.queue(max_size=10).launch(debug=True)
