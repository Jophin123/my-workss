const express = require('express');


const app=express()
app.get("/",(req,res)=>{
    res.send("helo world");
})

app.listen(4000, ()=>{
    console.log("ready");
})