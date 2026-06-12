const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async(req,res)=>{

try{

const {
name,
email,
password,
role
} = req.body;

const existingUser =
await User.findOne({email});

if(existingUser){

return res.status(400).json({
message:"User already exists"
});

}

const hashedPassword =
await bcrypt.hash(password,10);

await User.create({

name,
email,
password:hashedPassword,
role

});

res.status(201).json({
message:"Registration Successful"
});

}
catch(err){

console.log(err);

res.status(500).json({
message:"Server Error"
});

}

};

exports.login = async(req,res)=>{

try{

const {
email,
password
} = req.body;

const user =
await User.findOne({email});

if(!user){

return res.status(400).json({
message:"User not found"
});

}

const isMatch =
await bcrypt.compare(
password,
user.password
);

if(!isMatch){

return res.status(400).json({
message:"Invalid Credentials"
});

}

const token =
jwt.sign(

{id:user._id},

"secretkey",

{expiresIn:"1d"}

);

res.status(200).json({

message:"Login Successful",

token,

role:user.role

});

}
catch(err){

console.log(err);

res.status(500).json({
message:"Server Error"
});

}

};