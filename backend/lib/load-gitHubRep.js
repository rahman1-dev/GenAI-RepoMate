import { GithubRepoLoader } from "@langchain/community/document_loaders/web/github";
import dotenv from "dotenv";
dotenv.config();

export default async function loadGithubRepo(gitHubUrl, gitHubToken) {
  console.log("Loading Github repos.....");
  const loader = new GithubRepoLoader(gitHubUrl, {
    recursive: true,
    // Add your API key here to bypass rate limits:
    accessToken: process.env.GITHUB_ACCESS_TOKEN,
    ignoreFiles: [
      ".gitignore",
      "node_modules/**",
      "dist/**",
      "build/**",
      "package-lock.json",
      "yarn.lock",
      "pnpm-lock.yaml",
    ],
  });

  const docsArr = await loader.load();
  //   console.log(docArr);
  return docsArr;
}

// loadGithubRepo("https://github.com/ZayeemMohd/small-test");
