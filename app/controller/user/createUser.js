const User=require('../../model/user');
const multer=require('multer');

const sharp=require('sharp');


const createUser = async(req,res) => {

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
    });
    
    
    
    var upload = multer({ storage: storage });

   //Body

const user = new User({
    email:req.body.email,
    name:req.body.name,
    phone:req.body.phone,
    photo:req.file.path,
    degree:req.body.degree})

     try{
         const data= await User.create(user)
         res.status(200).send({
             status:200,
             Message:"success",
             Data:data
         })

     }catch(err){
         res.status(500).send({
             status:500,
             Message:err
         })
     }
}

module.exports = createUser