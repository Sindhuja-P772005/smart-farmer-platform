const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const authRoutes=
require("./routes/authRoutes");

const productRoutes=
require("./routes/productRoutes");

const diseaseRoutes=
require("./routes/diseaseRoutes");

const newsRoutes=
require("./routes/newsRoutes");

const app=express();

app.use(cors());
app.use(express.json());

app.use(
"/uploads",
express.static("uploads")
);

mongoose.connect(

"mongodb://sindhusindhujap9_db_user:q2Mgs8O0PuvpSDWu@ac-lzvwikv-shard-00-00.loyw2bn.mongodb.net:27017,ac-lzvwikv-shard-00-01.loyw2bn.mongodb.net:27017,ac-lzvwikv-shard-00-02.loyw2bn.mongodb.net:27017/?ssl=true&replicaSet=atlas-m53b27-shard-0&authSource=admin&appName=Cluster0"

)

.then(()=>{

console.log(
"MongoDB Connected"
);

})

.catch((err)=>{

console.log(err);

});

app.use(
"/api/auth",
authRoutes
);

app.use(
"/api/products",
productRoutes
);

app.use(
"/api/disease",
diseaseRoutes
);

app.use(
"/api/news",
newsRoutes
);

app.listen(
5000,
()=>{

console.log(
"Server Running at 5000"
);

}
);