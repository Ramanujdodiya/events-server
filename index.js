require('dotenv').config()
const express= require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true }).then(res=>{
    console.log(`DB connected`)
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Routes
const registerRoute=require('./routes/register')
const loginRoute=require('./routes/login')
const auth=require('./routes/auth')
app.use('/register',registerRoute)
app.use('/login',loginRoute)




app.get('/',(req,res)=>{
    res.send('Hello');
})


app.get('/check',auth,(req,res)=>{
    res.send(req.userId);
})
const port=process.env.PORT
app.listen(port,()=>{console.log(`listening on ${port}`)});