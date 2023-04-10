import { Router } from "express";
import { findAll,createTask } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/', findAll)
router.post('/', createTask)

export { router };