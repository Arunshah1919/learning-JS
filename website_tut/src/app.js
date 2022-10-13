const express = require("express");
const app = express();
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/main");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const Gallery = require("./models/Gallery");

//static
app.use(bodyParser.urlencoded ({
    extended : true
}));
app.use("/static",express.static("public"));
app.use("" ,routes);

app.set( "view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

//db connectios
mongoose.connect("mongodb://localhost:27017/website_tut", ()=> {
    console.log("Database connected");

    // Gallery.create ([
    //     {
    //         imageUrl: "https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__480.jpg"
    //     },
    //     {
    //         imageUrl: "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920__480.jpg"
    //     },
    //     {
    //         imageUrl: "https://cdn.pixabay.com/photo/2016/11/30/20/44/computer-1873831__480.png"
    //     },
      
    // ])

    // Service.create([
    //     {
    //         icon:"fab fa-accusoft",
    //         title:"Provide Best Courses",
    //         description:"We provide best courses that help our students in learnings and placement.",
    //         linkText:"Check",
    //         link: "http://www.arunshah.com"
    //     },
    //     {
    //         icon:"fab fa-book",
    //         title:"Learn Projects",
    //         description:"We provide best courses that help our students in learnings and placement.",
    //         linkText:"Check",
    //         link: "http://www.arunshah.com"
    //     },
    //     {
    //         icon:"fab fa-clipboard-question",
    //         title:"Provide Best Courses",
    //         description:"We provide best courses that help our students in learnings and placement.",
    //         linkText:"Check",
    //         link: "http://www.arunshah.com"
    //     },
    // ]);

    // Slider.create([
    // {
    //      title: "Learn java in very easy manner",
    //      subTitle: "Java is very popular progaming language",
    //      imageUrl: "/static/images/s1.png"
    // },
    // {
    //      title: "What is django?",
    //      subTitle: "Django is most famous framework of python programmig",
    //      imageUrl: "/static/images/s2.png"
    // },
    // {
    //      title: "What about node js?",
    //      subTitle: "Node js is runtime enviourment to execute javscript outside browser",
    //      imageUrl: "/static/images/s3.png"
    // },
    // ]);


    // Detail.create({
    //     brandName: "Urban Cave",
    //     brandIcon : "./static/images/use.jpg",
    //     links: [
    //         {
    //         label: "Home",
    //         url: "/",
    //     },
    //     {
    //         label: "Services",
    //         url: "/services",
    //         },
    //     {
    //         label: "Gallery",
    //         url: "/gallery",
    //         },
    //     {
    //         label: "About",
    //         url: "/about",
    //         },
    //     {
    //         label: "Contact Us",
    //         url: "/contact-us",
    //         },
    //     ]
    // });
});

app.listen(process.env.PORT | 5566, ()=>{
    console.log("server started");
});