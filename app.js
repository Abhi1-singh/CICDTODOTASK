// import express from "express";
// import cors from "cors";            
// import todoRoutes from "./routes/todo.routes.js";

// const app = express();

// //  CORS middleware (IMPORTANT)
// app.use(cors({
//   origin: "*",                        
//   methods: ["GET", "POST", "PUT", "DELETE"]
// }));

// app.use(express.json());

// app.get("/health", (req, res) => res.send("OK"));
// app.use("/api/todos", todoRoutes);

// export default app;

import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.routes.js";

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// 👇 IMPORTANT: preflight support
app.options("*", cors());

app.use(express.json());

app.get("/health", (req, res) => res.send("OK"));
app.use("/api/todos", todoRoutes);

export default app;
