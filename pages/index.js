import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/todos");
      const data = await res.json();
      setTodos(data);
    }
    fetchData();
  }, []);
  const addTodoHandler = async() => {
    const res = fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ todo }),
      headers: { "Content-Type": "application/json" },
    });
    const data = (await res).json();
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <div>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={addTodoHandler}>Add Todo</button>
      </div>
    </div>
  );
}
