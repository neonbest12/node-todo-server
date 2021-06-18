import Todo from "../models/todo";
import { create, deleteTodo, update } from "./todos";

export default async function pushController(req, res, next) {
  const { email } = req.user;
  var data = []
  const { todoList, edited, removed } = req.body;
  if (removed) {
    for (const id in removed)
      await deleteTodo({ d_id: removed[id] });
  }
  for (const todo of todoList) {
    if (edited && todo.id in edited) { const d = await update(todo, req, next); data.push(d) }
    else if (!todo.d_id) { todo.email = email; const d = await create(todo, req, next); data.push(d) }
    else data.push(todo);
  }
  console.log("here", data)
  res.json({ data })
  return
}