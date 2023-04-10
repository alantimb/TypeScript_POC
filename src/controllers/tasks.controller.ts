import { Request, Response, NextFunction } from "express";
import { connection } from "../config/database.js";
import tasksService from "../services/tasks.service.js";

export async function findAll(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    
    try {
        const tasks = await tasksService.findAll();
        return res.status(201).send(tasks);
      } catch (err) {
        return next(err);
      }
}

