const express = require("express");
const taskController = require("../controller/index.controller");
const router = express.Router();

router.get('/', taskController.getAllTasks);
router.post("/", taskController.createTasks);
router.put("/:id", taskController.updateTasks);
router.delete("/:id", taskController.deleteTasks);

module.exports = router;