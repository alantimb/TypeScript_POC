import { Router } from "express";
import { findAll,createTask, updateStatusByID, deleteOneByID } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/', findAll)
router.post('/', createTask)
router.put('/edit/:id', updateStatusByID)
router.delete('/del/:id', deleteOneByID)

export { router };