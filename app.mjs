import express, { json } from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.mjs";
import blogRouter from "./routes/blog-router.mjs";

const app = express();

const PORT = 5000;
const PASSWORD = "xd6xiONeeESdwqaz";
const dbConfig = `mongodb+srv://admin:${PASSWORD}@cluster01.bapvsu8.mongodb.net/?retryWrites=true&w=majority`;

app.use(express.json());
app.use("/api/users/", router);
app.use("/api/blogs", blogRouter);

mongoose
  .connect(dbConfig)
  .then(() => app.listen(PORT))
  .then(() =>
    console.log(`Conneced to the DataBase and Listening to LocalHost:${PORT}`)
  )
  .catch((error) => console.log(error));
