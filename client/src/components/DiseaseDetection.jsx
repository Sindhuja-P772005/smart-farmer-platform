import {useState} from "react";
import axios from "axios";
import "../App.css";

function DiseaseDetection({ language }){

const [crop,setCrop]=useState("");
const [image,setImage]=useState(null);
const [result,setResult]=useState("");

const translations={

en:{
title:"Disease Detection 🦠",
selectCrop:"Select Crop",
rice:"Rice",
tomato:"Tomato",
cotton:"Cotton",
detect:"Detect Disease",
prediction:"Prediction",
alert:"Please select crop and image"
},

te:{
title:"వ్యాధి గుర్తింపు 🦠",
selectCrop:"పంట ఎంచుకోండి",
rice:"బియ్యం",
tomato:"టమాటా",
cotton:"పత్తి",
detect:"వ్యాధిని గుర్తించండి",
prediction:"ఫలితం",
alert:"దయచేసి పంట మరియు చిత్రం ఎంచుకోండి"
},

hi:{
title:"रोग पहचान 🦠",
selectCrop:"फसल चुनें",
rice:"चावल",
tomato:"टमाटर",
cotton:"कपास",
detect:"रोग पहचानें",
prediction:"पूर्वानुमान",
alert:"कृपया फसल और छवि चुनें"
}

};

const t=translations[language] || translations.en;

const submitHandler=async()=>{

if(!crop || !image){

alert(t.alert);
return;

}

try{

const formData=new FormData();

formData.append("crop",crop);
formData.append("image",image);

const res=await axios.post(

"http://localhost:5000/api/disease",

formData

);

setResult(res.data.disease);

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

<select
value={crop}
onChange={(e)=>setCrop(e.target.value)}
>

<option value="">
{t.selectCrop}
</option>

<option value="Rice">
{t.rice}
</option>

<option value="Tomato">
{t.tomato}
</option>

<option value="Cotton">
{t.cotton}
</option>

</select>

<br/><br/>

<input
type="file"
onChange={(e)=>
setImage(
e.target.files[0]
)
}
/>

<br/><br/>

<button
onClick={submitHandler}
>

{t.detect}

</button>

<br/><br/>

<h3>

{t.prediction}: {result}

</h3>

</div>

);

}

export default DiseaseDetection;