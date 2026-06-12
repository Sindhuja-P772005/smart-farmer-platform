const Product=require("../models/Product");

exports.addProduct=async(req,res)=>{

try{

const product=await Product.create(req.body);

res.status(201).json(product);

}
catch(err){

res.status(500).json({
message:"Server Error"
});

}

};

exports.getProducts=async(req,res)=>{

try{

const search=req.query.search || "";

const category=req.query.category || "";

let query={};

if(search){

query.crop={
$regex:search,
$options:"i"
};

}

if(category){

query.category=category;

}

const products=await Product.find(query);

res.json(products);

}
catch(err){

res.status(500).json({
message:"Server Error"
});

}

};

exports.deleteProduct=async(req,res)=>{

try{

await Product.findByIdAndDelete(
req.params.id
);

res.json({
message:"Product Deleted"
});

}
catch(err){

res.status(500).json({
message:"Server Error"
});

}

};

exports.updateProduct=async(req,res)=>{

try{

const product=
await Product.findByIdAndUpdate(

req.params.id,
req.body,
{new:true}

);

res.json(product);

}
catch(err){

res.status(500).json({
message:"Server Error"
});

}

};