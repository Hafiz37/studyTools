import React from 'react'
import "./login.css"
import Logo from "../../logo-ST/logo.png"
import "../../css/bootstrap.min.css"

function Login() {
    return (
        
<div id="loginPage">
	<img className="wave-login" src={Logo} />
	<div className="containerLogIn">
		<div className="img" />
			<img src="assets/img/ilustrasi/login-1.png" />
		</div>
		<div className="login-content">
			<form action="index.html">
				{/* <img src={Logo} /> */}
				<h2 className="title">Masuk sebagai pengguna</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<h5>Email</h5>
           		   		<input type="email" className="input" />
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<h5>Password</h5>
           		    	<input type="password" className="input" />
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="btn" value="Login" />
            </form>
        </div>
    </div>
// </div>
    )
}

export default Login





// halaman login

// const inputs = document.querySelectorAll(".input");


// function addcl(){
// 	let parent = this.parentNode.parentNode;
// 	parent.classNameList.add("focus");
// }

// function remcl(){
// 	let parent = this.parentNode.parentNode;
// 	if(this.value == ""){
// 		parent.classNameList.remove("focus");
// 	}
// }


// inputs.forEach(input => {
// 	input.addEventListener("focus", addcl);
// 	input.addEventListener("blur", remcl);
// });
// selesai halaman login
