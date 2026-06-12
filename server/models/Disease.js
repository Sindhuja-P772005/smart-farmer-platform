const mongoose=require("mongoose");

const diseaseSchema=new mongoose.Schema({

crop:{
type:String,
required:true
},

disease:{
type:String,
required:true
},

image:{
type:String
}

});

module.exports=
mongoose.model(
"Disease",
diseaseSchema
);