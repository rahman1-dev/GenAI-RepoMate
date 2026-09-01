import express from "express";
import indexRepo from "./lib/indexRepo.js";
import askQuestion from "./lib/askQuestion.js";

const app = express();
app.use(express.json());

app.post("/add-repo", async (req, res) => {
  const { gitHubUrl, gitHubToken } = req.body;

  await indexRepo(gitHubUrl, gitHubToken);

  res.json({ msg: "Repo indexed successfull ✅" });
});

app.post("/askQuery", async (req, res) => {
  const { userQuery } = req.body;

  console.log("request recieved successfully");
  const { AI_Summary, releventFiles } = await askQuestion(userQuery);

  res.json({
    message: "query answer generated successfully",
    AI_Summary,
    releventFiles,
  });
});

app.listen("8080", () => {
  console.log("server is listening...");
});
