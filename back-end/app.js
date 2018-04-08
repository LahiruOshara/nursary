//injecting dependencies
const express = require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors =require('cors');
const passport= require('passport');
const mongoose=require('mongoose');
const config=require('./config/database');


//connect to the database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Database connected '+config.database);
});
mongoose.connection.on('error',(error)=>{
    console.log('Dtabase error:'+error);
});


const app= express();//express instance
const users=require('./routes/usersRoutes');//routes
const port=4000;//port

//cors Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

//pasport middleware
app.use(passport.initialize());
app.use(passport.session());

//passport folder
require('./config/passport')(passport);

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/users',users);

//index route
app.get('/',(req,res,next)=>{
    res.send("Invalid Point");
});


//start server
 app.listen(port,()=>{
     console.log('Server started on port '+port);
 });
