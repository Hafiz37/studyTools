import React from 'react'
import './dataPribadi.css'
import logo from '../../logo-ST/logo.png'
import bgLogin from './bg-login.png'
import ilustrasi from './logo form.png'
import defaultProfile from './default-photo-profile.jpg'

function DataPribadi() {
    return (
        <div>
            
    <img class="wave-login" src={bgLogin} />
    <div class="containerLogIn">
        <div class="img">
          <img className="ilustrasi" src={ilustrasi} />
        </div>
        <div class="login-content">
          <form action="index.html">
            <img src={logo} />
            <h3 class="title">Ayo isi data pribadi kamu</h3>

            <div class="profile-pic-div" onMouseOver={() => alert('jaja')}>
              <img src={defaultProfile} id="photo" alt="" />
              <input type="file" id="file" />
              <label for="file" id="uploadBtn">choose photo</label>
          </div>

            <div class="input-div one">
              <div class="i">
                <i class="fas bi-person-fill"></i>
              </div>
              <div class="div">
                <h5>Nama</h5>
                <input type="email" class="input" />
              </div>
            </div>

            <input type="date" />
  
            <div class="kelammin gap-5">
                <input type="radio" name="payment" id="lklk" checked />
                <label for="lklk"> 
                    <i class="fa bi-file-person-fill" aria-hidden="true"></i>
                    <span class="fs-6 mt-2">laki.laki</span>
                </label>
                <input type="radio" name="payment" id="prmpn" />
                <label for="prmpn">
                    <i class="fa bi-file-person" aria-hidden="true"></i>
                    <span class="fs-6 mt-2">perempuan</span>
                </label> 
            </div>

            <input type="submit" class="btn" value="Sign  Up" />
          </form>
        </div>
      </div>

        </div>
    )
}

export default DataPribadi
