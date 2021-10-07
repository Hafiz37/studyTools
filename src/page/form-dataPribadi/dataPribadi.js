import React from 'react'
import './dataPribadi.css'
import logo from '../../logo-ST/logo.png'
import bgLogin from './bg-login.png'
import ilustrasi from './logo form.png'
import defaultProfile from './default-photo-profile.jpg'
import {useState, useEffect} from "react";
import {useRef} from 'react'


function DataPribadi() {


  
// input foto profil di form pendaftran


// const imgDiv = document.querySelector('.profile-pic-div');
// const img = document.querySelector('#photo');
// const file = document.querySelector('#file');
// const uploadBtn = document.querySelector('#uploadBtn');


// const [imgDiv, setImgDiv] = useState()
// const [img, setImg] = useState()
// const [file, setFile] = useState()
// const [uploadBtn, setUploadBtn] = useState()


//jika pengguna mengarahkan kursor ke img div 

// imgDiv.addEventListener('mouseenter', function(){
//     uploadBtn.style.display = "block";
// });

//jika kita mengarahkan kursor keluar dari img div

// imgDiv.addEventListener('mouseleave', function(){
//     uploadBtn.style.display = "none";
// });



//ketika memilih foto untuk dikirm

// file.addEventListener('change', function(){
    //this refers to file
//     const choosedFile = this.files[0];

//     if (choosedFile) {

//         const reader = new FileReader(); 

//         reader.addEventListener('load', function(){
//             img.setAttribute('src', reader.result);
//         });

//         reader.readAsDataURL(choosedFile);
//     }
// });


// selesai input foto profil di form pendaftran


const imgDiv =useRef()
const img =useRef()
const file =useRef()
const uploadBtn =useRef()



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

            <a href="/home"><input type="submit" class="btn" value="Sign  Up" /></a>
          </form>
        </div>
      </div>

        </div>
    )
}

export default DataPribadi
