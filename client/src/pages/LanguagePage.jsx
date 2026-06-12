import {useNavigate} from "react-router-dom";
import "../App.css";

function LanguagePage(){

const navigate=useNavigate();

const selectLanguage=(lang)=>{

localStorage.setItem(
"language",
lang
);

navigate("/guide");

};

return(

<div className="center-page">

<div className="language-card">

<h1>🌾 Smart Farmer</h1>

<h2>Select Language</h2>

<button
onClick={()=>selectLanguage("english")}
>
English
</button>

<button
onClick={()=>selectLanguage("telugu")}
>
తెలుగు
</button>

<button
onClick={()=>selectLanguage("hindi")}
>
हिन्दी
</button>

</div>

</div>

);

}

export default LanguagePage;