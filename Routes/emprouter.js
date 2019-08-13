var express=require("express");
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var url="mongodb://localhost/sdb";
var emp=require("../model/employee");

const router=express.Router();
router.use(bodyparser.urlencoded({extended:true}))

mongoose.connect(url,function(err){
    if (err) throw err;
    else{
        console.log("Databse Connected...");
    }
})
router.get("/",function(req,res){
    res.render("emp");
})
router.get("/newemp",function(req,res){
    res.render("newemp")
})
router.get("/viewemp",function(req,res){
    emp.find({},function(err,result){
        if (err) throw err;
        else
        {
            console.log(result);
            res.render('viewemp',{empoutput:result});
        }
    })
    
})

router.post("/add",function(req,res){
    var e1=new emp();
    e1.eid=req.body.eid;
    e1.ename=req.body.ename;
    e1.salary=req.body.esal;
    e1.save(function(err){
        if(err) throw err;
        else
        {
            res.send("Data Added...")
        }
    });

})

router.get("/view",function(req,res){
    res.send("Emplooyees view page");
})
module.exports=router;