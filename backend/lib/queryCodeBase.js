import cosineSimilarity from "./cosineSimilarity.js";
import embedQuery from "./embedQuery.js";
import loadCodeBaseEmbedding from "./loadCodeBaseEmbedding.js";

export default async function queryCodeBase(userQuery) {
  //Setp 1:Generate embedding for userQuery
  const queryEmbedding = await embedQuery(userQuery);

  //Setp 2:load code base embedding
  const codeBaseEmbeddings = await loadCodeBaseEmbedding();
  //   [{[]},{[]},{[]}]

  //   Step3: Generate cosine similarity betwen queryEmbedding and all child of codebaseEmbeddings
  const resultArr = codeBaseEmbeddings.map((fileObj) => {
    let similarityScore = cosineSimilarity(queryEmbedding, fileObj.embedding); //fileObj.embeddings?????????????????

    return {
      similarityScore: similarityScore,
      fileName: fileObj.fileName,
      sourceCode: fileObj.sourceCode,
      fileSummary: fileObj.summary,
    };
  });

  //   console.log(resultArr);
  return resultArr
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .filter((result) => result.similarityScore > 0.6);
}

// queryCodeBase("authentication code?");
