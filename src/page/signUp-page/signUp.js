import React from 'react'
import './signUp.css'
import logo from '../../logo-ST/logo.png'
import bgSignup from './bg-login.png'
import ilustrasiLogin from './logo form.png'
import {useState}  from 'react'


function SignUp() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmasiPassword, setConfirmasiPassword] = useState();
  
  function pendaftaran() {
   
    var details = {
      "email": email,
      "password": password,
      "nama": '',
      "tanggal-lahir": "",
      "jenis-kelamin": "",
      "avatar": "",
      "id": email + password
  };
  
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  
  fetch('https://615eb2583d1491001755aa76.mockapi.io/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: formBody
})
.then(respons => respons.json())
.then((result) => {
  alert('daftar berhasil')
  window.location.replace("/login");	
})
  

  }

  return (
    <div>



      <img class="wave-login" src={bgSignup} />
      <div class="containerLogIn">
        <div class="img">
          <img className='ilustrasiSignup' src={ilustrasiLogin} />
        </div>
        <div class="login-content">
          <form action="/home">
            <img src={logo} />
            <h3 class="title">Daftar sebagai pengguna</h3>
            <div div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <h5>Email</h5>
                <input type="email" class="input" onChange={ (evnt) => setEmail(evnt.target.value) } value={email} />
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                <h5>Password</h5>
                <input type="password" class="input" onChange={ (evnt) => setPassword(evnt.target.value) } value={password} />
              </div>
            </div>

            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                <h5>Konfirmasi Password</h5>
                <input type="password" class="input" onChange={ (evnt) => setConfirmasiPassword(evnt.target.value) } value={confirmasiPassword} />
              </div>
            </div>
             <input type="submit" class="btn" value="Sign  Up" onClick={pendaftaran} />
          </form>
        </div>
      </div>



    </div>
  )
}

export default SignUp
