import { useNavigate } from "react-router-dom";

function Navbar(){

const navigate = useNavigate();

const handleLogout = ()=>{

localStorage.removeItem("token");

alert("Logged Out");

navigate("/");

};

return(

<div className="navbar">

<h2>🌾 Smart Farmer Platform</h2>

<button onClick={handleLogout}>
Logout
</button>

</div>

);

}

export default Navbar;