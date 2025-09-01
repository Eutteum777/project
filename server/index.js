import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

app.get("/api/todos", (req, res) => {
  res.json([{ id: 1, title: "첫 할 일", done: false }]);
});

app.post("/api/todos", (req, res) => {
  // zod로 req.body 검증 추가 가능
  const { title } = req.body;
  res.status(201).json({ id: Date.now(), title, done: false });
});

app.listen(3000, () => console.log("API on :3000"));
