import "../modulPraktikum.css";
// --- hp adalah hp yg belum dirakit
import hpbelumdirakit from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/langkah-langkah/langkah-19.png';
// --- hppasang hp yg sudah dirakit
import hpsudahdirakit from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/langkah-langkah/langkah-20.png';


import komponen16 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-16-a.png';
import komponen17 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-17-a.png';
import komponen18 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-18-a.png';
import komponen19 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-19-a.png';

import React from 'react';
import MenuStep from "./MenuStep";
import $ from "jquery";
import Navbar from "../../../komponen/navbar/navbar";

function ModelStep11d() {
  var pasang = 0;

  function konekKabel(e) {
    e.preventDefault();
    $("#device").attr("src", hpsudahdirakit);
    $(".btnSimpan").removeAttr("disabled");

    //penambahan poin
    let myPoint = 0;
    myPoint = parseInt(localStorage.getItem("PoinSamsungA5")) + 20;
    localStorage.setItem("PoinSamsungA5", myPoint);
    if (myPoint > 0) {
      alert("Yeyyy... Kamu mendapatkan 20 Point, Total poin kamu " + myPoint + " Point");
    }


    pasang = 1;
  }

  function selanjutnya(e) {
    e.preventDefault();
    if (pasang == 1) {
      window.location.replace("ModulA5step12");
    } else {
      alert("Komponen Belum Tersambung Dengan Benar");
    }
  }

  function handleClick(e) {
    e.preventDefault();
    alert('The link was clicked.');
  }
  return (
    <div>
      <Navbar />

      <section id="progresbarPraktek">
        <div class="container mb-3">
          <div class="row d-flex justify-content-center mt-3">
            <div class="col-lg-7">
              <div class="progress rounded-pill">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="40.7" aria-valuemin="0" aria-valuemax="100" style={{ width: "40.7%" }}>40.7%</div>
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
                  <div className="my-2 border-top border-bottom border-dark border-2 p-2 text-center">
                    <img src={komponen19} class="macamKomponen gambar drag-drop" data-bs-toggle="tooltip" data-bs-placement="top" title="volume key" />
                    <img src={komponen17} class="macamKomponen gambar drag-drop" data-bs-toggle="tooltip" data-bs-placement="top" title="power key 2"/>
                    <img src={komponen16} class="macamKomponen gambar drag-drop"data-bs-toggle="tooltip" data-bs-placement="top" title="power key" />
                    <img src={komponen18} class="macamKomponen gambar drag-drop"data-bs-toggle="tooltip" data-bs-placement="top" title="volume key 2" />
                  </div>
                </div>
                <div className="d-flex justify-content-evenly mb-2 btn-control">
                  <button className="btn btn-primary rounded-pill" onClick={konekKabel}><i class="bi bi-link"></i><span className="d-none d-md-block">&nbsp;Sambung</span></button>
                  <button className="btn btn-success rounded-pill" onClick={selanjutnya}><i class="bi bi-save2"></i><span className="d-none d-md-block">&nbsp;Simpan</span></button>
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

export default ModelStep11d
