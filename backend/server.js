import express from "express";
import indexRepo from "./lib/indexRepo.js";
import askQuestion from "./lib/askQuestion.js";
import cors from "cors";
import signupRoutes from "./routes/signup.routes.js";
import signinRoutes from "./routes/signin.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import connectDb from "./config/db.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/add-repo", async (req, res) => {
  try {
    const { gitHubUrl, gitHubToken } = req.body;

    await indexRepo(gitHubUrl, gitHubToken);

    res.json({ msg: "Repo indexed successfull ✅" });
  } catch (error) {
    res.json({ msg: "Something went wrong", error: error.message });
  }
});

app.post("/askQuery", async (req, res) => {
  try {
    const { userQuery } = req.body;

    console.log("request recieved successfully");
    const { AI_Summary, releventFiles } = await askQuestion(userQuery);

    res.json({
      message: "query answer generated successfully",
      AI_Summary,
      releventFiles,
    });
  } catch (error) {
    res.json({ msg: "something went wrong", error: error.message });
  }
});

connectDb();

app.use("/api/auth", signupRoutes);
app.use("/api/auth", signinRoutes);
app.use("/profile", profileRoutes);

app.listen("8080", () => {
  console.log("server is listening...");
});
