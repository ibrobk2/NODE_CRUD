const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();

// Middlewares setting
app.use(cors());
app.use(express.json());


// Connecting to MogoDB 
mongoose.connect("mongodb://127.0.0.1:27017/crud")
.then(()=>{
    console.log("Connected to MongoDB Successfully...");
}).catch((error)=>console.log(error))

// fetch all users from DB
app.get('/', (req, res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


// API to create user
app.post('/createUser', (req, res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})


// API to fetch user by id from DB
app.get('/getUser/:id', (req, res) =>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err));
})


// API to update user by id
app.put('/updateUser/:id', (req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        wallet: req.body.wallet
        })
    .then(result => res.json(result))
    .catch(err => res.json(err));
})


// API to delete user from DB
app.delete('/deleteUser/:id', (req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

const PORT = 3001;

// Running server
app.listen(PORT, ()=>{
    console.log(`Server is Running on Port ${PORT}`);
})


