//we will use express router
const router=require('express').Router();

//our endpoints
router.get('/usertest',(req,res)=>{
    res.send('User test is successfull')
});

router.post('/userposttest',(req,res)=>{
    const username=req.body.username;
    res.send('your user name is: '+username)
    console.log(username)
})

module.exports=router