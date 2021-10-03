import "../modulPraktikum.css";
import komponena from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-2-a.png';
import komponenb from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/komponen/komponen-2-b.png';
import hp from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/langkah-langkah/langkah-2.png';
import hppasang from '../../../../src/komponen/modul-3D/samsung-galaxy-A5-2017/langkah-langkah/langkah-3.png';
import React from 'react';
import MenuStep from "./MenuStep";
import interact from 'interactjs';
import $ from "jquery";

function ModelStep1() {
  var putar = 1;
  var LokasiOK = 0;
  var lokx = 0;
  var loky = 0;

  function putarGambar(e){
    e.preventDefault();
    if (putar == 1) {
      $("#komponen").attr("src",komponenb);
      putar = 2;
    }else {
      $("#komponen").attr("src",komponena);
      putar = 1;
    }
  }
  function tempel(e){
    e.preventDefault();
    if (LokasiOK == 1) {
      $("#device").attr("src",hppasang);
      $("#komponen").attr("hidden","true");
      $(".btnSimpan").removeAttr("disabled");
    }else {
      alert("Lokasi Komponen Tidak Sesuai");
    }
  }
  function selanjutnya(e) {
    e.preventDefault();
    if (LokasiOK == 1) {
      window.location.replace("ModulA5step2");
    }else {
      alert("Komponen Belum Terpasang");
    }
  }

  function dragMoveListener (event) {
    var p = $( ".gambar" ).first();
    var position = p.position();
    var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || position.left) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || position.top) + event.dy;

    // translate the element
    // target.style.webkitTransform =
    // target.style.transform =
    // 'rotate('+derajat+'deg) translate(' + x + 'px, ' + y + 'px)';
    lokx = x;
    loky = y;
    $('.gambar').css({
      "left" : x+"px", /* For modern browsers(CSS3)  */
      "top" : y+"px", /* For modern browsers(CSS3)  */
    });
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
      dropzoneElement.classList.add('drop-target')
      draggableElement.classList.add('can-drop')
      draggableElement.textContent = 'Dragged in'
    },
    ondragleave: function (event) {
      LokasiOK = 0;
      // remove the drop feedback style
      event.target.classList.remove('drop-target')
      event.relatedTarget.classList.remove('can-drop')
      event.relatedTarget.textContent = 'Dragged out'
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
                  <div class="modul2">
                    <h2>Komponen</h2>
                    <img src={komponena} alt="logo" id="komponen" class="gambar drag-drop" width="100px"/>
                      <div class="dropzone">
                        <h2>Device</h2>
                        <img src={hp} id="device" width="100%"/>
                      </div>
                  </div>
                    <div class="buttonModul d-flex justify-content-between align-items-center container">
                      <button type="button" class="btnUlang btn rounded-pill fw-bold" onClick={putarGambar}>Putar</button>
                      <button type="button" class="btnTempel btn rounded-pill fw-bold " onClick={tempel}>Tempel</button>

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

export default ModelStep1
