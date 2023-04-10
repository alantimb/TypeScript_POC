import { connection } from "../config/database.js";
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

async function edit(id: number) {
    const { rows } = await connection.query(`
        SELECT status FROM tasks WHERE id = $1;
    `, [id]);

    const status = rows[0]?.status || '';

    let newStatus = '';
    if (status === 'undone') {
        newStatus = 'done';
    } else if (status === 'done') {
        newStatus = 'undone';
    }

    return await connection.query(`
        UPDATE tasks SET status = $1 WHERE id = $2;
    `, [newStatus, id]);
}

async function deleteOne(id: number) {
    return await connection.query(`
    DELETE FROM tasks WHERE id = $1;
    `, [id]
    );
}

const tasksRepository = {
    findAll,
    create,
    edit,
    deleteOne
}

export default tasksRepository;