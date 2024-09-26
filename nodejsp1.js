var h1=require('http')
h1.createServer(function(req,res)
{
    res.writeHead(200,{'conten-type':'text/html'})
    res.write('<h1>helloworld</h1>')
}).listen(3080)
console.log("sever is running")