import { OpenAI, OpenAIEmbedding } from "llamaindex";
import {getChunks} from '@/rag/zilliz_embedding_engine';

// (query: str, option: literal[regular, colpali, small-to-slide])
export const query = async () => {


    const input_str: string = "Where is Istanbul?";

    //Embed the query
    const embedModel = new OpenAIEmbedding();
    const embeddings: number[] = (await embedModel.getTextEmbeddings([input_str]))[0]

    // Get relevant chunks from Zilliz VDB



    // pass images into openAI llm




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