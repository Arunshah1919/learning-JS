const fs = require("fs");

const bioData = {
    name : "Arun",
    age : 25,
    email : "arunshah1919@gmail.com"
};

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err) =>{
    console.log("done");
});

fs.readFile("json1.json", "utf-8", (err,data)=>{
    const ogData = JSON.parse(data);
    console.log(ogData);
    console.log(data);
});
