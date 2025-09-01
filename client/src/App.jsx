import { useEffect, useState } from "react";
import { api } from "./api";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  // 처음 렌더링될 때 목록 가져오기
  useEffect(() => {
    api.get("/api/todos").then((res) => setTodos(res.data));
  }, []);

  const addTodo = async () => {
    if (!title.trim()) return;
    const res = await api.post("/api/todos", { title });
    setTodos((prev) => [...prev, res.data]);
    setTitle("");
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>My Todos</h1>
      <div style={{ marginBottom: 12 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="할 일 입력"
        />
        <button onClick={addTodo} style={{ marginLeft: 8 }}>
          추가
        </button>
      </div>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}
