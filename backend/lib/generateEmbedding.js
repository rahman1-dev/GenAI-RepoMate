import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.AI_API_KEY_2,
});

export default async function generateEmbedding(docSummary) {
  console.log("Generating embeding....");

  const docEmbedding = await ai.models.embedContent({
    model: "gemini-embedding-2",
    contents: docSummary,
  });

  //   console.log(docEmbedding.embeddings[0].values);
  return docEmbedding.embeddings[0].values;
}

// console.log(
//   await generateEmbedding(
//     "The `frontend.js` file initializes the client-side PDF viewing functionality by executing the `pdf()` factory or initialization function. The resulting object instance is stored in the constant variable `pdfviewer`, establishing the primary interface for rendering, displaying, and managing PDF documents within the application's user interface.",
//   ),
// );
