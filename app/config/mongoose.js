const mongoose = require('mongoose');
const config=require('../../config.json');

const connectToDatabase=()=>{
    mongoose.connect((config.DB_URL),{


useNewUrlParser: true,
useUnifiedTopology: true
})
.then(()=>{
   
console.log('Database connected')
}).catch((err)=>{
    console.log(err)
    console.log('Not connected to database')
})
}



module.exports=connectToDatabase;

