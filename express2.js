const express =require('express')
const app= express()
app.use(express.text)
app.post("/",function(req,res){
    console.log(req,body)
    res.send()
}).listen(3002)
console.log("sever is running")