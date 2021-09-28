import React from 'react'
import Navbar from '../../komponen/navbar/navbar'
import "./kursus.css"

function Kursus() {
    return (
        <div>
          <Navbar/>
            
<section id="labelKursus" class="d-flex align-items-center justify-content-center mt-5 mb-5">
  <h1 class="fw-bold fs-1">Kursus Saya</h1>
</section>

<section id="body-kursus" class="container pb-5">
  <div class="favorit mt-3 pb-5">
    <div class="label-favorit d-flex justify-content-center align-items-center">
      <h2 class="fw-bold fs-2">Favorit</h2>
    </div>
    <div class="d-flex flex-column align-items-center">
      <div class="perMateri pb-3 pt-3 container mt-4">
        <div class="row">
          <div class="col-3">
            <img src="./assets/img/carausel-1.jpg" alt="" />
          </div>
          <div class="col d-flex flex-column justify-content-between">
            <div class="row">
              <h3 class="judul fs-3">Perakitan Samsung Galaxy J5 Prime</h3>
              {/* <!-- <p class="selesai d-flex justify-content-center align-items-center fw-bold">Selesai<i class="bi bi-trophy ms-3 fs-5"></i></p> --> */}
            </div>
            <div class="row">
              <div class="row d-flex">
                <div class="col-3">
                  <i class="bi bi-bag-dash-fill fs-3"></i> 
                </div>
                <div class="col">
                  {/* <!-- <h4 class="sertifikat btn fs-5 fw-bold rounded-pill d-flex justify-content-center align-items-center">Ambil Sertifikat <i class="bi bi-trophy ms-3 fs-5"></i></h4> --> */}
                </div>
              </div>
              <div class="row mt-1">
                <div class="col">
                  <p class="progres-bar d-flex fw-bold justify-content-center align-items-center">0/100%</p>
                </div>
                <div class="col d-flex justify-content-end">
                  <button type="button" class="btn btn-primary fw-bold rounded-pill d-flex justify-content-center align-items-center">Ayo mulai belajar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="perMateri pb-3 pt-3 container mt-4">
        <div class="row">
          <div class="col-3">
            <img src="./assets/img/carausel-1.jpg" alt="" />
          </div>
          <div class="col d-flex flex-column justify-content-between">
            <div class="row">
              <h3 class="judul fs-3">Perakitan Samsung Galaxy Tab A8 with S Pen</h3>
              <p class="selesai d-flex justify-content-center align-items-center fw-bold">Selesai<i class="bi bi-trophy ms-3 fs-5"></i></p>
            </div>
            <div class="row">
              <div class="row d-flex">
                <div class="col-3">
                  <i class="bi bi-bag-dash-fill fs-3"></i> 
                </div>
                <div class="col">
                  <h4 class="sertifikat btn fs-5 fw-bold rounded-pill d-flex justify-content-center align-items-center">Ambil Sertifikat <i class="bi bi-trophy ms-3 fs-5"></i></h4>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col">
                  <p class="progres-bar d-flex fw-bold justify-content-center align-items-center">100/100%</p>
                </div>
                <div class="col d-flex justify-content-end">
                  <button type="button" class="btn btn-primary fw-bold rounded-pill d-flex justify-content-center align-items-center">Belajar Lagi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="riwayat mt-3">
    <div class="label-favorit d-flex justify-content-center align-items-center">
      <h2 class="fw-bold fs-2">Riwayat</h2>
    </div>
    <div class="d-flex flex-column align-items-center">
      <div class="perMateri pb-3 pt-3 container mt-4">
        <div class="row">
          <div class="col-3">
            <img src="./assets/img/carausel-1.jpg" alt="" />
          </div>
          <div class="col d-flex flex-column justify-content-between">
            <div class="row">
              <h3 class="judul fs-3">Perakitan Samsung A5 2017</h3>
              {/* <!-- <p class="selesai d-flex justify-content-center align-items-center fw-bold">Selesai<i class="bi bi-trophy ms-3 fs-5"></i></p> --> */}
            </div>
            <div class="row">
              <div class="row d-flex">
                <div class="col-3">
                  <i class="bi bi-bag-dash-fill fs-3"></i> 
                </div>
                <div class="col">
                  {/* <!-- <h4 class="sertifikat btn fs-5 fw-bold rounded-pill d-flex justify-content-center align-items-center">Ambil Sertifikat <i class="bi bi-trophy ms-3 fs-5"></i></h4> --> */}
                </div>
              </div>
              <div class="row mt-1">
                <div class="col">
                  <p class="progres-bar d-flex fw-bold justify-content-center align-items-center">45/100%</p>
                </div>
                <div class="col d-flex justify-content-end">
                  <button type="button" class="btn btn-primary fw-bold rounded-pill d-flex justify-content-center align-items-center">Lanjutkan belajar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="perMateri pb-3 pt-3 container mt-4">
        <div class="row">
          <div class="col-3">
            <img src="./assets/img/carausel-1.jpg" alt="" />
          </div>
          <div class="col d-flex flex-column justify-content-between">
            <div class="row">
              <h3 class="judul fs-3">Perakitan Samsung Galaxy Tab A8 with S Pen</h3>
              <p class="selesai d-flex justify-content-center align-items-center fw-bold">Selesai<i class="bi bi-trophy ms-3 fs-5"></i></p>
            </div>
            <div class="row">
              <div class="row d-flex">
                <div class="col-3">
                  <i class="bi bi-bag-dash-fill fs-3"></i> 
                </div>
                <div class="col">
                  <h4 class="sertifikat btn fs-5 fw-bold rounded-pill d-flex justify-content-center align-items-center">Ambil Sertifikat <i class="bi bi-trophy ms-3 fs-5"></i></h4>
                </div>
              </div>
              <div class="row mt-1">
                <div class="col">
                  <p class="progres-bar d-flex fw-bold justify-content-center align-items-center">100/100%</p>
                </div>
                <div class="col d-flex justify-content-end">
                  <button type="button" class="btn btn-primary fw-bold rounded-pill d-flex justify-content-center align-items-center">Belajar Lagi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>



        </div>
    )
}

export default Kursus
