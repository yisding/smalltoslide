import { MilvusClient } from '@zilliz/milvus2-sdk-node';


// Chunks to release to the front-end
interface Chunk {
    text: string,
    page_num: number
}


export const getChunks = async () => {

    // Value to be passed in. Dummies for now
    const query: number[] = [1,2,3]



    const uri = process.env.ZILLIZ_URI;
    const token = process.env.ZILLIZ_API_KEY;
    if (!uri || !token) {
        console.error('Zilliz Cloud URI or API key is missing. Please check your environment variables.');
    } else {
        const client = new MilvusClient({
            address: uri,
            token: token
        });

    // Wait for the connection to be established
    await client.connectPromise;


    // Load the correct VDB collection
    const collection = await client.loadCollection({
        collection_name: "book",
      });

    // TODO: Proceed from here


    // Take the embedding, return the top 3 chunks

    }
}