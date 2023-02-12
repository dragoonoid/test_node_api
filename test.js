// const express=require('express')();

const express=require('express');

// creating an server instance
const app=express(); 


app.get('/',(req,res)=>{
    res.status(200).send({message:"Home Page"})
})
app.get('/about',(req,res)=>{
    res.status(200).send("About Page")
})

app.all('*',(req,res)=>{
    res.status(404).send("Page Not Found");
})

app.listen(8000,()=>{
    console.log("server listening to the port: 5000...");
})