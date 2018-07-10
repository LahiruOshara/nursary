//injecting dependencies
const express = require('express');
const path=require('path'); // this is a core module
const bodyParser=require('body-parser');
const cors =require('cors'); 
const passport= require('passport');
const mongoose=require('mongoose');
const config=require('./config/database');

const app = express(); //express instance
const port = 4000; //port

//connect to the database
mongoose.connect(config.database);
//connection status
mongoose.connection.on('connected',()=>{
    console.log('Database connected '+config.database);
});
mongoose.connection.on('error',(error)=>{
    console.log('Dtabase error:'+ error);
});

//******Middleware******
//cors Middleware
app.use(cors()); //alows us to make a request to our API from a deferent domain

//Body Parser Middleware
app.use(bodyParser.json()); 

//pasport middleware
app.use(passport.initialize());
app.use(passport.session());

//passport folder
require('./config/passport')(passport);

//set static folder
app.use(express.static(path.join(__dirname,'public')));


// ******ROUTES******
//index route
app.get('/',(req,res,next)=>{
    res.send("First");
});

// user routes
const users = require('./routes/usersRoutes');
app.use('/users',users);
//teacher routes
const teachers= require('./routes/teacherRoutes');
app.use('/teachers',teachers);
//student routes
const students=require('./routes/studentRoutes');
app.use('/student',students)
const parent=require('./routes/parentRoutes');
app.use('/parent',parent)



//start server
 app.listen(port,()=>{
     console.log('Server started on port ' + port);
 });
