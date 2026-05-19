import express from "express"
import { addTask, completeTask, deleteTask, getTask, getTasks, updateTask } from "../controller/task.controller.js"

const router = express.Router()

router.get( "/get-tasks", getTasks)
router.get("/get-task/:id", getTask)
router.post("/add-task", addTask)
router.delete("/delete-task", deleteTask)
router.put("/complete-task", completeTask)
router.put("/update-task", updateTask)

export default router