 
var express = require("express");
var bodyparser = require("body-parser");
var app = express();
var request = require("request");
require("dotenv").config();
const api_key = process.env.API_KEY;
app.use(bodyparser.json());

let air_data = request.get(`https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=${api_key}&format=json&offset=0&limit=10`, (error, response, body) =>{
    if(error) {
        return console.log("error");
    }
    //console.dir(JSON.parse(body));
    return JSON.parse(body);
 });

//  var mandi_data = request.get(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${api_key}&format=json&offset=0&limit=10`, (error, response, body)=>{
//      if(error) {
//          return console.log("error");
//      }
//      return JSON.parse(body);
//  })

//  var mandi_data_1 = request.get(`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001f8b3ce73c1df400a799e1878f48b18f0a&format=json&offset=0&limit=10`, (error, response, body)=>{
//      if(error) {
//          return console.log("error");
//      }
//      return JSON.parse(body);
//  });


// console.log(mandi_data_1);
  console.log(air_data);

// console.log(api_key);