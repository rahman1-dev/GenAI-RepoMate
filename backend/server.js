import express from "express";
import indexRepo from "./lib/indexRepo.js";

const app = express();
app.use(express.json());

app.post("/add-repo", async (req, res) => {
  const { gitHubUrl, gitHubToken } = req.body;

  await indexRepo(gitHubUrl, gitHubToken);

  res.json({ msg: "Repo indexed successfull ✅" });
});

app.post("/askQuery", (req, res) => {
  const { userQuery } = req.body;
  
});

app.listen("8080", () => {
  console.log("server is listening...");
});
