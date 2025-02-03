const {Router}=require("express");
const { Admin, Course }=require("../db");
const router=Router();
const {AdminMiddleware}=require("../middlewares/Admin")


router.post('/AdminCreate',async (req,res)=>{

    const Adminname=req.body.user;
    const Password=req.body.pass;

   await Admin.create({
        Adminname,
        Password
    })

    res.json({
        msg:"Admin Created"
    })

});

router.post('/CreateCourse',AdminMiddleware,async function(req,res){

    const CourseTitle=req.body.CourseTitle;
    const CourseDescription=req.body.CourseDescription;
    const price=req.body.price;
    const img=req.body.img;

    await Course.create({
    CourseTitle,
    CourseDescription,
    price,
    img
    })
    res.json({
        msg:"Course Created"
    })

})

router.get('/getAllCourses',AdminMiddleware,async function(req,res){
    const courses=await Course.find({});
    res.json({courses:courses})
})

module.exports = router;