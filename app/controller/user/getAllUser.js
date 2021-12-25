const User=require('../../model/user');

const getAllUsers=async(req,res)=>{
    try{
    
    await User.findOne({}).then(data=>{

        if(data.length!=0){
            res.status(200).send({
                status:200,Data:data
            })
        }
        else if (data.length==0)
            {
                res.status(200).send({
                    status:200,Data:[],Message:"No users found"
                })

        }
        
   
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

module.exports=getAllUsers;