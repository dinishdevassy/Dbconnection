var express=require("express");
var emprouter=require("./Routes/emprouter");

const app=express();

app.set("view engine","ejs");
app.set("views","./src/views")


app.use("/emp",emprouter);

app.listen(8080,function(req,res){
    console.log("Server Started Listening...");
})

app.get("/",function(req,res){
    res.render("home");
})
