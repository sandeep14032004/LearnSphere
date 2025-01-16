import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";

dotenv.config();

const app = express();

//using middlewares
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

import userRoutes from "./routes/user.js";

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
  connectDb();
});
