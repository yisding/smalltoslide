import {query} from '@/rag/queryToChunk';
import {ChunkBundle} from '@/rag/types';
export const dynamic = 'force-dynamic'; // static by default, unless reading the request



export async function GET(request: Request) {
  const result: ChunkBundle = await query();

  // if (typeof result != "object"){
  //   console.log("Query failed.")
  // }

  //return new Response(`Hello from ${process.env.VERCEL_REGION}`);
  return new Response(JSON.stringify(result));
}
