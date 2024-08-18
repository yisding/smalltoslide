import { OpenAI, OpenAIEmbedding } from "llamaindex";
import {getChunks, Chunk} from '@/rag/zilliz_embedding_engine';

type LlamaIndexTSMultiModalChunkLLMBaseBundle = {
    chunks: Chunk[]
}

// (query: str, option: literal[regular, colpali, small-to-slide])
export const query = async () => {


    const input_str: string = "Where is Istanbul?";

    //Embed the query
    const embedModel = new OpenAIEmbedding();
    const embeddings: number[] = (await embedModel.getTextEmbeddings([input_str]))[0]

    // Get relevant chunks from Zilliz VDB
    const results = await getChunks(embeddings);
    console.log("GOT EMBEDDINGS");
    console.log(results);

    // Get images
    //TODO: Just read the images in from local directories (NVDA + ColPali dataset)


    // pass images into openAI llm
    // Use GPT 4o-mini for now, switch to 4o-large at demo time


    // Do some multi-modal input to GPT-4o mini


    // Run the final query
    const llm = new OpenAI({ model: "gpt-4o-mini", temperature: 0 });
    const messages = [
        {content: "Where is Istanbul?", role: "user" as "user"}
    ]
    const response = await llm.chat({messages});

    console.log("Query: ");
    console.log("SOMETHING");



    return response.message.content;
}