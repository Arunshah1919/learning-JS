const mongoose = require("mongoose");
const vaidator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
    type: String,
    required : true,
    minLength : 3
},
  email: {
    type: String,
    required: true,
    unique: [true, "Email Id already present"],
    validator(value){
        if (validator.isEmail(value)) {
            throw new Error("Invaild Email")
        }
    }
},
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    address: {
        type:String,
        required: true
    }
});

//Create a new collaction
 const Student = new mongoose.model("Student", studentSchema);
 
 module.exports = Student;