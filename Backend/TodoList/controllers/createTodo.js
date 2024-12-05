//import the Todo model
const { response } = require("express");
const Todo = require("../models/Todo");

//define route handler
exports.createTodo = async (req, res) => {
    try{
   //extract title and description from request body
   const {title, description} = req.body;
   //create a new todo object and insert in db
   const todo = await Todo.create({title, description})

   //send a json  response with a scuccess message
   res.send(200).json(
    { 
        success: true,
        message: "Todo created successfully",
        data:response
    }
   ) 
    }
    catch(err){
        console.log(err);
        console.error(err)


        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: err.message,
        })

    }
}