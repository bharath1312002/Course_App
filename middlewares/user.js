const { User }=require("../db");

 async function UserMiddleware(req,res,next){

    const Username= req.body.user;
    const Password= req.body.pass;

  const Users=await  User.findOne({
          
        Username,
        Password

    })
    if(Users){
        next();
    }
    else{
        res.json({
            msg:"User doesnt exist Try Signup",
        })
    }
}

module.exports={
    UserMiddleware,
}