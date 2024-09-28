const express=require('express')
const app=express();
const PORT =3000;
app.all ('/user', function (req, res,next){
    console.log('user api called......')
    next();
})
app.listen(PORT,function (err){
    if(err) console.log('server listeningon port')
})
