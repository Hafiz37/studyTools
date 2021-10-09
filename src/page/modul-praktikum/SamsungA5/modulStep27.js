import "../modulPraktikum.css";
import hpbelumdirakit from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/langkah-langkah/langkah-38.png';

import React from 'react';
import MenuStep from "./MenuStep";
import Navbar from "../../../komponen/navbar/navbar";

function ModelStep27() {

  return (
    <div>
      <Navbar />

      <section id="progresbarPraktek">
        <div class="container mb-3">
          <div class="row d-flex justify-content-center mt-3">
            <div class="col-lg-7">
              <div class="progress rounded-pill">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}>100%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row praktek rounded-25 shadow border pe-0 pe-lg-2">
          <h1 class="fw-bold fs-1 mt-4 ms-1 mb-5 mt-4">Perakitan Samsung A5 2017</h1>
          <div className="d-flex flex-column flex-lg-row mb-4">
            <div className="col-lg-4 border border-dark rounded-25 bg-light me-0 me-lg-2 d-flex flex-column justify-content-between">
              <div>
                <h2 class="belajarYuk text-center fs-6 fw-bold d-flex justify-content-center align-items-center text-light">Belajar yuk</h2>
                <MenuStep />
              </div>
              <div className="border-top border-2 border-dark my-2 pt-2 text-center">
                <button className="btn fw-bold w-50 rounded-pill text-white" style={{background: '#7827E6'}} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tombol kirim hanya bisa digunakan jika tantangan sudah selesai semua!">Kirim</button>
              </div>
            </div>
            <div className="col-lg-8 mt-3 mt-lg-0">
              <div className="border rounded-25 border-dark border-2 bg-light">
                <div className="dnd-items">
                  <div class="dropzone border rounded-25">
                    <img src={hpbelumdirakit} id="device" width="100%" />
                  </div>
                </div>
              </div>
              <div className="forum mt-2 row p-3 border border-dark border-2 rounded-25 mx-1">
                <p className="col-md-7 fs-5 mb-2 mb-md-0">Anda ingin menanyakan materi? Klik tombol Forum</p>
                <button className="col-md-5 btn btn-primary rounded-pill">Forum</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ModelStep27
