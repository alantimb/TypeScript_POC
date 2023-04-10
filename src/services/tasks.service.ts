import { Task } from "../protocols/tasks.protocols.js";
import tasksRepository from "../repositories/tasks.repository.js";

async function findAll(): Promise<Task[]> {
    const { rows: tasks } = await tasksRepository.findAll();
    console.log("1 " + tasks);
    return tasks
}

async function create(newTask: Task) {
    return await tasksRepository.create(newTask)
}

const tasksService = {
    findAll,
    create
}

export default tasksService;
