import { todos } from "../../../data/todos";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { todo } = req.body;
    // insert to db
    const newTodo = {
      id: todos.length + 1,
      title: todo,
    };
    res.status(201).json({ message: "success", data: newTodo });
  } else if (req.method === "DELETE") {
    // delete all todos
    res.status(200).json({ message: "Deleted Successfully!", data: [] });
  } else if (req.method === "PUT") {
    res.status(200).json({ message: "Replaced Successfully!", data: req.body });
  }
}
