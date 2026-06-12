const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({

crop:{
type:String,
required:true
},

quantity:{
type:String,
required:true
},

price:{
type:Number,
required:true
},

category:{
type:String,
default:"General"
},

description:{
type:String
}

});

module.exports=mongoose.model(
"Product",
productSchema
);