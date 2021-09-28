import React from 'react'
import Navbar from '../../komponen/navbar/navbar';
import "./memilih-praktikum.css"

//gambar smartphone
import picA5 from './samsung-a5-2017.jpg';
import picJ5 from './samsung-j5-prime.jpg';
import picTab from './samsung-tab-a8.jpg';

function MemilihPraktikum() {
    return (
        <div>

            <Navbar/>

            {/* <!-- ======= List Device ======= --> */}
            <h1 class="fw-bold text-center fs-1 mt-5 mb-5">Pilih alat elektronik yang ingin anda pelajari</h1>

            <section class="p-2 p-sm-5 mb-4">
                <div class="border rounded-10 border-2 border-dark p-3">
                    <div class="macamDevice">
                        <div class="row bg-section-support border rounded-3 shadow-sm p-1 p-md-3 mx-2 mb-2">
                            <div class="col-md-3 mb-2">
                                <img src={picA5} width="200px" height="200px" alt="" class="d-block mx-auto img-fluid border border-dark rounded"/>
                            </div>
                            <div class="col-md-9">
                                <div class="mb-4">
                                    <h5 class="fw-bold mb-3">Perakitan Samsung Galaxy A5 2017</h5>
                                    <div class="row mt-2">
                                        <div class="col-2">Chipset</div>
                                        <div class="col-8">: Exynos 7880 (14 nm)</div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-2">RAM</div>
                                        <div class="col-8">: 3GB</div>
                                    </div>

                                    <div class="row mt-2">
                                        <div class="col-2">Internal</div>
                                        <div class="col-8">: 32GB/64GB</div>
                                    </div>

                                    <div class="row mt-2">
                                        <div class="col-2">Camera</div>
                                        <div class="col-8">: 16 MP, f/1.9, 27mm (wide), AF</div>
                                    </div>

                                    <div class="row mt-2">
                                        <div class="col-2">Battery</div>
                                        <div class="col-8">: Li-Ion 3000 mAh, non-removable</div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div class="border border-dark rounded-pill btn">500 Poin</div>
                                    <a href="/memilihPraktikum/DetailPraktikum"><button class="rounded-pill btn fw-bold">Ayo Mulai Belajar</button></a>
                                </div>
                            </div>
                        </div>
                        <div class="row bg-section-support border rounded-3 shadow-sm p-1 p-md-3 mx-2 mb-2">
                            <div class="col-md-3 mb-2">
                                <img src={picJ5} width="200px" height="200px" alt="" class="d-block mx-auto img-fluid border border-dark rounded"/>
                            </div>
                            <div class="col-md-9">
                                <div class="mb-4">
                                    <h5 class="fw-bold mb-3">Perakitan Samsung Galaxy J5 Prime</h5>
                                    <div class="row mt-2">
                                        <div class="col-2">Chipset</div>
                                        <div class="col-8">: Exynos 7570 Quad (14 nm)</div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-2">RAM</div>
                                        <div class="col-8">: 2GB/3GB</div>
                                    </div>

                                    <div class="row mt-2">
                                        <div class="col-2">Internal</div>
                                        <div class="col-8">: 16GB/32GB</div>
                                    </div>

                                    <div class="row mt-2">
                                        <div class="col-2">Camera</div>
                                        <div class="col-8">: 13 MP, f/1.9, 28mm (wide), AF</div>
                                    </div>

                                    <div class="row mt-2">
                                        <div class="col-2">Battery</div>
                                        <div class="col-8">: Li-Ion 2400 mAh, non-removable</div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div class="border border-dark rounded-pill btn">439 Poin</div>
                                    <a href="/memilihPraktikum/DetailPraktikum"><button class="rounded-pill btn fw-bold">Ayo Mulai Belajar</button></a>
                                </div>
                            </div>
                        </div>
                        <div class="row bg-section-support border rounded-3 shadow-sm p-1 p-md-3 mx-2">
                            <div class="col-md-3 mb-2">
                                <img src={picTab} width="200px" height="200px" alt="" class="d-block mx-auto img-fluid border border-dark rounded"/>
                            </div>
                            <div class="col-md-9">
                                <div class="mb-4">
                                    <h5 class="fw-bold mb-3">Perakitan Samsung Galaxy Tab A8 with S Pen</h5>
                                    <div class="row mt-2">
                                        <div class="col-2">Chipset</div>
                                        <div class="col-8">: Exynos 7904 (14 nm)</div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-2">RAM</div>
                                        <div class="col-8">: 3GB</div>
                                    </div>

                                    <div class="row mt-2">
                                        <div class="col-2">Internal</div>
                                        <div class="col-8">: 32GB</div>
                                    </div>

                                    <div class="row mt-2">
                                        <div class="col-2">Camera</div>
                                        <div class="col-8">: 8 MP, f/2.0, AF</div>
                                    </div>

                                    <div class="row mt-2">
                                        <div class="col-2">Battery</div>
                                        <div class="col-8">: Li-Po 4200 mAh, non-removable</div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div class="border border-dark rounded-pill btn">380 Poin</div>
                                    <a href="/memilihPraktikum/DetailPraktikum"><button class="rounded-pill btn fw-bold">Ayo Mulai Belajar</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                            <a href="/forum" class="btn rounded-pill w-50 forum fw-bold">Forum</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ======= selesai CTA ======= --> */}

        </div>
    )
}

export default MemilihPraktikum
