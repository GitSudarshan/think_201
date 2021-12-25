const User=require('../../model/user');

const updateUser=async(req,res)=>{
    try{
    const id=req.body._id;
    console.log(id)
    const updates={...req.body};
    await User.findOneAndUpdate({_id:id},{$set:updates},{new:true}).then(data=>{

       
            res.status(200).send({
                status:200,Data:data
            })
    
    }).catch(err=>{
        res.status(400).send({
            status:400,     
            Message:"Unable to update user"
        })
    })
    }
    catch(err)
    {
    res.status(500).send({
        status:500,
        Message:"Technical issues.Try again"
    })
    }
}

module.exports=updateUser;