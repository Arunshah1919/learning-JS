const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api", {
    // useCreateindex : true,
    // useNewUrlParser : true,
    // useUnifiedTopology : true
}).then(()=> {
    console.log("Connection is sucessful");
}).catch((e)=>{
    console.log(" No Connection ");
})