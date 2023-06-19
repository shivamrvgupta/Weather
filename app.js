var express = require("express");
var https = require("https");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    
    res.sendFile(__dirname+ "/index.html")
});

app.post("/",function(req,res){
    
    var place= req.body.cityName; 
    const appid= "519691e61b688a0b861d9b0f7ff781bf";
    const units= "metric";
    const url= "https://api.openweathermap.org/data/2.5/weather?q="+place+"&appid="+appid+"&units="+unitswx;
    https.get(url,function( response){
        console.log(response.statusCode);
    
    response.on("data", function(data){
        const weatherData = JSON.parse(data)
        // console.log(weatherData) 
    
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imgUrl = "https://openweathermap.org/img/wn/"+ icon + "@2x.png" ;
        res.write("<p>The weather is currently "+ weatherDescription + "</p>");
        res.write("<h1>The Temperature in "+ place+" is "+ temp + " Celsius</h1>");
        res.write("<img src= "+ imgUrl +" >")
        
        res.send()
    
    })
    
    })
})



app.listen(3000, function(req,res){
    console.log("Listening to port 3000")
})