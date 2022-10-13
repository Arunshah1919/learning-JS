const express = require("express");
const app = express();
require("./db/conn");
const Student = require("./models/students")
const port = process.env.PORT || 3000;
app.use(express.json())

//create a new students
app.post("/students", (req,res)=>{
    
    const user = new Student(req.body)

    user.save().then(()=>{
        res.send(user)
    }).catch(e=> res.send(e))
});
app.get('/students',async(req,res)=>{
    const users= await Student.find()
    if(users){
        res.send(users)
        return
    }
    else{
        res.send(e)
    };
    

});

app.listen(port, ()=>{
    console.log(`Connection is setup at ${port}`);
});