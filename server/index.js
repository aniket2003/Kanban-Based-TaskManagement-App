const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes")
const taskRoutes = require("./routes/taskRoutes")

// const port = process.env.PORT || 5000;
// const port = 3000;
const app = express();
require('dotenv').config();

const corsOptions = {
    origin: ["https://KanbanTM.onrender.com"],
    methods: ['GET','POST'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// app.use("/api/task/gettask", (req,res)=>{

//     // console.log(req.body);

//     res.json({msg: "Mil gaya"});
//     // console.log("Mil Gaya");
//     // res.redirect("/");
     
// })

app.use("/api/auth", userRoutes);
// console.log("Now");
app.use("/api/task", taskRoutes);




mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
}).then(()=>{
    console.log("DB connection successful");
}).catch((err)=>{
    console.log(err.message);
    console.log(err);
});







app.listen(process.env.PORT, ()=>{
    console.log(`Server Started on Port ${process.env.PORT}`);
});
