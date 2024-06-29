import { Request, Response } from "express";

export class TodoController {
  //* Dependecy Inyection
  constructor() {}

  public getTodos(req: Request, res: Response) {
    res.json([
      { id: 1, text: "Buy bread", createdAt: new Date() },
      { id: 2, text: "Buy milk", createdAt: null },
    ]);
  }
}
