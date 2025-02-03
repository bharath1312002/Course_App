const express=require("express");
const app=express();
const bodyParser = require('body-parser');
const port=3000;
const Adminrouter=require("./routes/Admin");
const Userrouter=require("./routes/Users");
const cors=require("cors");
app.use(cors());


app.use(bodyParser.json());
app.use('/Admin',Adminrouter);
app.use('/User',Userrouter);


app.listen(port,function(){
    console.log("Server Created");
})