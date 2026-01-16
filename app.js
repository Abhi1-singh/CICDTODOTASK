
import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.routes.js";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://cicdtodotaskvite.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.get("/health", (req, res) => res.send("OK"));
app.use("/api/todos", todoRoutes);

export default app;
