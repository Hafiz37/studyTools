import React from 'react'
import "./memilih-praktikum.css"

import gambarSementara from "../../page/home/carausel/carausel-1.jpg"

function MemilihPraktikum() {
    return (
        <div>
            

        
    {/* <!-- ======= List Device ======= --> */}
    <h1 class="fw-bold text-center fs-1 mt-5 mb-5">Pilih alat elektronik yang ingin anda pelajari</h1>
    <div class="macamDevice container">
        <div class="container d-flex justify-content-center flex-column align-items-center">

            <div class="memilihDevice mb-3">
                <div class="device row g-0">
                    <div class="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={gambarSementara} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title fw-bold fs-4 mb-4">Perakitan Samsung Galaxy A5 2017</h2>

                            <div class="row mt-2">
                                <div class="col-2">Chipset</div>
                                <div class="col">: Exynoss 7570 quad-core 1.4GHz</div>
                            </div>

                            <div class="row mt-2">
                                <div class="col-2">RAM</div>
                                <div class="col">: 2GB/3GB</div>
                            </div>

                            <div class="row mt-2">
                                <div class="col-2">Internal</div>
                                <div class="col">: 16GB/32GB</div>
                            </div>

                            <div class="row mt-2">
                                <div class="col-2">Camera</div>
                                <div class="col">: 13MP/5MP</div>
                            </div>

                            <div class="row mt-2">
                                <div class="col-2">Battery</div>
                                <div class="col">: 2400mAh</div>
                            </div>

                            <div class="bodyPoin">
                                <div class="row">
                                    <div class="col-6">
                                        <h1 class="poin d-flex justify-content-center align-items-center fs-5">500 poin</h1>
                                    </div>
                                    <div class="col-6 ms-auto">
                                        <h1 class="button rounded-pill d-flex justify-content-center align-items-center fs-5">ayo mulai belajar</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
    {/* <!-- ======= selesai List Device ======= --> */}

    {/* <!-- ======= CTA ======= --> */}
    <section class="p-5 mb-4 ">
        <div class="card get-started p-md-5">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title mb-3 fw-bold">Mulai berdiskusi di, <span class="text-danger">forum</span> Study Tools!</h2>
                        <p class="card-text">
                            Tanyakan pada komunitas kami Bergabung dalam diskusi dan ajukan pertanyaan di Forum Study Tools.
                        </p>
                    </div>
                </div>
                <div class="col-md-4 d-flex flex-lg-column align-items-center justify-content-center p-3">
                    <a href="" class="btn rounded-pill w-50 forum fw-bold">Forum</a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ======= selesai CTA ======= --> */}



        </div>
    )
}

export default MemilihPraktikum
