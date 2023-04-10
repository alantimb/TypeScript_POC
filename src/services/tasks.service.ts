import { Task } from "../protocols/tasks.protocols.js";
import tasksRepository from "../repositories/tasks.repository.js";

async function findAll(): Promise<Task[]> {
    const { rows: tasks } = await tasksRepository.findAll();
    return tasks
}

async function create(newTask: Task) {
    return await tasksRepository.create(newTask)
}

async function edit(id: number) {
    return await tasksRepository.edit(id)
}

async function deleteOne(id: number) {
    return await tasksRepository.deleteOne(id)
}

const tasksService = {
    findAll,
    create,
    edit,
    deleteOne
}

export default tasksService;
