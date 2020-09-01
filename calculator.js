const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res){
  res.sendFile(__dirname +"/index.html");
});

app.post("/",function(req, res){

  var v1=Number(req.body.weight);
  var v2=Number(req.body.height);
  var r=v1/(v2*v2);
  res.send("<h1>Your BMI is " + r+ "</h1>");
});


app.listen(3000);
