import { Router } from "express";
import { findAll } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/', findAll)

export { router };