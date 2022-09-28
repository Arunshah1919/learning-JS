const http = require ("http");
const fs = require ("fs");
const requests = require ("requests")

const readFile = fs.readFileSync("home.html", "utf-8");
const replaceVal = (tempval, orgVal) =>{
    let temperature = tempval.replace("{%tempVal%}", parseInt(orgVal.main.temp/10));
     temperature = temperature.replace("{%tempMin%}", parseInt(orgVal.main.temp_min/10));
     temperature = temperature.replace("{%tempMax%}", parseInt(orgVal.main.temp_max/10));
     temperature = temperature.replace("{%loction%}", orgVal.name);
     temperature = temperature.replace("{%country%}", orgVal.sys.country);
     temperature = temperature.replace("{%tempStatus%}", orgVal.weather[0].main);
     return temperature;
};

const server = http.createServer((req,res) =>{
    if (req.url == "/") {
        requests('https://api.openweathermap.org/data/2.5/weather?q=ludhiana&appid=8f04961e0a6dd4f80d4c7d39c8051b15')
.on('data',  (chunk) => {
    const objData = JSON.parse(chunk);
    const arrData = [objData];
//   console.log(arrData);
    const realTimeData = arrData.map((val) =>{
        return replaceVal(readFile, val);
    })
    res.write(realTimeData[0]);
})
.on('end',  (err) => {
  if (err) return console.log('connection closed due to errors', err);
 
  res.end();
});
    }
})
server.listen(3050,()=>{
    console.log('server is running');
});