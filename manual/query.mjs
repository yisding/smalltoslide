import { readFileSync, writeFileSync } from "fs";
import OpenAI from "openai";

// read nvda.md

const data = readFileSync("nvda-embeddings.json");

const embeddings = JSON.parse(data);

const openai = new OpenAI();

// const query = "How many TFLOPS does the 2024 chip have?";
const query = "How many times has GPU-Computing gone up in 10 years?";

const response = await openai.embeddings.create({
  model: "text-embedding-ada-002",
  input: query,
  encoding_format: "float",
});

const queryEmbedding = response.data[0].embedding;

for (let i = 0; i < embeddings.length; i++) {
  const embedding = embeddings[i];
  // multiply and sum
  const similarity = embedding.reduce((acc, val, index) => {
    return acc + val * queryEmbedding[index];
  }, 0);

  console.log(`Slide ${i + 1}: ${similarity}`);
}

console.log(queryEmbedding);
