// const express=require('express')
// const app=express()
// app.disable('trust proy');
// console.log(app.get('trust proxy'))

const express=require('express')
const app=express()
app.enable('trust proy');
console.log(app.get('trust proxy'))