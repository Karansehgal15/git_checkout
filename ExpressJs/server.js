xp=require('express')
const server=xp()

const m1=function(req,res,next)
{   console.log("Hi, m1s"); next(); }

const m2=function(req,res,next)
{   console.log("Hi, m2s"); next(); }


const m3=function(req,res,next)
{   console.log("Hi, m3s");  next(); }

server.use(m1);


server.get('/',function(req,res,next)
{ 
    console.log("Hi, karan");  

})
server.use(m2);
server.use(m3);
server.listen(2121)