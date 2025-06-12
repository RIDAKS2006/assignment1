//import imp server files
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student= require('./student.js');

//server variable
const server= express();

//middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//mangoDB connection
mongoose.connect(
    'mongodb://localhost:27017/assignment1',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(()=>{
        console.log("Connected to mongoDB")
    }).catch(
        (err)=>{console.log(err)}
    );

//wildpage
server.get('/',(req, res)=>{
    res.send("server is up amd running")
});

//port for server
server.listen('3000',()=>{
    console.log("server is running on port 3000")
});

//inserting student data
server.post('/students', async(req,res)=>{
    try{ 
        console.log(req.body);
        const student =  new Student(req.body);
        await student.save();
        res.status(201).send(student);
    }
    catch(err){
        res.status(500).send(err);
    }
})

//retrieving data
server.get('/students', async(req,res)=>{
    try{
        const student =  await Studenttudent.find();
        res.send(student);
    }
    catch(err){
        res.status(500).send(err);
    }
})

//reteieve data with id
server.get('/students/:id', async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        res.send(student);
        if(!student){
            res.status(404).send('data not found please recheck');
        }
    }
    catch(err){
        res.status(500).send(err);
    }
})

//update entry
server.put('/students/:id', async(req, res)=>{
    try{
        const studentupdate= await Student.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.send(studentupdate);
    }
    catch(err){
        res.status(500).send(err);
    }
})

//delete data
server.delete('/products/:id', async(req, res)=>{
    try{
        const student= await Student.findByIdAndDelete(req,params.id);
        res.send(student);
    }
    catch(err){
        res.status(500).send(err);
    }
})