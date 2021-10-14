import React from 'react'
import {useState} from "react"



function MenuStep() {
  // let [materi, setMateri] = useState()
  // let api = () => {
  //   fetch("https://615eb2583d1491001755aa76.mockapi.io/materi")
  //   .then(respons => respons.json())
  //   .then((result) => {
  //     const row_item = []
  //     for (let item of result) {
  //       const row = (
  //         // WAITT YA KWKWKWKW
  //       <div class="accordion accordion-flush" id="accordionFlushExample">
  //         <div class="accordion-item">
  //           <h2 class="accordion-header" id="flush-headingOne">
  //         <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-1" aria-expanded="false" aria-controls="flush-collapseOne">
  //           {item.judul}
  //         </button>
  //       </h2>
  //       <div id="#step-1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
  //         <div class="accordion-body lh-base fs-6">
  //         {item.deskripsi}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //       );
  //       row_item.push(row);
  //     }
  //     setMateri(row_item)
  //   })
  // }
  // api()
  
  
  return (
    <div class="accordion accordion-flush" id="accordionFlushExample" style={{ height: 650, "overflow-y": "auto" }}>
      {/* {materi} */}
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-1" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Fingerprint
          </button>
        </h2>
        <div id="step-1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">
          ambil komponen fingerprint, lalu pasangkan di bagian bawah dari bingkai.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-2" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Button Home & back
          </button>
        </h2>
        <div id="step-2" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen button home & back untuk dipasang mengapit komponen fingerprint. Pastikan rotasinya sesuai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-3" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Octa
          </button>
        </h2>
        <div id="step-3" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6"> ambil komponen octa (layar), lalu pasangkan di bagian depan dari bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-4" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Main Cam
          </button>
        </h2>
        <div id="step-4" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen main cam(kamera belakang), lalu pasangkan di bagian depan motherboard.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-5" aria-expanded="false" aria-controls="flush-collapseOne">
            Hubungkan Main Cam
          </button>
        </h2>
        <div id="step-5" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">hubungkan konektor komponen main cam(kamera belakang) ke konektor motherboard.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-6" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Front Cam
          </button>
        </h2>
        <div id="step-6" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen front cam(kamera depan), lalu pasangkan di bagian depan motherboard.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-7" aria-expanded="false" aria-controls="flush-collapseOne">
            Hubungkan Front Cam
          </button>
        </h2>
        <div id="step-7" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">hubungkan konektor komponen front cam(kamera depan) ke konektor motherboard.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-8" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang RCV
          </button>
        </h2>
        <div id="step-8" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen rcv, lalu pasangkan di bagian atas dari bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-9" aria-expanded="false" aria-controls="flush-collapseOne">
              Memasang proximity
          </button>
        </h2>
        <div id="step-9" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil proximity(sensor cahaya), lalu pasangkan di bagian atas dari bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-10" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang BPA
          </button>
        </h2>
        <div id="step-10" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen bpa top side(motherboard depan), lalu pasangkan di bagian belakang bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-11" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Kabel
          </button>
        </h2>
        <div id="step-11" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">menancapkan kabel yang ada dibingkai ke motherboard. dimulai dari volume key 1 - langkah-17.png - langkah viberator/motor - langkah earjact - langkah-20.png</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-12" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Power Key
          </button>
        </h2>
        <div id="step-12" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen power key 1 (tombol on/off), lalu pasangkan di bagian belakang bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-13" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Power Key 2
          </button>
        </h2>
        <div id="step-13" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen power key 2, lalu pasangkan di bagian belakang bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-14" aria-expanded="false" aria-controls="flush-collapseOne">
            Hubungan Power Key
          </button>
        </h2>
        <div id="step-14" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">hubungkan konektor komponen power key 2 ke konektor bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-15" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Volume Key 
          </button>
        </h2>
        <div id="step-15" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen volume key 1, lalu pasangkan di bagian belakang bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-16" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Volume Key 2
          </button>
        </h2>
        <div id="step-16" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen volume key 2, lalu pasangkan di bagian belakang bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-17" aria-expanded="false" aria-controls="flush-collapseOne">
            Hubungkan Volume Key 
          </button>
        </h2>
        <div id="step-17" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">hubungkan konektor komponen volume key 2 konektor motherboard.  .</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-18" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Viberator
          </button>
        </h2>
        <div id="step-18" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen viberator/motor, lalu pasangkan di bagian belakang bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-19" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang earjact
          </button>
        </h2>
        <div id="step-19" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen earjact, lalu pasangkan di bagian belakang bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-20" aria-expanded="false" aria-controls="flush-collapseOne">
            Hubungkan Earjact
          </button>
        </h2>
        <div id="step-20" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">hubungkan konektor komponen earjact ke konektor motherboard.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-21" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Battery
          </button>
        </h2>
        <div id="step-21" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen battery, lalu pasangkan di bagian belakang bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-22" aria-expanded="false" aria-controls="flush-collapseOne">
            Hubungkan Battery
          </button>
        </h2>
        <div id="step-22" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">hubungkan konektor komponen battery konektor ke motherboard.  .</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-23" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang NFC/MST
          </button>
        </h2>
        <div id="step-23" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen nfc/mst ant(tutup bingkai belakang), lalu pasangkan di bagian belakang bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-24" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Casing
          </button>
        </h2>
        <div id="step-24" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen casing, lalu pasangkan di bagian belakang bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-25" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Sim Card
          </button>
        </h2>
        <div id="step-25" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen sim card 1, lalu pasangkan di bagian samping  bingkai.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-2">
          <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-26" aria-expanded="false" aria-controls="flush-collapseOne">
            Memasang Sim Card & SD Card
          </button>
        </h2>
        <div id="step-26" class="accordion-collapse collapse" aria-labelledby="flush-2" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body lh-base fs-6">ambil komponen sim card 2 & sd card, lalu pasangkan di bagian samping  bingkai.</div>
        </div>
      </div>
    </div>
  )
}

export default MenuStep
