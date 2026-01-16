
// import express from "express";
// import cors from "cors";
// import todoRoutes from "./routes/todo.routes.js";

// const app = express();

// // app.use(cors());

// app.use(cors({
//   origin: "*"
// }));


// app.use(express.json());

// app.get("/health", (req, res) => res.send("OK"));
// app.use("/api/todos", todoRoutes);

// export default app;


import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.routes.js";

const app = express();

// 🔥 IMPORTANT
app.use(cors());
app.options("*", cors()); // <--- THIS LINE WAS MISSING

app.use(express.json());

app.get("/health", (req, res) => res.send("OK"));
app.use("/api/todos", todoRoutes);

export default app;
