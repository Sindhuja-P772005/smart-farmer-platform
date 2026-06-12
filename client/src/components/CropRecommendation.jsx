import { useState } from "react";

function CropRecommendation({ language }) {

const [soil,setSoil]=useState("");
const [season,setSeason]=useState("");
const [result,setResult]=useState("");

const translations={

en:{
title:"Crop Recommendation 🌱",
selectSoil:"Select Soil",
selectSeason:"Select Season",
suggest:"Suggest Crop",
recommended:"Recommended Crop",
black:"Black Soil",
red:"Red Soil",
clay:"Clay Soil",
summer:"Summer",
rainy:"Rainy",
winter:"Winter",
cotton:"Cotton",
groundnut:"Groundnut",
rice:"Rice",
maize:"Maize"
},

te:{
title:"పంట సిఫార్సు 🌱",
selectSoil:"మట్టిని ఎంచుకోండి",
selectSeason:"ఋతువును ఎంచుకోండి",
suggest:"పంట సూచించండి",
recommended:"సిఫార్సు చేసిన పంట",
black:"నల్ల మట్టి",
red:"ఎర్ర మట్టి",
clay:"బంక మట్టి",
summer:"వేసవి",
rainy:"వర్షాకాలం",
winter:"శీతాకాలం",
cotton:"పత్తి",
groundnut:"వేరుశెనగ",
rice:"బియ్యం",
maize:"మొక్కజొన్న"
},

hi:{
title:"फसल सुझाव 🌱",
selectSoil:"मिट्टी चुनें",
selectSeason:"मौसम चुनें",
suggest:"फसल सुझाएँ",
recommended:"सुझाई गई फसल",
black:"काली मिट्टी",
red:"लाल मिट्टी",
clay:"चिकनी मिट्टी",
summer:"गर्मी",
rainy:"बरसात",
winter:"सर्दी",
cotton:"कपास",
groundnut:"मूंगफली",
rice:"चावल",
maize:"मक्का"
}

};

const t=translations[language] || translations.en;

const getRecommendation=()=>{

if(soil==="Black Soil" && season==="Summer"){
setResult(t.cotton);
}
else if(soil==="Red Soil" && season==="Rainy"){
setResult(t.groundnut);
}
else if(soil==="Clay Soil" && season==="Winter"){
setResult(t.rice);
}
else{
setResult(t.maize);
}

};

return(

<div>

<h2>{t.title}</h2>

<label htmlFor="soil">
{t.selectSoil}
</label>

<br/>

<select
id="soil"
value={soil}
onChange={(e)=>setSoil(e.target.value)}
>

<option value="">
{t.selectSoil}
</option>

<option value="Black Soil">
{t.black}
</option>

<option value="Red Soil">
{t.red}
</option>

<option value="Clay Soil">
{t.clay}
</option>

</select>

<br/><br/>

<label htmlFor="season">
{t.selectSeason}
</label>

<br/>

<select
id="season"
value={season}
onChange={(e)=>setSeason(e.target.value)}
>

<option value="">
{t.selectSeason}
</option>

<option value="Summer">
{t.summer}
</option>

<option value="Rainy">
{t.rainy}
</option>

<option value="Winter">
{t.winter}
</option>

</select>

<br/><br/>

<button onClick={getRecommendation}>
{t.suggest}
</button>

<br/><br/>

{result && (

<h3>
{t.recommended}: {result}
</h3>

)}

</div>

);

}

export default CropRecommendation;