import { Router } from "express";
import { TodoController } from "./todos.controller";

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();
    const todoController = new TodoController();
    router.get("/todos", todoController.getTodos);
    return router;
  }
}
