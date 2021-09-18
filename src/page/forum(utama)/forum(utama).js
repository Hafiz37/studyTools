import React from 'react'
import  "./forum(utama).css"
import Leaderboard from '../../komponen/leaderbord/leaderboard'

function ForumUtama() {
    return (
        <div>
            
            
  {/* <!-- ======= Search Pertanyaan ======= --> */}
  <h1 id="labelForum" class="fs-1 fw-bold text-center mt-5 mb-5">Forum Study Tools</h1>
  <form class="d-flex container">
    <input class="searchForum form-control me-2  rounded-pill" type="search" placeholder="Cari Jawaban Untuk Pertanyaan Apapun" aria-label="Search" />
  </form>
  {/* <!-- ======= selesai Search Pertanyaan ======= --> */}

  <div class="forumDanLeaderboard container">
    <div class="row">

      {/* <!-- ======= List Pertanyaan ======= --> */}
      <div class="col-sm-12 col-md-7">
        <section id="macamPertanyaan" class="container d-flex align-items-center flex-column justify-content-between mt-3">
          <div class="macamPertanyaan2">
            <div class="jenisPertanyaan mt-3 d-flex  ">
              <div class="row align-items-center container">
                <div class="col-2">
                  <img src="assets/img/carausel-1.jpg" alt="" class="fotoUser rounded-circle border border-2 border-dark" />
                </div>
                <div class="col-10">
                  <div class="row d-flex justify-content-between">
                    <div class="col-8">
                      <h3 class="namaUser fs-5 fw-bold">David Da Silva</h3>
                    </div>
                    <div class="col">
                      <h4 class="waktu">20 mnt</h4>
                    </div>
                  </div>
                  <div class="row">
                    <p class="pertanyaan p-">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste numquam ducimus enim sapiente tempore recusandae reprehenderit fuga! Quam, repudiandae! lore,10 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, iste? </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="jenisPertanyaan mt-3 d-flex  ">
              <div class="row align-items-center container">
                <div class="col-2">
                  <img src="assets/img/carausel-1.jpg" alt="" class="fotoUser rounded-circle border border-2 border-dark" />
                </div>
                <div class="col-10">
                  <div class="row d-flex justify-content-between">
                    <div class="col-8">
                      <h3 class="namaUser fs-5 fw-bold">David Da Silva</h3>
                    </div>
                    <div class="col">
                      <h4 class="waktu">20 mnt</h4>
                    </div>
                  </div>
                  <div class="row">
                    <p class="pertanyaan p-">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste numquam ducimus enim sapiente tempore recusandae reprehenderit fuga! Quam, repudiandae! lore,10 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, iste? </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="jenisPertanyaan mt-3 d-flex  ">
              <div class="row align-items-center container">
                <div class="col-2">
                  <img src="assets/img/carausel-1.jpg" alt="" class="fotoUser rounded-circle border border-2 border-dark" />
                </div>
                <div class="col-10">
                  <div class="row d-flex justify-content-between">
                    <div class="col-8">
                      <h3 class="namaUser fs-5 fw-bold">David Da Silva</h3>
                    </div>
                    <div class="col">
                      <h4 class="waktu">20 mnt</h4>
                    </div>
                  </div>
                  <div class="row">
                    <p class="pertanyaan p-">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste numquam ducimus enim sapiente tempore recusandae reprehenderit fuga! Quam, repudiandae! lore,10 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, iste? </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="jenisPertanyaan mt-3 d-flex  ">
              <div class="row align-items-center container">
                <div class="col-2">
                  <img src="assets/img/carausel-1.jpg" alt="" class="fotoUser rounded-circle border border-2 border-dark" />
                </div>
                <div class="col-10">
                  <div class="row d-flex justify-content-between">
                    <div class="col-8">
                      <h3 class="namaUser fs-5 fw-bold">David Da Silva</h3>
                    </div>
                    <div class="col">
                      <h4 class="waktu">20 mnt</h4>
                    </div>
                  </div>
                  <div class="row">
                    <p class="pertanyaan p-">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste numquam ducimus enim sapiente tempore recusandae reprehenderit fuga! Quam, repudiandae! lore,10 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, iste? </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="jenisPertanyaan mt-3 d-flex  ">
              <div class="row align-items-center container">
                <div class="col-2">
                  <img src="assets/img/carausel-1.jpg" alt="" class="fotoUser rounded-circle border border-2 border-dark" />
                </div>
                <div class="col-10">
                  <div class="row d-flex justify-content-between">
                    <div class="col-8">
                      <h3 class="namaUser fs-5 fw-bold">David Da Silva</h3>
                    </div>
                    <div class="col">
                      <h4 class="waktu">20 mnt</h4>
                    </div>
                  </div>
                  <div class="row">
                    <p class="pertanyaan p-">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste numquam ducimus enim sapiente tempore recusandae reprehenderit fuga! Quam, repudiandae! lore,10 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, iste? </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="jenisPertanyaan mt-3 d-flex  ">
              <div class="row align-items-center container">
                <div class="col-2">
                  <img src="assets/img/carausel-1.jpg" alt="" class="fotoUser rounded-circle border border-2 border-dark" />
                </div>
                <div class="col-10">
                  <div class="row d-flex justify-content-between">
                    <div class="col-8">
                      <h3 class="namaUser fs-5 fw-bold">David Da Silva</h3>
                    </div>
                    <div class="col">
                      <h4 class="waktu">20 mnt</h4>
                    </div>
                  </div>
                  <div class="row">
                    <p class="pertanyaan p-">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste numquam ducimus enim sapiente tempore recusandae reprehenderit fuga! Quam, repudiandae! lore,10 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, iste? </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lebihBnyk mt-5 mb-3">
            <button type="button" class="btn text-light fs-5 fw-bold rounded-pill">Lebih Banyak</button>
          </div>
        </section>
      </div>
      {/* <!-- ======= selesai List Pertanyaan ======= --> */}
        < Leaderboard />
    </div>
  </div>


        </div>
    )
}

export default ForumUtama
