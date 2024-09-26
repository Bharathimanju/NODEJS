var f1=require('fs')
f1.rename('sample.txt','manju.txt',function(err){
    if(err)
        console.log("Error")
    else
        console.log("Renamed")
})

