import {useState,useEffect} from "react";
import axios from "axios";

function MarketPlace({ language }){

const [products,setProducts]=useState([]);

const [crop,setCrop]=useState("");
const [quantity,setQuantity]=useState("");
const [price,setPrice]=useState("");

const [search,setSearch]=useState("");

const translations={

en:{
title:"Marketplace 🛒",
search:"Search Crop",
crop:"Crop",
quantity:"Quantity",
price:"Price",
add:"Add Product",
delete:"Delete",
alert:"Please fill all fields"
},

te:{
title:"మార్కెట్ ప్లేస్ 🛒",
search:"పంట వెతకండి",
crop:"పంట",
quantity:"పరిమాణం",
price:"ధర",
add:"ఉత్పత్తి జోడించండి",
delete:"తొలగించండి",
alert:"అన్ని వివరాలు నమోదు చేయండి"
},

hi:{
title:"मार्केटप्लेस 🛒",
search:"फसल खोजें",
crop:"फसल",
quantity:"मात्रा",
price:"कीमत",
add:"उत्पाद जोड़ें",
delete:"हटाएँ",
alert:"सभी फ़ील्ड भरें"
}

};

const t=translations[language] || translations.en;

const fetchProducts=async()=>{

const res=await axios.get(

`http://localhost:5000/api/products?search=${search}`

);

setProducts(res.data);

};

useEffect(()=>{

fetchProducts();

},[search]);

const addProduct=async()=>{

if(!crop || !quantity || !price){

alert(t.alert);
return;

}

await axios.post(

"http://localhost:5000/api/products",

{
crop,
quantity,
price
}

);

setCrop("");
setQuantity("");
setPrice("");

fetchProducts();

};

const deleteProduct=async(id)=>{

await axios.delete(

`http://localhost:5000/api/products/${id}`

);

fetchProducts();

};

return(

<div>

<h2>{t.title}</h2>

<input
placeholder={t.search}
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<br/><br/>

<input
placeholder={t.crop}
value={crop}
onChange={(e)=>setCrop(e.target.value)}
/>

<input
placeholder={t.quantity}
value={quantity}
onChange={(e)=>setQuantity(e.target.value)}
/>

<input
placeholder={t.price}
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<button onClick={addProduct}>
{t.add}
</button>

<hr/>

{

products.map((p)=>(

<div
key={p._id}
className="product"
>

<h3>{p.crop}</h3>

<p>
{t.quantity}: {p.quantity}
</p>

<p>
₹ {p.price}
</p>

<button
onClick={()=>deleteProduct(p._id)}
>

{t.delete}

</button>

</div>

))

}

</div>

);

}

export default MarketPlace;