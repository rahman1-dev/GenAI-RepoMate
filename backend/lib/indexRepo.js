import generateDocSummary from "./generatDocSummary.js";
import generateEmbedding from "./generateEmbedding.js";
import loadGithubRepo from "./load-gitHubRep.js";
import fs from "fs/promises";

export default async function indexRepo(gitHubUrl, gitHubToken) {
  //Step 1:Load github repos from github
  const docsArr = await loadGithubRepo(gitHubUrl, gitHubToken);
  console.log("Github repos loaded", docsArr.length, "File found");

  let result = [];

  for (let doc of docsArr) {
    //Step 2:Summarize the github documents for each doc
    const docSummary = await generateDocSummary(doc);

    //Setp 3: Generate embeddings for summary for each doc
    const docEmbedding = await generateEmbedding(docSummary);

    let docObj = {
      summary: docSummary,
      embedding: docEmbedding,
      sourceCode: JSON.parse(JSON.stringify(doc.pageContent)),
      fileName: doc.metadata.source,
    };

    result.push(docObj);
  }

  await fs.writeFile("embeddings.json", JSON.stringify(result, null, 2));
  console.log("✅ Embeddings generated and saved to embeddings.json");
}
