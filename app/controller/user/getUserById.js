const User=require('../../model/user');

const getUser=async(req,res)=>{
    try{
    const id=req.params.id;
    await User.findOne({_id:id}).then(data=>{
    res.status(200).send({
        status:200,Data:data
    })
    }).catch(err=>{
        res.status(400).send({
            status:400,
            Message:"Unable to get user"
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

module.exports=getUser