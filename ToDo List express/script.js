const express = require("express");
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('<b>Hi cutiee!</b>');
})

// app.post("/backend", (req,res)=>{ 
//     res.send('<b>Hi There!</b>');
// })

app.listen(port, ()=>{
    console.log(`server is running in  http://localhost:${port}`);
})