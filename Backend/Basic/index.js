const express = require("express");
const app = express();

// Used to parder req.body in express => Put or POst
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello World!");
});


// app.get("/cars",(req,res)=>{
//     res.send("red car")
// })

app.get("/bike/color",(req,res)=>{
    res.send("red bike")
})

app.post('/cars', (req,res)=>{
    const {name , brand} = req.body
    console.log(name)
    console.log(brand)
    res.send("car submitted SuccessFully")
})

    app.listen(3000,()=>{
        console.log("server started on 3000")
    })


// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/aman',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// .then(()=>{
//     console.log("database connected")
// })
// .catch((err)=>{
//     console.log("database connection error")
// })
