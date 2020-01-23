route=require('express').Router()

let student_info=[
    { name:'karan' , sub:'c++,ml and development ' },
    { name:'rishabh' , sub:'c++ and development' }
]

route.get('/',(req,res)=>res.send(student_info));
route.get('/:id',(req,res)=>res.send(student_info[req.params.id]));

// post request
route.post('/',(req,res)=>{
    student_info.push(
        {
            name:req.body.name,
            sub:req.body.sub
        }
    )
})

module.exports=route
