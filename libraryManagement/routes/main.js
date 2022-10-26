const express = require("express");
const app = express();
const routes = express.Router();
app.use(express.json());

const Books =  require("../models/Books");


//Update a new book
routes.post("/", (req,res)=>{
    
    const user = new Books(req.body)

    user.save().then(()=>{
        res.send(user)
    }).catch(e=> res.send(e))
});

routes.get('/',async(req,res)=>{
    const users= await Books.find()
    if(users){
        res.send(users)
        return
    }
    else{
        res.send(e)
    };
    

});


module.exports = routes;