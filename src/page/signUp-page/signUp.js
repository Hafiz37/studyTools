import React from 'react'
import './signUp.css'
import logo from '../../logo-ST/logo.png'
import bgSignup from './bg-login.png'
import ilustrasiLogin from './logo form.png'

function signUp() {
    return (
        <div>
            
            

            <img class="wave-login" src={bgSignup} />
    <div class="containerLogIn">
      <div class="img">
        <img className='ilustrasiSignup' src={ilustrasiLogin} />
      </div>
      <div class="login-content">
        <form action="index.html">
          <img src={logo} />
          <h3 class="title">Daftar sebagai pengguna</h3>
          <div div class="input-div one">
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

          <div class="input-div pass">
            <div class="i">
              <i class="fas fa-lock"></i>
            </div>
            <div class="div">
              <h5>Konfirmasi Password</h5>
              <input type="password" class="input" />
            </div>
          </div>
          <input type="submit" class="btn" value="Sign  Up" />
        </form>
      </div>
    </div>



        </div>
    )
}

export default signUp
