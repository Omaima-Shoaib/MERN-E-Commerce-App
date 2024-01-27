const express =require('express');
const app =express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
//never share this secret key !!!!!!!!!!!!!!!!!!
mongoose.connect(
   process.env.MONGO_URL)
    .then(
    ()=>console.log('successfully DB connected')
).catch(e=>console.log(e.message))


app.listen(process.env.PORT || 5000,()=>{
    console.log('backend server is running!')
})