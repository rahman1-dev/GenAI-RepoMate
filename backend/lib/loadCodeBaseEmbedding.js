import fs from "fs/promises";
export default async function loadCodeBaseEmbedding() {
  console.log("Fetching codebase embeddings...");
  const data = await fs.readFile("embeddings.json", "utf-8");
  //   console.log(await JSON.parse(data));
  return await JSON.parse(data);
}

// loadCodeBaseEmbedding();
