 
var express = require("express");
var bodyparser = require("body-parser");
var app = express();
require("dotenv").config();
const api_key = process.env.API_KEY;
app.use(bodyparser.json());
var request = require("request");
var data = request.get(`https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=${api_key}&format=json&offset=0&limit=10`, (error, response, body) =>{
    if(error) {
        return console.log(error);
    }
    console.dir(JSON.parse(body));
    return JSON.parse(body);


 });

console.log(api_key);