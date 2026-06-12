const Disease=
require("../models/Disease");

exports.detectDisease=
async(req,res)=>{

try{

const crop=req.body.crop;

let result="Healthy Crop";

if(crop==="Rice"){

result="Leaf Blast Disease";

}
else if(crop==="Tomato"){

result="Tomato Yellow Leaf Curl";

}
else if(crop==="Cotton"){

result="Bacterial Blight";

}

const disease=
await Disease.create({

crop,

disease:result,

image:req.file ?
req.file.filename : ""

});

res.json(disease);

}
catch(err){

console.log(err);

res.status(500).json({

message:"Server Error"

});

}

};