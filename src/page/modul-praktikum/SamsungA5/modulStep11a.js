import "../modulPraktikum.css";
// --komponen Depan
import komponena from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-10-a.png';
// --komponen Belakang
import komponenb from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-10-b.png';
// --- hp adalah hp yg belum dirakit
import hpbelumdirakit from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/langkah-langkah/langkah-16.png';
// --- hppasang hp yg sudah dirakit
import hpsudahdirakit from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/langkah-langkah/langkah-17.png';

import komponen1 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-1-a.png';
import komponen2 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-2-a.png';
import komponen3 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-3-a.png';
import komponen4 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-4-a.png';
import komponen5 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-5-a.png';
import komponen6 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-6-a.png';
import komponen7 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-7-a.png';
import komponen8 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-8-a.png';
import komponen9 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-9-a.png';
import komponen10 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-10-a.png';
import komponen11 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-11-a.png';
import komponen12 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-12-a.png';
import komponen13 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-13-a.png';
import komponen14 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-14-a.png';
import komponen15 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-15-a.png';
import komponen16 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-16-a.png';
import komponen17 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-17-a.png';
import komponen18 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-18-a.png';
import komponen19 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-19-a.png';
import komponen20 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-20-a.png';
import komponen21 from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-21.png';

import React from 'react';
import MenuStep from "./MenuStep";
import interact from 'interactjs';
import $ from "jquery";
import Navbar from "../../../komponen/navbar/navbar";

function ModelStep11a() {
  var putar = 0;
  var balik = 1;
  var derajat = 0;
  var LokasiOK = 0;
  var lokx = 0;
  var loky = 0;

  var rotasi_sesuai = 0;
  var posisi_hadap = 2;
  var pasang = 0

  function Pasang(e) {
    e.preventDefault();
    $("#device").attr("src",hpsudahdirakit);
    $(".btnSimpan").removeAttr("disabled");
    pasang = 1;
  }

  function balikGambar(e){
    e.preventDefault();
    if (balik == 1) {
      $("#gambarterpilih").attr("src",komponenb);
      balik = 2;
    }else {
      $("#gambarterpilih").attr("src",komponena);
      balik = 1;
    }
  }
  function putarGambar(e){
    e.preventDefault();
    if (LokasiOK == 1) {
      if (putar >= 4) {
        putar = 1;
      }else {
        putar = putar + 1;
      }
      derajat = 90 * putar;
      $('#gambarterpilih').css({
        "transform": "rotate("+derajat+"deg)"
      });
      // alert(derajat);
    }else {
      alert("belum Ada Ditempatnya");
    }
  }

  function tempel(e){
    e.preventDefault();
    if (pasang == 1) {
      $("#device").attr("src",hpsudahdirakit);
      $("#gambarterpilih").attr("hidden","true");
      $(".btnSimpan").removeAttr("disabled");
    }else {
      alert("Lokasi Komponen Tidak Sesuai");
    }
  }
  function selanjutnya(e) {
    e.preventDefault();
    if (pasang == 1) {
      window.location.replace("ModulA5step11b");
    }else {
      alert("Komponen Belum Terpasang");
    }
  }

  function dragMoveListener (event) {
    var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.position = "relative";
    target.style.left = x+"px";
    target.style.top = y+"px";
    // $('.gambar').css({
    //   "position" : "absolute",
    //   "left" : x+"px", /* For modern browsers(CSS3)  */
    //   "top" : y+"px", /* For modern browsers(CSS3)  */
    // });
    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  /* The dragging code for '.draggable' from the demo above
  * applies to this demo as well so it doesn't have to be repeated. */

  // enable draggables to be dropped into this
  interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '.gambar',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:

    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
      LokasiOK = 1;
      // alert("lokasi pas");
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
      // feedback the possibility of a drop
      if (draggableElement.getAttribute("status") == "terpilih") {
        draggableElement.classList.add('can-drop')
      }else{
        draggableElement.classList.add('no-drop')
      }
      dropzoneElement.classList.add('drop-target')
    },
    ondragleave: function (event) {
      LokasiOK = 0;
      // remove the drop feedback style
      event.target.classList.remove('drop-target')
      event.relatedTarget.classList.remove('can-drop')
      event.relatedTarget.classList.remove('no-drop')
    },
    ondrop: function (event) {
      event.relatedTarget.textContent = 'Dropped'
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active')
      event.target.classList.remove('drop-target')
    }
  })

  interact('.drag-drop')
  .draggable({
    inertia: true,
    modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'parent',
      endOnly: true
    })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: {
      move: dragMoveListener,
    }
  })

  function handleClick(e) {
    e.preventDefault();
    alert('The link was clicked.');
  }
    return (
        <div>
    <section id="progresbarPraktek">
        <div class="container mb-3">
            <div class="row d-flex justify-content-center mt-3">
                <div class="col-3">
                    <div class="progress rounded-pill  border border-dark">
                        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0">0%</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="praktek" className="container-fluid ">
        <div class="row">
            <div class="col">
                <h1 class="fw-bold fs-1 mt-4 ms-1 mb-5 mt-4">Perakitan samsung a3</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="accordion-1 bg-light border d-flex flex-column border-dark">
                    <h2 class="belajarYuk text-center fs-6 fw-bold d-flex justify-content-center align-items-center text-light">Belajar yuk</h2>
                        {/* <!-- per step --> */}
                        <MenuStep />
                </div>
                <div class="bg-btnKirim border border-dark d-flex justify-content-center bg-light">
                    <a href="" type="button" class="buttonKirim text-light d-flex justify-content-center align-items-center  fs-5 fw-bold btn mt-auto  mb-3 rounded-pill position-relative">Kirim</a>
                </div>
            </div>
            <div class="col-8">
                <div class="modul container-fluid d-flex flex-column align-items-center">
                  <div class="modul2 justify-content-start align-items-center gap-3">
                    <div class="dropzone">
                      <img src={hpbelumdirakit} id="device" width="100%" onClick={Pasang} />
                    </div>

                  </div>
                  <div class="komponen d-flex justify-content-between align-items-center">

                  </div>
                    <div class="buttonModul d-flex justify-content-between align-items-center container">
                      <button type="button" class="btnSimpan btn rounded-pill fw-bold ms-auto me-1" onClick={selanjutnya}>Simpan</button>
                    </div>
                </div>


                <div class="keForum  d-flex justify-content-evenly align-items-center">
                <div class="row">
                    <div class="col d-flex justify-content-center">
                        <p class="fs-5">Anda ingin menanyakan materi.? <br/> klik button disamping</p>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <button type="button" class="btn btn-primary rounded-pill" >Forum</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    <div class="note container mt-3 fs-5">
        <p>Note:Tombol “kirim" hanya bisa digunakan <br/>jika tantangan sudah selesai semua..!</p>
    </div>




        </div>
    )
}

export default ModelStep11a
