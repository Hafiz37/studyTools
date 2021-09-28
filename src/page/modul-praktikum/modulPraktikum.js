import "./modulPraktikum.css"
import React from 'react'
import Navbar from "../../komponen/navbar/navbar"

function ModulPraktikum() {
    return (
        <div>
          <Navbar/>
            

        
    <section id="progresbarPraktek">
        <div class="container mb-3">
            <div class="row d-flex justify-content-center mt-3">
                <div class="col-3">
                    <div class="progress rounded-pill  border border-dark">
                        <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
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
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        {/* <!-- per step --> */}
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-1" aria-expanded="false" aria-controls="flush-collapseOne">
                              Accordion Item #1
                            </button>
                          </h2>
                          <div id="step-1" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body lh-base fs-6">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-2" aria-expanded="false" aria-controls="flush-collapseTwo">
                              Accordion Item #2
                            </button>
                          </h2>
                          <div id="step-2" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body  lh-base fs-6">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-3" aria-expanded="false" aria-controls="flush-collapseThree">
                              Accordion Item #3
                            </button>
                          </h2>
                          <div id="step-3" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body lh-base fs-6 ">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-4" aria-expanded="false" aria-controls="flush-collapseTwo">
                              Accordion Item #4
                            </button>
                          </h2>
                          <div id="step-4" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body  lh-base fs-6">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#step-5" aria-expanded="false" aria-controls="flush-collapseThree">
                              Accordion Item #5
                            </button>
                          </h2>
                          <div id="step-5" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body  lh-base fs-6">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="bg-btnKirim border border-dark d-flex justify-content-center bg-light">
                    <a href="/" type="button" class="buttonKirim text-light d-flex justify-content-center align-items-center  fs-5 fw-bold btn mt-auto  mb-3 rounded-pill position-relative">Kirim</a>
                </div>
            </div>
            <div class="col-8">
                <div class="modul container-fluid d-flex flex-column align-items-center">
                    <div class="modul2">

                    </div>
                    <div class="komponen d-flex justify-content-between align-items-center">
                        <i class="bi bi-caret-left fs-2"></i>
                            <div class="komponen2 d-flex justify-content-start align-items-center gap-3">
                                <img src="assets/img/carausel-1.jpg" class="macamKomponen"/>
                                <img src="assets/img/carausel-1.jpg" class="macamKomponen"/>
                                <img src="assets/img/carausel-1.jpg" class="macamKomponen"/>
                                <img src="assets/img/carausel-1.jpg" class="macamKomponen"/>
                            </div>
                        <i class="bi bi-caret-right fs-2"></i>
                    </div>
                    <div class="buttonModul d-flex justify-content-between align-items-center container">
                        <button type="button" class="btnSimpan btn rounded-pill fw-bold">Simpan</button>
                        <button type="button" class="btnTempel btn rounded-pill fw-bold ms-auto me-1">Tempel</button>
                        <button type="button" class="btnUlang btn rounded-pill fw-bold">Ulang</button>
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

export default ModulPraktikum
