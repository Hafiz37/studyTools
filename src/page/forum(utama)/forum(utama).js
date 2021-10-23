import React from 'react'
import "./forum(utama).css"
import Leaderboard from '../../komponen/leaderbord/leaderboard'
import pic1 from './pic-1.jpg';
import pic2 from './pic-2.jpg';
import pic3 from './pic-3.jpg';
import pic4 from './pic-4.jpg';
import pic5 from './pic-5.jpg';
import pic6 from './pic-6.jpg';
import Navbar from '../../komponen/navbar/navbar';

function ForumUtama() {
  return (
    <div>
      <Navbar/>

      {/* <!-- ======= Search Pertanyaan ======= --> */}
      <h1 id="labelForum" class="fs-1 fw-bold text-center mt-5 mb-5">Forum Study Tools</h1>
      <div class="container">
        <div className="col-xl-7">
          <form>
            <div class="mb-3">
              <input type="search" class="form-control rounded-pill" id="searchPertanyaan" placeholder="Cari Jawaban Untuk Pertanyaan Apapun" aria-label="Search" />
            </div>
          </form>
        </div>
      </div>
      {/* <!-- ======= selesai Search Pertanyaan ======= --> */}

      <div class="forumDanLeaderboard container">
        <div class="row">

          {/* <!-- ======= List Pertanyaan ======= --> */}
          <div class="col-xl-7 mb-5 p-4 border border-2 rounded-25 bg-section-support">
            <div class="border border-1 rounded-10 p-4 bg-white row align-items-center">
              <div class="col-md-2 d-flex justify-content-center justify-content-md-start mb-2">
                <img src={pic1} alt="" height="80px" width="80px" class="fotoUser rounded-circle border border-2 border-dark" />
              </div>
              <div class="col-md-10">
                <div class="d-flex justify-content-between mb-3">
                  <h3 class="namaUser fs-5 fw-bold">Bagus Zulfikar</h3>
                  <h4 class="waktu">20 menit yang lalu</h4>
                </div>
                <div class="col">
                  <p>Langkah selanjutnya setelah memasang kamera depan pada Samsung A5 apa ya temen-temen?</p>
                </div>
                <div class="col text-end mt-3">
                  <a href="/forum/DetailPertanyaan"><button class="btn btn-light border border-dark border-2 rounded-pill">Lihat Pertanyaan</button></a>
                </div>
              </div>
            </div>
            <div class="border border-1 rounded-10 p-4 bg-white row align-items-center">
              <div class="col-md-2 d-flex justify-content-center justify-content-md-start mb-2">
                <img src={pic2} alt="" height="80px" width="80px" class="fotoUser rounded-circle border border-2 border-dark" />
              </div>
              <div class="col-md-10">
                <div class="d-flex justify-content-between mb-3">
                  <h3 class="namaUser fs-5 fw-bold">Surya Saiful</h3>
                  <h4 class="waktu">54 menit yang lalu</h4>
                </div>
                <div class="col">
                  <p>Pada langkah kelima, ketika memasang motherboard pada Samsung Tab, harusnya diputar seperti apa ya? dan perlu dibalik atau ndak? soalnya aku nyoba salah terus.</p>
                </div>
                <div class="col text-end mt-3">
                  <a href="/forum/DetailPertanyaan"><button class="btn btn-light border border-dark border-2 rounded-pill">Lihat Pertanyaan</button></a>
                </div>
              </div>
            </div>
            <div class="border border-1 rounded-10 p-4 bg-white row align-items-center">
              <div class="col-md-2 d-flex justify-content-center justify-content-md-start mb-2">
                <img src={pic3} alt="" height="80px" width="80px" class="fotoUser rounded-circle border border-2 border-dark" />
              </div>
              <div class="col-md-10">
                <div class="d-flex justify-content-between mb-3">
                  <h3 class="namaUser fs-5 fw-bold">Dwi Sari</h3>
                  <h4 class="waktu">1 jam yang lalu</h4>
                </div>
                <div class="col">
                  <p>Wah... aku lupa password akunku, cara resetnya bagaimana nih?</p>
                </div>
                <div class="col text-end mt-3">
                  <a href="/forum/DetailPertanyaan"><button class="btn btn-light border border-dark border-2 rounded-pill">Lihat Pertanyaan</button></a>
                </div>
              </div>
            </div>
            <div class="border border-1 rounded-10 p-4 bg-white row align-items-center">
              <div class="col-md-2 d-flex justify-content-center justify-content-md-start mb-2">
                <img src={pic4} alt="" height="80px" width="80px" class="fotoUser rounded-circle border border-2 border-dark" />
              </div>
              <div class="col-md-10">
                <div class="d-flex justify-content-between mb-3">
                  <h3 class="namaUser fs-5 fw-bold">Raja Yohanes</h3>
                  <h4 class="waktu">7 jam yang lalu</h4>
                </div>
                <div class="col">
                  <p>Apakah ada yang mengalami masalah seperti aku, ketika mengambil materi tentang Samsung J7 Primme, praktikumnya ndak bisa. Gimana gesss?</p>
                </div>
                <div class="col text-end mt-3">
                  <a href="/forum/DetailPertanyaan"><button class="btn btn-light border border-dark border-2 rounded-pill">Lihat Pertanyaan</button></a>
                </div>
              </div>
            </div>
            <div class="border border-1 rounded-10 p-4 bg-white row align-items-center">
              <div class="col-md-2 d-flex justify-content-center justify-content-md-start mb-2">
                <img src={pic5} alt="" height="80px" width="80px" class="fotoUser rounded-circle border border-2 border-dark" />
              </div>
              <div class="col-md-10">
                <div class="d-flex justify-content-between mb-3">
                  <h3 class="namaUser fs-5 fw-bold">Intan Dwi</h3>
                  <h4 class="waktu">1 hari yang lalu</h4>
                </div>
                <div class="col">
                  <p>Kok saat sampai di langkah ke-10 di perakitan Samsung Tab, ada komponen yang hilang ya. Apa cuma di aku aja wkwkwkwkwk...</p>
                </div>
                <div class="col text-end mt-3">
                  <a href="/forum/DetailPertanyaan"><button class="btn btn-light border border-dark border-2 rounded-pill">Lihat Pertanyaan</button></a>
                </div>
              </div>
            </div>
            <div class="border border-1 rounded-10 p-4 bg-white row align-items-center">
              <div class="col-md-2 d-flex justify-content-center justify-content-md-start mb-2">
                <img src={pic6} alt="" height="80px" width="80px" class="fotoUser rounded-circle border border-2 border-dark" />
              </div>
              <div class="col-md-10">
                <div class="d-flex justify-content-between mb-3">
                  <h3 class="namaUser fs-5 fw-bold">Siti Cahaya</h3>
                  <h4 class="waktu">4 hari yang lalu</h4>
                </div>
                <div class="col">
                  <p>Bingung nih cara mengambil materi gimana. Ajari dong manteman...</p>
                </div>
                <div class="col text-end mt-3">
                  <a href="/forum/DetailPertanyaan"><button class="btn btn-light border border-dark border-2 rounded-pill">Lihat Pertanyaan</button></a>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <button type="button" class="btn-lebihBanyak btn fw-bold text-white btn-block rounded-pill w-100">Muat lebih banyak</button>
            </div>
          </div>
          {/* <!-- ======= selesai List Pertanyaan ======= --> */}

{/* <Leaderboard/> */}
          {/* <!-- ======= Leaderboard ======= --> */}
          <div className="col">
            < Leaderboard />
            <div className="mt-4 d-flex flex-column flex-md-row flex-xl-column align-items-center justify-content-md-between align-items-xl-center">
              <a href="/forum/TanyaPertanyaan"><button className="btn-tanyaYuk btn btn-primary rounded-pill fw-bold mb-2 mb-md-0 mb-xl-2">Tanya Yuk</button></a>
              <a target="_blank" href="https://forms.gle/4YVyAXGGKyjQLSWJ6"><button className="btn btn-outline-dark rounded-pill fw-bold">Komentari Study Tools Dong</button></a>
            </div>
          </div>
          {/* <!-- ======= selesai Leaderboard ======= --> */}

        </div>
      </div>
    </div>
  )
}

export default ForumUtama
