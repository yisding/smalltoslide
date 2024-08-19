import { Chunk } from './types';

// Vanilla RAG prompt.
export const ragPrompt = (query: string, chunks: Chunk[]) : string => {

    const chunk_text: string = chunks.map(chunk => 
        `Chunk ${chunk.page_num}:\n${chunk.text}\n----------`
    ).join('\n\n');


    const returnPrompt = `
    You are an AI assistant tasked with providing accurate and relevant responses to user queries. 
    Analyze the given query and the provided search results carefully. 
    Synthesize the information from the search results to create a comprehensive and coherent answer, ensuring that you directly address the user's question or request. 
    Structure your response for readability using appropriate formatting such as headers, lists, or emphasis where needed.
    Make sure not to use any previous knowledge. Only use information given from the context.
    Be concise and make sure to give a great answer in under 1000 tokens.
    
    QUERY: ${query}
    CONTEXT: \n${chunk_text}
    `;

    return returnPrompt;
}

// We have a shorter context since in Small-To-Slide, the context is the image served directly to 4o.
export const smallToSlidePrompt = (query: string) : string => {
    const returnPrompt = `
    You are an AI assistant tasked with providing accurate and relevant responses to user queries. 
    Analyze the given query and the provided search results carefully. 
    Synthesize the information from the search results to create a comprehensive and coherent answer, ensuring that you directly address the user's question or request. 
    Structure your response for readability using appropriate formatting such as headers, lists, or emphasis where needed.
    Analyze the image and give a great answer.
    Make sure not to use any previous knowledge. Only use information given from the context.
    Be concise and make sure to give a great answer in under 1000 tokens.


    QUERY: ${query}
    `
    
    return returnPrompt;
}