const express=require('express');
const app=new express();
const config=require('./config.json');
const connectToDatabase=require('./app/config/mongoose');


// const bodyparser = require('body-parser');


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


app.get('/',(req,res)=>{
    res.send(
        "welcome to the think_201 challenge by sudharshan"
    )
});


//connecting to the database;

connectToDatabase();

//UserRoutes;
app.use(require('./app/routes'));


app.listen(config.PORT,()=>{
    console.log(`Server is started on ${config.PORT} successfully`)
})


