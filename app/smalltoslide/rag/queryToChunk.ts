import { OpenAI, OpenAIEmbedding} from "llamaindex";
import { OpenAI as OAI} from "openai";
import {getMilvusChunks} from '@/rag/getChunks';
import { Chunk, DocumentOption, ChunkBundle} from '@/rag/types';
import { ragPrompt, smallToSlidePrompt } from "@/rag/synthPrompt";
import path from 'path';
import { readFileSync as readFile } from 'fs';

// (query: str, imageOption: literal["Nvidia", "Climate Youth"])
export const query = async (input_str: string, imageOption: DocumentOption) => {

    // These should be parameters that are passed into the query() function
    // const input_str: string = "How is Nvidia doing so far?";
    // const imageOption: DocumentOption = DocumentOption.Nvidia;

    //Embed the query
    const embedModel = new OpenAIEmbedding();
    const embeddings: number[] = (await embedModel.getTextEmbeddings([input_str]))[0]

    // Get relevant chunks from Zilliz VDB

    // This works for regular + small-to-slide
    const results: Chunk[] = await getMilvusChunks(embeddings);
    console.log("GOT EMBEDDINGS");
    console.log(results);

    // Get images
    //TODO: Just read the images in from local directories (NVDA + ColPali dataset)


    // pass images into openAI llm
    // Use GPT 4o-mini for now, switch to 4o-large at demo time. Warning: We use ~100k tokens for the image inputs

    // Set up LLM/Multi-modal LLM
    const settings = { model: "gpt-4o-mini", temperature: 0 };
    const llm = new OpenAI(settings);
    const multiModalLLM = new OAI();


    // Set up message conversations
    const messages = [
        {content: ragPrompt(input_str, results), role: "user" as "user"}
    ];

    // Chunks -> URLs, depending on value of imageOption
    // TODO: Ignore the linting error for now.
    const imageBaseURL: string = imageOption === DocumentOption.ClimateYouth ? "climate_youth_page_" : "nvda_page_";
    const urls: string[] = results.map(chunk => path.join(process.cwd(), 'public', imageBaseURL + chunk.page_num + ".jpg"));
    const imageObjects = urls.map(url => {
        return {
        type: "image_url",
        image_url: {
          url: "data:image/jpeg;base64," + readFile(url, 'base64')
        }
      }});

    const response = await llm.chat({messages});

    
    const mmResponse = await multiModalLLM.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: smallToSlidePrompt(input_str) },
              ...imageObjects
            ]
          }
        ],
        max_tokens: 2048
      });

      

    console.log("Query: ");
    console.log("SOMETHING");
    // console.log(mmResponse.choices[0].message.content);
    console.log(response);



    // Create bundles, return objects
    const pageNumbers: number[] = results.map(chunk => chunk.page_num);
    const finalResults = {
        pageNumbers: pageNumbers,
        ragResults: {
            // TODO: Add ColPali
            regular: response.message.content,
            s2s: mmResponse.choices[0].message.content
        }
    };

    return finalResults as ChunkBundle;
}