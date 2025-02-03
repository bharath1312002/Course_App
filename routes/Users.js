const {Router}=require("express");
const router=Router();
const { User, Course }=require("../db");
const {UserMiddleware}=require("../middlewares/user");



router.post("/CreateUser",async (req,res)=>{

    const Username=req.body.user;
    const Password=req.body.pass;

        await User.create({
            Username,
            Password
        });
        res.json({
            msg:"User Created",
        });
});


router.get("/getAllCourse",UserMiddleware,async (req,res)=>{

        const Courses=await Course.find({}); 
        res.json({
            courses:Courses,
        });
});

router.post("/PurchaseCourse/:courseId",UserMiddleware,async (req,res)=>{
    const courseId=req.params.courseId;
    const username=req.headers.User;

    await User.updateOne(
        {
            Username:username,
        },
        {
            "$push" : {
                ParchasedCourses:courseId,
            }
        }
    )
    res.json({
        message: "Purchase complete!"
    })
    
});

router.get("/PurchasedCourse",UserMiddleware,async (req,res)=>{

   const user= await User.findOne({
       username : req.headers.User,
       
   })

   const courses= await Course.find({
    _id: {
        "$in": user.ParchasedCourses,
    }
   });
   res.json({
    courses,
   })
    
});




module.exports= router;