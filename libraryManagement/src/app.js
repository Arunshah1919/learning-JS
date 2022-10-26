const mongoose = require("mongoose");
const express = require("express");
const app = express();
const routes = require("../routes/main");
const Books = require("../models/Books");
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/library_management", ()=> {
    console.log("Database connected")});
app.use("/books", routes);

// Books.create([
//     {
//         bookName: "Horror",
//         bookAuthor: "Arun"
//     },
//     {
//         bookName: "Comedy",
//         bookAuthor: "Gaurav"
//     },
//     {
//         bookName: "Sad",
//         bookAuthor: "Arjun"
//     },
//     {
//         bookName: "Motivation",
//         bookAuthor: "Amit"
//     },
// ]);

app.listen(process.env.PORT | 5554, ()=>{
    console.log("server started");
});