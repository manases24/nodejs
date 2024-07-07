import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";

export class TodosController {
  //* DI
  constructor() {}

  public async getTodos(req: Request, res: Response) {
    const todos = await prisma.todo.findMany();
    return res.json(todos);
  }

  public async getTodoById(req: Request, res: Response) {
    const id = +req.params.id;
    if (isNaN(id))
      return res
        .status(400)
        .json({ error: `ID argument [${id}] is not a number` });

    const todo = prisma.todo.findFirst({
      where: { id },
    });

    todo
      ? res.json(todo)
      : res.status(404).json({ error: `TODO with id ${id} not found` });
  }

  public async createTodo(req: Request, res: Response) {
    const [error, createTodoDto] = CreateTodoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const todo = await prisma.todo.create({
      data: createTodoDto!,
    });

    res.json(todo);
  }

  public async updateTodo(req: Request, res: Response) {
    const id = +req.params.id;
    const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });

    if (error) return res.status(400).json(error);

    const todo = prisma.todo.findFirst({
      where: { id },
    });

    if (!todo)
      return res.status(404).json({ error: `Todo with id ${id} not found` });

    const updatedTodo = prisma.todo.update({
      where: { id },
      data: updateTodoDto!.values,
    });
    res.json(updatedTodo);
  }

  public async deleteTodo(req: Request, res: Response) {
    const id = +req.params.id;

    const todo = prisma.todo.findFirst({
      where: { id },
    });
    if (!todo)
      return res.status(404).json({ error: `Todo with id ${id} not found` });

    const deletedTodo = prisma.todo.delete({
      where: { id },
    });

    res.json({ todo, deletedTodo });
  }
}
