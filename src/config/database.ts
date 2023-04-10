import pq from "pg";

const { Pool } = pq;

const connection = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'hEnrY-31',
    database: 'taskManager_db'
});

export { connection };