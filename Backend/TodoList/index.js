const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//import routes
const todoRoutes = require("./routes/todos");

//middleware to parse json request body
app.use(express.json());

//use routes
app.use("/api/vi", todoRoutes);

//start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});

//connect to database

const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req, res) => {
    res.send(`<h1>Todo List API</h1>`);
});