route=require('express').Router()

let teachers_info=[
    { name:'ankush' , sub:'c++ and ml' },
    { name:'arnav' , sub:'development' }
]

route.get('/',(req,res)=>res.send(teachers_info));
route.get('/:id',(req,res,next)=>{
    if(isNaN(parseInt(req.params.id)))
        next();
    res.send(teachers_info[req.params.id])
});
route.get('/add',(req,res)=>{
teachers_info.push({name:req.query.name ,sub:req.query.sub });
res.send(teachers_info);
})
module.exports=route
