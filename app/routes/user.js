const express=require('express');
const multer=require('multer')

const createUser=require('../controller/user/createUser');
const getAllUsers=require('../controller/user/getAllUser');
const updateUser=require('../controller/user/updateUser');
const getUser=require('../controller/user/getUserById');

const router=new express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});



var upload = multer({ storage: storage })


router.post('/createUser',upload.single('file'),createUser);
router.get('/getAllUsers',getAllUsers);
router.put('/updateUser',updateUser);
router.get('/getUser/:id',getUser);

module.exports=router;