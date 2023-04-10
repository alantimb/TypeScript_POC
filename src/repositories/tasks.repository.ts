import { connection } from "../config/database.js";
import { TaskCreate } from "../interfaces/TaskCreate.js";
import { Task } from "../protocols/tasks.protocols.js";

async function findAll() {
    return await connection.query(`
        SELECT * FROM tasks;    
    `);
}

async function create(newTask: Task) {
    return await connection.query(`
    INSERT INTO tasks (name, username, date, status)
    VALUES ($1, $2, $3, $4)
    `, [newTask.name, newTask.username, newTask.date, newTask.status]
    );
}

const tasksRepository = {
    findAll,
    create
}

export default tasksRepository;