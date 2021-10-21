import React from 'react'
import './editProfile.css'
import logo from '../../logo-ST/logo.png'
import defaultProfile from './default-photo-profile.jpg'
import Navbar from '../../komponen/navbar/navbar'

function EditProfile() {
  let mouseEnterFoto = () => {
    alert('hello')
  }
  return (
    <div>
      <Navbar />
      <div className="containerLogIn my-3">
        <div className="login-content">
          <form action="index.html" >
            <img src={logo} />
            <h3 className="title" >Ubah Profile Anda</h3>

            <div className="profile-pic-div" onMouseEnter={mouseEnterFoto}>
              <img src={defaultProfile} id="photo" alt="" />
              <input type="file" id="file" />
              <label for="file" id="uploadBtn">choose photo</label>
            </div>

            <div className="input-div one">
              <div className="i">
                <i className="fas bi-person-fill"></i>
              </div>
              <div className="div">
                {/* <h5>Nama</h5> */}
                <input type="text" className="input" placeholder="Nama"/>
              </div>
            </div>

            <input type="date" />

            <div className="kelammin gap-5">
              <input type="radio" name="payment" id="lklk" checked />
              <label for="lklk">
                <i className="fa bi-file-person-fill" aria-hidden="true"></i>
                <span className="fs-6">laki.laki</span>
              </label>
              <input type="radio" name="payment" id="prmpn" />
              <label for="prmpn">
                <i className="fa bi-file-person" aria-hidden="true"></i>
                <span className="fs-6">perempuan</span>
              </label>
            </div>

            <input type="submit" className="btn" value="Simpan" />
          </form>
        </div>
      </div>



    </div>
  )
}

export default EditProfile
