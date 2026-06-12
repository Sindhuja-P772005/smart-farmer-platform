import { useState } from "react";
import axios from "axios";

function Weather({ language }) {

const [city,setCity] = useState("");
const [weather,setWeather] = useState(null);

const translations = {

en:{
title:"Weather Forecast 🌦️",
placeholder:"Enter city",
search:"Search",
temp:"Temperature",
humidity:"Humidity",
condition:"Condition",
wind:"Wind Speed",
alert:"City not found"
},

te:{
title:"వాతావరణ సూచన 🌦️",
placeholder:"నగరం నమోదు చేయండి",
search:"వెతకండి",
temp:"ఉష్ణోగ్రత",
humidity:"తేమ",
condition:"పరిస్థితి",
wind:"గాలి వేగం",
alert:"నగరం కనబడలేదు"
},

hi:{
title:"मौसम पूर्वानुमान 🌦️",
placeholder:"शहर दर्ज करें",
search:"खोजें",
temp:"तापमान",
humidity:"नमी",
condition:"स्थिति",
wind:"हवा की गति",
alert:"शहर नहीं मिला"
}

};

const t = translations[language] || translations.en;

const getWeather = async()=>{

try{

const API_KEY =
"349d29fbf6c09e17bb51eedb104ee5a0";

const res = await axios.get(

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

);

setWeather(res.data);

}

catch(err){

console.log(err.response?.data);

alert(t.alert);

}

};

return(

<div>

<h2>{t.title}</h2>

<input
type="text"
placeholder={t.placeholder}
value={city}
onChange={(e)=>setCity(e.target.value)}
/>

<button onClick={getWeather}>
{t.search}
</button>

{weather && (

<div>

<h3>{weather.name}</h3>

<p>
{t.temp}: {weather.main.temp} °C
</p>

<p>
{t.humidity}: {weather.main.humidity}%
</p>

<p>
{t.condition}: {weather.weather[0].main}
</p>

<p>
{t.wind}: {weather.wind.speed}
</p>

</div>

)}

</div>

);

}

export default Weather;