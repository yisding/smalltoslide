import { readFileSync, writeFileSync } from "fs";
import OpenAI from "openai";

// read nvda.md

const data = readFileSync("nvda.md");

const slides = data.split("\n---\n");

console.log("Slides:", slides.length);

const openai = new OpenAI();

const embeddings = [];
for (const slide of slides) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: slide,
    encoding_format: "float",
  });

  const embedding = response.data[0].embedding;

  embeddings.push(embedding);
}

writeFileSync("nvda-embeddings.json", JSON.stringify(embeddings), {
  encoding: "utf8",
  flag: "w+",
});
