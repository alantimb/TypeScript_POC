import express from "express";
import { router } from "./routers/tasks.routes.js";


const server = express();
server.use(express.json());

server.get("/health", (req, res) => {
  res.send("OK");
});

server.use('/tasks', router)

const port = 5000
server.listen(port, () => { console.log(`Server is running in port: ${port}`)})