import {query} from '@/rag/queryToChunk';
import { ChunkBundle, DocumentOption, RagRequestJSON } from "@/common/types";
export const dynamic = 'force-dynamic'; // static by default, unless reading the request


// This is the legacy GET request

// export async function GET(request: Request) {

//   const result: ChunkBundle = await query();

//   // if (typeof result != "object"){
//   //   console.log("Query failed.")
//   // }

//   //return new Response(`Hello from ${process.env.VERCEL_REGION}`);
//   return new Response(JSON.stringify(result));
// }




// This is the resulting POST request derived from the GET request
export async function POST(request: Request) {

  // Example of a dummy request JSON
  // const reqJSON = {
  //     query: "How is NVDA doing?",
  //     option: DocumentOption.Nvidia
  // } as RagRequestJSON;

  const reqJSON: RagRequestJSON = await request.json();

  const result: ChunkBundle = await query(reqJSON.query, reqJSON.option);
  console.log(result);

  //return new Response(`Hello from ${process.env.VERCEL_REGION}`);
  return new Response(JSON.stringify(result));
}