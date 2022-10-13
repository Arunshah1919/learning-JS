const express = require("express");
const async = require("hbs/lib/async");
const routes = express.Router();

const Detail =  require("../models/Detail");
const Service = require("../models/Service");
const Slider = require("../models/Slider");
const Contact = require("../models/Contact");
const Gallery = require("../models/Gallery")

routes.get("/", async(req, res )=> {

   const detail = await Detail.findOne({"_id": "634029139a8ebb3d3306754f"});
   const slides = await Slider.find();
   const services = await Service.find();
   //console.log(detail);
   //console.log(slides); 

    res.render ("index",{
        detail:detail,
        slides:slides,
        services:services,
    });
});

routes.get("/gallery", async(req, res )=> {
    const detail = await Detail.findOne({"_id": "634029139a8ebb3d3306754f"});
    const gallery = await Gallery.find();
    res.render ("gallery",{
        detail:detail,
        gallery:gallery
        
    });

});

routes.post("/process-contact-form" ,async(req,res) => {
    try {
        const data = await Contact.create(req.body);
       // console.log(data);
        res.redirect("/")

    } 
    catch (e) {
        console.log(e);
        res.redirect("/");
    }
})

module.exports = routes

