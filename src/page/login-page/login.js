import React from 'react'
import "./login.css"
import Logo from "../../logo-ST/logo.png"

function Login() {
    return (
        
<div id="loginPage">
	<img class="wave-login" src="assets/img/ilustrasi/bg-login.png" />
	<div class="containerLogIn">
		<div class="img" />
			<img src="assets/img/ilustrasi/login-1.png" />
		</div>
		<div class="login-content">
			<form action="index.html">
				{/* <img src={Logo} /> */}
				<h2 class="title">Masuk sebagai pengguna</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Email</h5>
           		   		<input type="email" class="input" />
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" class="input" />
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" class="btn" value="Login" />
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
// 	parent.classList.add("focus");
// }

// function remcl(){
// 	let parent = this.parentNode.parentNode;
// 	if(this.value == ""){
// 		parent.classList.remove("focus");
// 	}
// }


// inputs.forEach(input => {
// 	input.addEventListener("focus", addcl);
// 	input.addEventListener("blur", remcl);
// });
// selesai halaman login
