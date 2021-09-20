import React from 'react'
import "./detail-pertanyaan.css"

function DetailPertanyaan() {
    return (
        <div>
            

        
<section id="detailPertanyaan-head" class="container mt-5">
  <div class="row garisDetail">
    <div class="col-1 d-flex justify-content-center align-items-start">
      <img src="assets/img/carousel-3.jpg" class="rounded-circle mt-2" alt="" />
    </div>
    <div class="col">
      <div class="row">
        <h3 class="namaUser-penanya fw-bold fs-4 ">David Da Silva</h3>
      </div>
      <div class="row">
        <h4 class="waktu-bertanya fw-bold fs-5">20 mnt yang lalu</h4>
      </div>
      <div class="row">
        <p class="pertanyaan fs-5 mt-3 mb-3">gimana caranya daftar akun guys,..? </p>
      </div>
    </div>
  </div>
  <div class="btn-jwb d-flex align-items-center">
    <button type="button" class="btn text-white fw-bold rounded-pill fs-5 mb-5 mt-5 d-flex align-items-center justify-content-center ">Jawab</button>
  </div>
</section>

<section id="detailPertanyaan-body" class="container mt-5 pb-5 d-flex flex-column align-items-center">
  <div class="label">
    <h2 class="fw-bold ms-3 mt-2 mb-2">Jawaban</h2>
  </div>

  {/* <!-- per jawaban --> */}
  <div class="perJawaban pb-3 mt-3">
    <div class="row deskripsi">
      <div class="col ms-2 mt-2 mb-3">
        <div class="row namaPenjawab fw-bold fs-3">murad</div>
        <div class="row waktuMenjawab fs-6 mt-1">14 mnt yang lalu</div>
      </div>
      <div class="col verived d-flex justify-content-end align-items-center">
        <h4 class="fw-bold fs-5 mt-3 d-flex justify-content-center align-items-center">verived</h4>
      </div>
    </div>
    <div class="jawaban">
      <div class="label2 fs-4 fw-bold ms-3">Jawaban :</div>
      <p class="ms-3 mt-1 fs-5">Lorem ipsum dolor, asauhufa uhaviuh iuh iuhiuhiu giu ui iugiu   iygiuhi huihiuhu  ihi ihhuihiu huihiu huihuihuh uihuihiu huihuh uhuhu hu  iojoa fjjdoj sit ame Lorem Lorem ipsum dolor, asauhufa uhaviuh iuh iuhiuhiu giu ui iugiu   iygiuhi huihiuhu  ihi ihhuihiu huihiu huihuihuh uihuihiu huihuh uhuhu hu  iojoa fjjdoj sit ame Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet inciduntipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt   Lorem ipsum dolor, asauhufa uhaviuh iuh iuhiuhiu giu ui iugiu   iygiuhi huihiuhu  ihi ihhuihiu huihiu huihuihuh uihuihiu huihuh uhuhu hu  iojoa fjjdoj sit ame Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt </p>
    </div>
  </div>
  
  
</section>




        </div>
    )
}

export default DetailPertanyaan
