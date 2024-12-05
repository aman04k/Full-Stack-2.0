const express = require("express");
const router = express.Router();

//import controllers
const {createTodo} = require("../controllers/createTodo");
// const {getTodos} = require("../controllers/getTodos");

//define Api routes
router.post("/createTodo", createTodo);
// router.get("/todos", getTodos);

module.exports = router;
