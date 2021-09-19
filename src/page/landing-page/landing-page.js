import "./landing-page.css"
import React from 'react'


import logoBiru from "../../logo-ST/logo-biru.png"


// ilustrasi
import ilustrasiHero from "./ilustrasi/poster.png"



function LandingPage() {
    return (
        <div>
            

        
    {/* <!-- HERO --> */}
<section id="hero" class="d-flex align-items-center">
    <div class="container">
      <img class="logo" src={logoBiru} alt="Study Tools" width="136px" />
      <div class="row">
        <div class="h1h2 col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          
          <h1>Praktek lebih lengkap di rumah</h1>
          <h2>Asah skillmu dalam praktikum online 
            dan bergabunglah dalam forum diskusi kami</h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
              <div class="getStarted"><a href="#about" class="btn-get-started scrollto">Get Started</a></div>
              <div class="signUp"><a href="signUp.html" class="btn-sign-up scrollto">Sign Up</a></div>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <div class="logIn">
            {/* <!-- <h3>Log In ></h3> --> */}
            <a href="hlmn-login.html" class="button btn-get-started scrollto ">Log In</a>
          </div>
          <img src={ilustrasiHero} class="animasi img-fluid " alt="" />
        </div>
      </div>
    </div>

  </section>
  {/* <!-- selesai Hero --> */}



        </div>
    )
}

export default LandingPage
