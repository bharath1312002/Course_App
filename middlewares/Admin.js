const { Admin }=require("../db");
 async function AdminMiddleware(req,res,next){

    const Adminname= req.headers.user;
    const Password= req.headers.pass;

  const Admins=await  Admin.findOne({
        
        Adminname,
        Password

    })
    if(Admins){
        next();
    }
    else{
        res.json({
            msg:"Admin doesnt exist",
        })
    }
}

module.exports={
    AdminMiddleware,
}

