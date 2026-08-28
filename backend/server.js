import express from "express";

const app = express();

app.post("/add-repo", (req, res) => {
  const { gitHubUrl, gitHubToken } = req.body;

  res.json({ msg: "post request received" });
});

app.listen("8080", () => {
  console.log("server is listening...");
});
