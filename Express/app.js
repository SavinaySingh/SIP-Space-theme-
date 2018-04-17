var express=require('express');
var app=express();
// var path=require("path");
app.use(express.static("public"));
app.get("/",function (req , res) {
   // res.sendFile(path.join(__dirname+'/homePage.html'));
   //  var thing=req.params.thing;
   //  res.render("practice.ejs",{name:thing});
    res.render("home.ejs")
});


app.listen(3000 ,function () {
   console.log("Server Has Started")
});