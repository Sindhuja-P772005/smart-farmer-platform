import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate = useNavigate();

const [form,setForm] = useState({
email:"",
password:""
});

const handleChange = (e)=>{

setForm({
...form,
[e.target.name]:e.target.value
});

};

const handleSubmit = async(e)=>{

e.preventDefault();

try{

const res = await axios.post(

"http://localhost:5000/api/auth/login",

form

);

localStorage.setItem(
"token",
res.data.token
);

localStorage.setItem(
"role",
res.data.role
);

alert("Login Successful");

navigate("/dashboard");

}
catch(err){

console.log(err.response?.data);

alert(
err.response?.data?.message ||
"Login Failed"
);

}

};

return(

<div>

<h2>Login</h2>

<form onSubmit={handleSubmit}>

<input
type="email"
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
required
/>

<br/><br/>

<input
type="password"
name="password"
placeholder="Password"
value={form.password}
onChange={handleChange}
required
/>

<br/><br/>

<button type="submit">
Login
</button>

</form>

</div>

);

}

export default Login;