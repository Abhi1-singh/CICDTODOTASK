import express from "express";
import todoRoutes from "./routes/todo.routes.js";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => res.send("OK"));
app.use("/api/todos", todoRoutes);

export default app;
