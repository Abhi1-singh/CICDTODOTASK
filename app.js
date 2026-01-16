
// import express from "express";
// import cors from "cors";
// import todoRoutes from "./routes/todo.routes.js";

// const app = express();

// // app.use(cors());

// app.options("*", cors()); 


// app.use(express.json());

// app.get("/health", (req, res) => res.send("OK"));
// app.use("/api/todos", todoRoutes);

// export default app;


// import express from "express";
// import cors from "cors";
// import todoRoutes from "./routes/todo.routes.js";

// const app = express();

// // 🔥 IMPORTANT
// app.use(cors());
// app.options("*", cors()); // <--- THIS LINE WAS MISSING

// app.use(express.json());

// app.get("/health", (req, res) => res.send("OK"));
// app.use("/api/todos", todoRoutes);

// export default app;


import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.routes.js";

const app = express();

/*  FINAL CORS CONFIG */
app.use(
  cors({
    origin: "https://cicdtodotaskvite.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/*  Preflight support (MOST IMPORTANT) */
app.options("*", cors());

app.use(express.json());

app.get("/health", (req, res) => res.send("OK"));
app.use("/api/todos", todoRoutes);

export default app;
