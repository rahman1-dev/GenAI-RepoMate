import loadGithubRepo from "./load-gitHubRep.js";

export default async function indexRepo(gitHubUrl, gitHubToken) {
  //Step 1:Load github repos from github
  const docsArr = await loadGithubRepo(gitHubUrl, gitHubToken);
  console.log("Github repos loaded", docsArr.length, "File found");

  
}
