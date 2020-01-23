route=require('express').Router();

taskslist=[{task:'do cpp'},{task:'do webDev'},{task:'do taShip'}];

route.get('/',function(req,res,next)
{  res.send(taskslist); })

route.post('/',function(req,res){
    taskslist.push({task:req.body.task})
        res.send(taskslist);
})

module.exports=route