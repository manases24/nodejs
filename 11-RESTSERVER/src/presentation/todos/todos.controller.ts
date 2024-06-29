import { Request, Response } from "express";

const todos = [
  { id: 1, text: "Buy bread", createdAt: new Date() },
  { id: 2, text: "Buy milk", createdAt: null },
];
export class TodoController {
  //* Dependecy Inyection
  constructor() {}

  public getTodos(req: Request, res: Response) {
    res.json(todos);
  }

  public getTodoById(req: Request, res: Response) {
    const id = +req.params.id;
    const todo = todos.find((todo) => todo.id === id);

    todo
      ? res.json(todo)
      : res.status(404).json({ error: `TODO with id [${id}] not found` });
  }
}
