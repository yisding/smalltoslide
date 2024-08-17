import {query} from '@/rag/query_to_chunk';

export const dynamic = 'force-dynamic'; // static by default, unless reading the request



export async function GET(request: Request) {
  const result = await query();

  if (typeof result != "string"){
    console.log("Query failed.")
  }
  //return new Response(`Hello from ${process.env.VERCEL_REGION}`);
  return new Response(JSON.stringify(result));
}
