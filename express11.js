const express =require('express')
const app =express();
app.locals.Rollno='1'
app.locals.name='manju'
app.locals.company='ABC ltd'
app.locals.salary='20000'
console.log(app.locals);

