//jshint esversion:6
const express = require("express");
const  bodyParser= require("body-parser");
const app= express();

const port=4000;
app.use(bodyParser.urlencoded({extended: true}));
 app.get("/",function(req,res){
 	res.sendFile(__dirname+"/index.html")
 	//(__dirname)

 });
 app.post("/", function(req,res) {
 	//console.log(req.body,num1);
 	var num1=Number(req.body.num1);
 	var num2= Number(req.body.num2);
 	var result=num1+num2;
 	res.send("result of calculation is:"+result);
 });
  app.get("/bmiCalculator",function(req,res){
 	res.sendFile(__dirname+"/bmicalculator.html")
 	//(__dirname)

 });
  app.post("/bmicalculator", function(req,res) {
 	//console.log(req.body,num1);
 	var weight=parseFloat(req.body.weight);
 	var height= parseFloat(req.body.height);
 	var result=weight/(height*height);
 	res.send("result of BMI calculation is:"+result);
 });

 
 app.listen(port,()=>{
 	console.log(`sever is runing at port ${port}`);
 })

