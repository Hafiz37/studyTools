import React from 'react'
import "./detail-pertanyaan.css"
import userPic from '../forum(utama)/pic-1.jpg';
import Navbar from '../../komponen/navbar/navbar';

function DetailPertanyaan() {
  return (
    <div>
      <Navbar/>
      <section id="detailPertanyaan-head" class="container mt-5 p-3">
        <div class="d-flex flex-row">
          <img src={userPic} class="rounded-circle me-2" alt="" />
          <div class="d-flex flex-column justify-content-around">
            <h3 class="namaUser-penanya fw-bold fs-4 ">Bagus Zulfikar</h3>
            <h4 class="waktu-bertanya fs-6">20 menit yang lalu</h4>
          </div>
        </div>
          <p class="pertanyaan fs-5 mt-3 mb-3">Langkah selanjutnya setelah memasang kamera depan pada Samsung A5 apa ya temen-temen?</p>
          <a href="/forum/DetailPertanyaan/Jawab"><button type="button" class="btn-jwb btn text-white fw-bold rounded-pill w-25 mt-3">Jawab</button></a>
      </section>

      <section id="detailPertanyaan-body" class="container mt-5 pb-5 d-flex flex-column align-items-center">
        <div class="label">
          <h2 class="fw-bold fs-3 ms-3 mt-2 mb-2">Jawaban</h2>
        </div>

        {/* <!-- per jawaban --> */}
        <div class="perJawaban pb-3 mt-3">
          <div class="row deskripsi">
            <div class="col ms-2 mt-2 mb-3">
              <div class="row namaPenjawab fw-bold fs-4">Surya Saiful</div>
              <div class="row waktuMenjawab fs-6 mt-1">14 menit yang lalu</div>
            </div>
            <div class="col verived d-flex justify-content-end align-items-center">
              <h4 class="fw-bold fs-5 mt-3 d-flex justify-content-center align-items-center">verified</h4>
            </div>
          </div>
          <div class="jawaban">
            <div class="label2 fs-5 fw-bold ms-3">Jawaban :</div>
            <p class="ms-3 mt-1 fs-5"> Kalau menurut penjelasan didalam materi, langkah selanjutnya adalah memasang motherboardnya kedalam casing hp.</p>
          </div>
        </div>
        
        <div class="perJawaban pb-3 mt-3">
          <div class="row deskripsi">
            <div class="col ms-2 mt-2 mb-3">
              <div class="row namaPenjawab fw-bold fs-4">Intan Dwi</div>
              <div class="row waktuMenjawab fs-6 mt-1">19 menit yang lalu</div>
            </div>
          </div>
          <div class="jawaban">
            <div class="label2 fs-5 fw-bold ms-3">Jawaban :</div>
            <p class="ms-3 mt-1 fs-5">Wah, sama. Aku juda kurang paham...</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DetailPertanyaan
