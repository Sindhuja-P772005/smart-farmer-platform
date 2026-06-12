import {useNavigate}
from "react-router-dom";

import "../App.css";

function GuidePage(){

const navigate=
useNavigate();

const lang=
localStorage.getItem(
"language"
);

const guides={

english:[
"Register or Login",
"Check Weather",
"See Suitable Crops",
"Check Crop Health",
"Use Marketplace"
],

telugu:[
"రిజిస్టర్ లేదా లాగిన్",
"వాతావరణం చూడండి",
"సరైన పంటలు చూడండి",
"పంట ఆరోగ్యం చూడండి",
"మార్కెట్ ఉపయోగించండి"
],

hindi:[
"रजिस्टर या लॉगिन करें",
"मौसम देखें",
"उपयुक्त फसलें देखें",
"फसल स्वास्थ्य जांचें",
"मार्केटप्लेस उपयोग करें"
]

};

return(

<div className="center-page">

<div className="guide-card">

<h1>
🌾 Farmer Guide
</h1>

{

guides[lang].map(

(item,index)=>(

<p key={index}>

✅ {item}

</p>

)

)

}

<button
onClick={()=>navigate("/login")}
>

Continue

</button>

</div>

</div>

);

}

export default GuidePage;