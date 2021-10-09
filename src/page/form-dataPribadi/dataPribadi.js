import React from 'react'
import './dataPribadi.css'
import logo from '../../logo-ST/logo.png'
import bgLogin from './bg-login.png'
import ilustrasi from './logo form.png'
import defaultProfile from './default-photo-profile.jpg'
import {useState, useEffect, useRef} from 'react'



function DataPribadi() {



  // const foto nama tanggal lahir, kelamin
  const [foto, setFoto] = useState()
  const [nama, setNama] = useState()
  const [lahir, setLahir] = useState()
  const [gender, setGender] = useState()


  

const imgDiv = useRef()
const img = useRef()
const file = useRef()
const uploadBtn = useRef()

let mouseHover = () => {
  uploadBtn.current.style.display = "block";
}

//ketika memilih foto untuk dikirm
let changePhoto = () => {

   
    // this refers to file
    const choosedFile = this.files[0];
console.log(file)

    if (choosedFile) {

        const reader = new FileReader(); 
        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
;
   
// file.addEventListener('change', function(){
//     // this refers to file
//     const choosedFile = this.files[0];

//     if (choosedFile) {

//         const reader = new FileReader(); 

//         reader.addEventListener('load', function(){
//             img.setAttribute('src', reader.result);
//         });

//         reader.readAsDataURL(choosedFile);
//     }
// });
}

// selesai input foto profil di form pendaftran






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

            <div class="profile-pic-div" onMouseOutCapture={() => {uploadBtn.current.style.display = "none";}} onMouseOver={mouseHover} ref={imgDiv}>
              <img src={defaultProfile} id="photo" ref={img} alt="" />
              <input type="file" id="file" ref={file} onChange={changePhoto} />
              <label for="file" id="uploadBtn" ref={uploadBtn}>choose photo</label>
          </div>

            <div class="input-div one">
              <div class="i">
                <i class="fas bi-person-fill"></i>
              </div>
              <div class="div">
                <h5>Nama</h5>
                <input type="text" class="input" onChange={ (evnt) => setNama(evnt.target.value) } value={nama} />
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
