import express from "express";

import {
  getTasks,
  createTask,
  deleteTask,
  completeTask,
} from "../controllers/taskController.js";

const router = express.Router();

// Get Tasks
router.get("/", getTasks);

// Create Task
router.post("/", createTask);

// Delete Task
router.delete(
  "/:id",
  deleteTask
);

// Complete Task
router.put(
  "/:id",
  completeTask
);

export default router;