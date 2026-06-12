import {useEffect,useState} from "react";
import axios from "axios";

function GovernmentNews({ language }){

const [news,setNews]=useState([]);

const translations={

en:{
title:"Government Schemes 📰",
loading:"Loading..."
},

te:{
title:"ప్రభుత్వ పథకాలు 📰",
loading:"లోడ్ అవుతోంది..."
},

hi:{
title:"सरकारी योजनाएँ 📰",
loading:"लोड हो रहा है..."
}

};

const t=translations[language] || translations.en;

useEffect(()=>{

fetchNews();

},[]);

const fetchNews=async()=>{

try{

const res=
await axios.get(

"http://localhost:5000/api/news"

);

setNews(
res.data
);

}

catch(err){

console.log(err);

}

};

return(

<div>

<h2>
{t.title}
</h2>

{

news.length===0 ?

<p>
{t.loading}
</p>

:

news.map((item,index)=>(

<div
key={index}
className="product"
>

<h3>
{item.title}
</h3>

<p>
{item.description}
</p>

<hr/>

</div>

))

}

</div>

);

}

export default GovernmentNews;