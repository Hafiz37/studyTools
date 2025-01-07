import "./landing-page.css"
import React from 'react'


import logoBiru from "../../logo-ST/logo-biru.png"

//gambar user-pic
import pic1 from '../forum(utama)/pic-1.jpg'
import pic2 from '../forum(utama)/pic-2.jpg'
import pic3 from '../forum(utama)/pic-4.jpg'
import ppHafiz from './ilustrasi/ourTEam/pp-hafiz.jpeg'
import ppDayinta from './ilustrasi/ourTEam/pp-dayinta.jpeg'
import ppRahmanda from './ilustrasi/ourTEam/pp-rahmanda.jpeg'


// iluastrasi
import ilustrasiMulaibelajar from "./ilustrasi/assembly.png"
import ilustrasiForum from "./ilustrasi/forum.png"
import ilustrasiLeaderboard from "./ilustrasi/leaderboard.png"
// import Navbar from '../../komponen/navbar/navbar'





// ilustrasi
import ilustrasiHero from "./ilustrasi/poster.png"
import Leaderboard from "../../komponen/leaderbord/leaderboard"



function LandingPage() {
  return (
    <div>
      {/* <!-- HERO --> */}
      <section id="banner" class="d-flex align-items-center pb-5 pt-2">
        <div class="container">
          <img class="logo" src={logoBiru} alt="Study Tools" width="136px" />
          <div class="row">
            <div class="h1h2 col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">

              <h1 className="display-4 text-light fw-bold">Praktek lebih lengkap di rumah</h1>
              <h2 className="fs-4 text-light">Asah skillmu dalam praktikum online
                dan bergabunglah dalam forum diskusi kami</h2>
              <div class="d-flex justify-content-center justify-content-lg-start">
                <div class="getStarted"><a href="#about" class="btn-get-started scrollto">Get Started</a></div>
                <div class="ms-3"><a href="/signup" class="btn-sign-up scrollto">Sign Up</a></div>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <div class="logIn text-end">
                {/* <!-- <h3>Log In ></h3> --> */}
                <a href="/login" class="button btn-get-started scrollto ">Log In</a>
              </div>
              <img src={ilustrasiHero} class="animasi img-fluid " alt="" />
            </div>
          </div>
        </div>

      </section>
      {/* <!-- selesai Hero --> */}



      {/* <!-- ======= Why Us ======= --> */}
      <section id="whyUs">
        <div class="container">
          <div class="row text-center">
            <div class="col">
              <h2 class="fw-bold fs-2">Mengapa Memilih Kami</h2>
            </div>
          </div>
          <div class="row text-center">
            <div class="col">
              <h3 class="baris2 mt-5 mb-5 fs-5">belajar dimana saja dan kapan saja</h3>
            </div>
          </div>
          <div class="baris3 mt-3 row text-center">
            <div class="dalam col-md d-flex align-items-center mb-3">
              <i class="icon bi bi-clock fs-5 me-3 p-3 rounded-circle"></i>
              <h3 class="fs-4">Belajar kapanpun</h3>
            </div>
            <div class="dalam col-md d-flex align-items-center mb-3">
              <i class="icon bi bi-geo-alt-fill fs-5 me-3 p-3 rounded-circle"></i>
              <h3 class="fs-4">Belajar dimanapun</h3>
            </div>
            <div class="dalam col-md d-flex align-items-center mb-3">
              <i class="icon bi bi-currency-dollar fs-5 me-3 p-3 rounded-circle"></i>
              <h3 class="fs-4">Belajar dengan gratis</h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= selesai Why Us ======= --> */}

      {/* <!-- ======= Mulai Belajar Halaman Utama ======= --> */}
      <section class="mulaiBelajar bg-section-support">
        <div class="container col-xxl-8 px-4 py-3">
          <div class="row flex-lg-row align-items-center g-5 py-5">
            <div class="col-12 col-sm-8 col-lg-6">
              <img src={ilustrasiMulaibelajar} class="d-block mx-lg-auto img-fluid" alt="" width="700" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6">
              <h2 class="display-5 fw-bold lh-1 mb-3 text-sm-start text-center">Materi dan Praktikum Secara Online</h2>
              <p class="lead">Bongkar pasang alat elektronikmu sendiri? Emang bisa? Selesaikan kelas dan tantangan yang ada, dan kamu akan bisa melakukannya sendiri.</p>
              <div class="mt-3 d-grid d-md-flex justify-content-md-start">
                <a href="/login" class="btn btn-primary btn-lg rounded-pill shadow fw-bold d-flex justify-content-center align-items-center">Mulai Belajar</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= selesai Mulai Belajar Halaman Utama ======= --> */}

      {/* <!-- ======= Forum Halaman Utama ======= --> */}
      <section>
        <div class="forrum container col-xxl-8 px-4 py-3">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-12 col-sm-8 col-lg-6">
              <img src={ilustrasiForum} class="d-block mx-lg-auto img-fluid" alt="" width="700" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6">
              <h2 class="display-5 fw-bold lh-1 mb-3 text-sm-start text-center">Forum Diskusi</h2>
              <p class="lead">Tanyakan pada komunitas kami. Bergabung dalam diskusi dan ajukan pertanyaan di forum Study Tools kami.</p>
              <div class="mt-3 d-grid d-md-flex justify-content-md-start">
                <a href="/login" class="btn btn-primary btn-lg rounded-pill shadow fw-bold d-flex justify-content-center align-items-center">Forum</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= selesai Forum Halaman Utama ======= --> */}

      {/* <!-- ======= Leaderboard ======= --> */}
      <section class="bg-section-support">
        <div class="container col-xxl-8 px-4 py-3">
          <div class="row flex-lg-row align-items-center g-5 py-5">
            <div class="col-12 col-lg-6">
              <h2 class="display-5 fw-bold lh-1 mb-3 text-sm-start text-center">Jadilah Peringkat Pertama</h2>
              <p class="lead mb-3">Kumpulkan poinmu dan jadilah yang teratas dengan cara menyelesakan kelas-kelas yang tersedia. Serta menjawab pertanyaan temanmu di halaman forum dengan benar.</p>
              <img src={ilustrasiLeaderboard} class="d-none d-sm-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <Leaderboard />
          </div>
        </div>
      </section>
      {/* <!-- ======= selesai Leaderboard ======= --> */}

      {/* <!-- ======= Testimonial ======= --> */}
      <section class="p-5 mb-4">
        <div id="carouselTestimonial" class="shadow carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselTestimonial" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselTestimonial" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselTestimonial" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class=" d-flex flex-column justify-content-center my-5 px-3">
                <p class="text-center text-white mb-5">"Ini adalah website yang sangat bagus, sangat recomended"</p>
                <div class="d-flex justify-content-center mt-3">
                  <img src={pic1} alt="fotone-user" width="80px" height="80px" class="rounded-circle border border-white border-5" />
                </div>
                <h2 class="text-center mt-3">M. Nasrullah</h2>
              </div>
            </div>
            <div class="carousel-item">
              <div class=" d-flex flex-column justify-content-center my-5 px-3">
                <p class="text-center text-white mb-5">"Menarik sekali, ada Praktikum dan Forumnya lohh!!!"</p>
                <div class="d-flex justify-content-center mt-3">
                  <img src={pic2} alt="fotone-user" width="80px" height="80px" class="rounded-circle border border-white border-5" />
                </div>
                <h2 class="text-center mt-3">Akbar Buana</h2>
              </div>
            </div>
            <div class="carousel-item">
              <div class=" d-flex flex-column justify-content-center my-5 px-3">
                <p class="text-center text-white mb-5">"Wow, jadi tambah pengetahuan tentang perakitan hp."</p>
                <div class="d-flex justify-content-center mt-3">
                  <img src={pic3} alt="fotone-user" width="80px" height="80px" class="rounded-circle border border-white border-5" />
                </div>
                <h2 class="text-center mt-3">Yusuf Yuda</h2>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselTestimonial" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselTestimonial" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* <!-- ======= selesai Testimonial ======= --> */}

      {/* our team masih belum bisa sukses */}

      {/* <section id="ourTeam">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1 class="text-center fw-bold fs-2">Our Team</h1> <br />
            </div>
          </div>
          <div class="row ">
            <div class="perOrang mt-0 col-xl-4 d-flex align-items-center justify-content-center">
              <div class="cardd d-flex flex-column">
                <img src={ppHafiz} class="card-img-top rounded-circle" alt=" " />
                <div class="card-body">
                  <h3 class="card-text text-center mb-3 fs-5">Muhammad Hafiz Falah</h3>
                  <div class="sosmed d-flex justify-content-center">
                    <a href="/"><i class="bi bi-instagram"></i></a>
                    <a href="/" class="ms-5"><i class="bi bi-whatsapp"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="perOrang col-xl-4 d-flex align-items-center justify-content-center">
              <div class="cardd d-flex flex-column">
                <img src={ppDayinta} class="card-img-top rounded-circle" alt="" />
                <div class="card-body">
                  <h3 class="card-text text-center mb-3 fs-5">Dayinta Ayu Faj'rin</h3>
                  <div class="sosmed d-flex justify-content-center">
                    <a href="/"><i class="bi bi-instagram"></i></a>
                    <a href="/" class="ms-5"><i class="bi bi-whatsapp"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="perOrang col-xl-4 d-flex align-items-center justify-content-center">
              <div class="cardd d-flex flex-column">
                <img src={ppRahmanda} class="card-img-top rounded-circle" alt=" " />
                <div class="card-body">
                  <h3 class="card-text text-center mb-3 fs-5">Rahmanda Dwi Pandega</h3>
                  <div class="sosmed d-flex justify-content-center">
                    <a href="/"><i class="bi bi-instagram"></i></a>
                    <a href="/" class="ms-5"><i class="bi bi-whatsapp"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}




      {/* <!-- ======= CTA ======= --> */}
      <section className="p-5 mb-4 ">
        <div class="card get-started p-md-5">
          <div class="row g-0">
            <div class="col-md-6 col-lg-8">
              <div class="card-body">
                <h2 class="card-title mb-3 fw-bold">Mulai belajar di Study Tools, <span class="text-danger">gratis</span> guys!</h2>
                <p class="card-text">
                  Belajar praktikum sendiri dirumah? Emang bisa? Selesaikan kelas dan tantangan yang ada dan kamu akan bisa melakukannya sendiri.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-flex flex-md-column align-items-center justify-content-center p-3">
              <a href="/login" class="btn rounded-pill w-50 mb-md-4 mulai-belajar fw-bold">Login</a>
              <a href="/signup" class="btn rounded-pill w-50 forum fw-bold">SignUp</a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= selesai CTA ======= --> */}






    </div>
  )
}

export default LandingPage
