const express=require('express');
const app=express();
const PORT =3001
app.delete('/',(req, res)=>{
    res.send('Delete request called')
})
app.listen(PORT, function (err){
    if(err)console.log(err);
    console.log("sever is running")
})