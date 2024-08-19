import { MilvusClient } from '@zilliz/milvus2-sdk-node';
import { Chunk } from './types';


// Params:
// Embedding - depending on the dimension, we can choose which collection to query
export const getMilvusChunks = async (embedding: number[]) :  Promise<Chunk[]> => {

    const uri = process.env.ZILLIZ_URI;
    const token = process.env.ZILLIZ_API_KEY;

    // Throws error if we don't have any keys
    if (!uri || !token) {
        throw new Error('Zilliz Cloud URI or API key is missing. Please check your environment variables.');
    }


    const client = new MilvusClient({
        address: uri,
        token: token
    });

    // Wait for the connection to be established
    await client.connectPromise;

    // Load in specific collection
    // Change the collection name based on the embedding dimension
    // TODO: Conditional assignment of collection_name
    const collection_name: string = "nvda_demo_collection";
    await client.loadCollectionSync({ collection_name: collection_name });


    // Load the correct VDB collection
    const results = await client.search({
        collection_name: collection_name,
        vector: embedding, // Your query vector
        //filter: 'age > 0', // Optional filter
        output_fields: ['content', 'page_number'], // Fields to return in results
        limit: 3, // Number of results to return
    })

    const chunks: Chunk[] = results.results.map((result) => {
        return {
            text: result.content,
            page_num: result.page_number
        };
    });
    return chunks;
    }