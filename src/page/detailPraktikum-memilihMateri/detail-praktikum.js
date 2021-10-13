import React from "react";
import "./detailPraktikum.css";

import gambarSementara from "../memilih-praktikum/samsung-a5-2017.jpg";
import Navbar from "../../komponen/navbar/navbar";

function DetailPraktikum() {
  return (
    <div id="memilihMateri-page">
      <Navbar />

      <section id="conten-header" class="container mt-5">
        <div class="d-flex flex-column flex-md-row">
          <div class="col-md-8 d-flex flex-column justify-content-between">
            <h5 class="fw-bold fs-2 mb-3">Perakitan Samsung Galaxy A5 2017</h5>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/t06_rLWAZTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <div class="row mt-2">
              <div class="col-2">Chipset</div>
              <div class="col-8">: Exynos 7880 (14 nm)</div>
            </div>
            <div class="row mt-2">
              <div class="col-2">RAM</div>
              <div class="col-8">: 3GB</div>
            </div>

            <div class="row mt-2">
              <div class="col-2">Internal</div>
              <div class="col-8">: 32GB/64GB</div>
            </div>

            <div class="row mt-2">
              <div class="col-2">Camera</div>
              <div class="col-8">: 16 MP, f/1.9, 27mm (wide), AF</div>
            </div>

            <div class="row mt-2">
              <div class="col-2">Battery</div>
              <div class="col-8">: Li-Ion 3000 mAh, non-removable</div>
            </div>
            <div className="my-3 d-flex flex-column flex-lg-row align-items-center justify-content-lg-around">
              <a href="/Pendahuluan">
                <button class="btnBukaMateri btn rounded-pill text-white fw-bold mb-2 mb-lg-0">
                  Buka Materi
                </button>
              </a>
              <a href="/Kursus">
                <button className="btn btn-secondary fw-bold rounded-pill">
                  <i class="bi bi-bag-plus-fill ms-auto " /> Tambah ke Kursus
                </button>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src={gambarSementara}
              alt=""
              class="d-block mx-auto img-fluid border border-2 rounded"
            />
          </div>
        </div>
      </section>

      <div class="conten-body container my-5 p-3">
        <h2 class="fw-bold ms-3 text-md-start text-center">Materi</h2>

        <div class="perMateri d-flex flex-column flex-md-row align-items-center justify-content-between fs-4 ms-3 p-3 mt-3">
          <div className="d-flex flex-row">
            <h4 class="me-3"> 1. </h4>
            <h4> Perkenalan Komponen </h4>
          </div>
          <a href="#">
            <button type="button" class="btn rounded-pill fw-bold mt-3 mt-md-0">
              Buka
            </button>
          </a>
        </div>
        <div class="perMateri d-flex flex-column flex-md-row align-items-center justify-content-between fs-4 ms-3 p-3 mt-3">
          <div className="d-flex flex-row">
            <h4 class="me-3"> 2. </h4>
            <h4> Langkah Pertama </h4>
          </div>
          <a href="/ModulA5step1">
            <button type="button" class="btn rounded-pill fw-bold mt-3 mt-md-0">
              Buka
            </button>
          </a>
        </div>
        <div class="perMateri d-flex flex-column flex-md-row align-items-center justify-content-between fs-4 ms-3 p-3 mt-3">
          <div className="d-flex flex-row">
            <h4 class="me-3"> 3. </h4>
            <h4> Langkah Kedua </h4>
          </div>
          <a href="/ModulA5step2">
            <button type="button" class="btn rounded-pill fw-bold mt-3 mt-md-0">
              Buka
            </button>
          </a>
        </div>
        <div class="perMateri d-flex flex-column flex-md-row align-items-center justify-content-between fs-4 ms-3 p-3 mt-3">
          <div className="d-flex flex-row">
            <h4 class="me-3"> 4. </h4>
            <h4> Langkah Ketiga </h4>
          </div>
          <a href="/ModulA5step3">
            <button type="button" class="btn rounded-pill fw-bold mt-3 mt-md-0">
              Buka
            </button>
          </a>
        </div>
        <div class="perMateri d-flex flex-column flex-md-row align-items-center justify-content-between fs-4 ms-3 p-3 mt-3">
          <div className="d-flex flex-row">
            <h4 class="me-3"> 5. </h4>
            <h4> Langkah Keempat </h4>
          </div>
          <a href="/ModulA5step4">
            <button type="button" class="btn rounded-pill fw-bold mt-3 mt-md-0">
              Buka
            </button>
          </a>
        </div>
        <div class="perMateri d-flex flex-column flex-md-row align-items-center justify-content-between fs-4 ms-3 p-3 mt-3">
          <div className="d-flex flex-row">
            <h4 class="me-3"> 6. </h4>
            <h4> Langkah Kelima </h4>
          </div>
          <a href="/ModulA5step5">
            <button type="button" class="btn rounded-pill fw-bold mt-3 mt-md-0">
              Buka
            </button>
          </a>
        </div>
        <div class="perMateri d-flex flex-column flex-md-row align-items-center justify-content-between fs-4 ms-3 p-3 mt-3">
          <div className="d-flex flex-row">
            <h4 class="me-3"> 7. </h4>
            <h4> Langkah Keenam </h4>
          </div>
          <a href="/ModulA5step6">
            <button type="button" class="btn rounded-pill fw-bold mt-3 mt-md-0">
              Buka
            </button>
          </a>
        </div>
        <div class="perMateri d-flex flex-column flex-md-row align-items-center justify-content-between fs-4 ms-3 p-3 mt-3">
          <div className="d-flex flex-row">
            <h4 class="me-3"> 8. </h4>
            <h4> Langkah Ketujuh </h4>
          </div>
          <a href="/ModulA5step7">
            <button type="button" class="btn rounded-pill fw-bold mt-3 mt-md-0">
              Buka
            </button>
          </a>
        </div>
        <div class="perMateri d-flex flex-column flex-md-row align-items-center justify-content-between fs-4 ms-3 p-3 mt-3">
          <div className="d-flex flex-row">
            <h4 class="me-3"> 9. </h4>
            <h4> Langkah Kedelapan </h4>
          </div>
          <a href="/ModulA5step8">
            <button type="button" class="btn rounded-pill fw-bold mt-3 mt-md-0">
              Buka
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetailPraktikum;
