import React from 'react'
import Navbar from '../../komponen/navbar/navbar'
import "./kursus.css"

import picJ5 from '../memilih-praktikum/samsung-j5-prime.jpg'
import picA5 from '../memilih-praktikum/samsung-a5-2017.jpg'
import picTab from '../memilih-praktikum/samsung-tab-a8.jpg'

function Kursus() {
  return (
    <div>
      <Navbar />

      <section id="labelKursus" class="d-flex align-items-center justify-content-center mt-5 mb-5">
        <h1 class="fw-bold fs-1">Kursus Saya</h1>
      </section>

      <section id="body-kursus" class="container pb-5">
        <div class="favorit mt-3 pb-5">
          <div class="label-favorit d-flex justify-content-center align-items-center">
            <h2 class="fw-bold fs-2">Favorit</h2>
          </div>
          <div class="d-flex flex-column align-items-center">
            <div className="py-3 mt-4 perMateri">
              <div className="d-flex flex-column flex-md-row">
                <div class="col-md-3 mb-2">
                  <img src={picJ5} alt="" class="d-block mx-auto img-fluid rounded" />
                </div>
                <div class="col-md-9 mx-2 d-flex flex-column justify-content-between">
                  <div className="d-flex flex-column flex-md-row mb-3 justify-content-between">
                    <h3 className="fs-3 mb-1">Perakitan Samsung Galaxy J5 Prime</h3>
                    <p className="btn border border-2 rounded-pill me-0 me-md-3 fw-bold">Selesai <i class="bi bi-trophy ms-3" /></p>
                  </div>
                  <div className="d-flex flex-column flex-md-row justify-content-between me-0 me-md-3">
                    <div className="d-flex flex-column mb-3 justify-content-end">
                      <button className="btn btn-outline-dark rounded-pill mb-2 fw-bold"><i class="bi bi-bag-dash-fill ms-auto" /> Hapus dari Favorit</button>
                      <div class="progress rounded-pill" style={{ height: 40 }}>
                        <div class="progress-bar progress-bar-striped progress-bar-animated fw-bold" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                      </div>
                    </div>
                    <div className="d-flex flex-column justify-content-end">
                      <button className="btn btn-warning rounded-pill mb-2 fw-bold">Ambil sertifikat <i class="bi bi-trophy ms-3" /></button>
                      <button className="btn btn-primary rounded-pill fw-bold">Belajar lagi</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3 mt-4 perMateri">
              <div className="d-flex flex-column flex-md-row">
                <div class="col-md-3 mb-2">
                  <img src={picTab} alt="" class="d-block mx-auto img-fluid rounded" />
                </div>
                <div class="col-md-9 mx-2 d-flex flex-column justify-content-between">
                  <div className="d-flex flex-column flex-md-row mb-3 justify-content-between">
                    <h3 className="fs-3 mb-1">Perakitan Samsung Galaxy Tab A8 with S Pen</h3>
                    {/* <p className="btn border border-2 rounded-pill me-0 me-md-3 fw-bold">Selesai <i class="bi bi-trophy ms-3" /></p> */}
                  </div>
                  <div className="d-flex flex-column flex-md-row justify-content-between me-0 me-md-3">
                    <div className="d-flex flex-column mb-3 justify-content-end">
                      <button className="btn btn-outline-dark rounded-pill mb-2 fw-bold"><i class="bi bi-bag-dash-fill ms-auto" /> Hapus dari Favorit</button>
                      <div class="progress rounded-pill" style={{ height: 40 }}>
                        <div class="progress-bar progress-bar-striped progress-bar-animated fw-bold" role="progressbar" style={{ width: "56%" }} aria-valuenow="56" aria-valuemin="0" aria-valuemax="100">56%</div>
                      </div>
                    </div>
                    <div className="d-flex flex-column justify-content-end">
                      {/* <button className="btn btn-warning rounded-pill mb-2 fw-bold">Ambil sertifikat <i class="bi bi-trophy ms-3" /></button> */}
                      <button className="btn btn-primary rounded-pill fw-bold">Ayo mulai belajar</button>
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
            <div className="py-3 mt-4 perMateri">
              <div className="d-flex flex-column flex-md-row">
                <div class="col-md-3 mb-2">
                  <img src={picA5} alt="" class="d-block mx-auto img-fluid rounded" />
                </div>
                <div class="col-md-9 mx-2 d-flex flex-column justify-content-between">
                  <div className="d-flex flex-column flex-md-row mb-3 justify-content-between">
                    <h3 className="fs-3 mb-1">Perakitan Samsung Galaxy A5 2017</h3>
                    <p className="btn border border-2 rounded-pill me-0 me-md-3 fw-bold">Selesai <i class="bi bi-trophy ms-3" /></p>
                  </div>
                  <div className="d-flex flex-column flex-md-row justify-content-between me-0 me-md-3">
                    <div className="d-flex flex-column mb-3 justify-content-end">
                      <button className="btn btn-outline-dark rounded-pill mb-2 fw-bold"><i class="bi bi-bag-dash-fill ms-auto" /> Hapus dari Favorit</button>
                      <div class="progress rounded-pill" style={{ height: 40 }}>
                        <div class="progress-bar progress-bar-striped progress-bar-animated fw-bold" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                      </div>
                    </div>
                    <div className="d-flex flex-column justify-content-end">
                      <button className="btn btn-warning rounded-pill mb-2 fw-bold">Ambil sertifikat <i class="bi bi-trophy ms-3" /></button>
                      <button className="btn btn-primary rounded-pill fw-bold">Belajar lagi</button>
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
