xp=require('express');
srvr=xp();

stuRoute=require('./studentsRoute');
teaRoute=require('./teacherRoute');

srvr.use(xp.json());
srvr.use(xp.urlencoded({extended:true}));
srvr.use('/teachers',teaRoute);
srvr.use('/students',stuRoute);

srvr.listen(2121);