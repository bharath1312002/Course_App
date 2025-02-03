const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://bharathdbit:Bharath%40911@cluster0.qtybwjr.mongodb.net/CoursesApplication?retryWrites=true&w=majority");

const AdminSchema= new mongoose.Schema({

Adminname: String,
Password: String,

})

const UsersSchema= new mongoose.Schema({
Username:String,
Password:String,
ParchasedCourses:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Course'
}]

})

const CourseSchema= new mongoose.Schema({
    CourseTitle:String,
    CourseDescription:String,
    price:Number,
    img:String

})

const Admin= mongoose.model('Admin',AdminSchema);
const Course=mongoose.model('Course',CourseSchema);
const User=  mongoose.model('User',UsersSchema);


module.exports={
    Admin,
    Course,
    User
}