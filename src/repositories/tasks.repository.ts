import { connection } from "../config/database.js";
import { TaskCreate } from "../interfaces/TaskCreate.js";

async function findAll() {
    return await connection.query(`
        SELECT * FROM tasks;    
    `);

}

const tasksRepository = {
    findAll
}

export default tasksRepository;