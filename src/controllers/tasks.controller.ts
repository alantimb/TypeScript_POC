import { Request, Response, NextFunction } from "express";
import tasksService from "../services/tasks.service.js";
import { Task } from "../protocols/tasks.protocols.js";

export async function findAll(req: Request, res: Response, next: NextFunction) {
    
    try {
        const tasks = await tasksService.findAll();
        return res.status(201).send(tasks);
    } catch (err) {
        return next(err);
    }
}

export async function createTask(req: Request, res: Response, next: NextFunction) {
    const newTask = req.body as Task;

    try {
        await tasksService.create(newTask);
        return res.sendStatus(201)
    } catch (err) {
        return next(err);
    }
}

export async function updateStatusByID(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;

    try {
        await tasksService.edit(id);
        return res.sendStatus(201)
    } catch (err) {
        return next(err);
    }
}

export async function deleteOneByID(req: Request, res: Response, next: NextFunction) {
    const id: number = +req.params.id;

    try {
        await tasksService.deleteOne( id );
        return res.sendStatus(201)
    } catch (err) {
        return next(err);
    }
}
