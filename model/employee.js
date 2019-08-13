var mongoose=require("mongoose");
var schema=mongoose.Schema;//instance created for schema

var empschema=new schema(
    {
        eid:{type:String,required:true},
        ename:{type:String,required:true},
        salary:Number
    }
)
var empmodel=mongoose.model("employee",empschema);
module.exports=empmodel;