import React from 'react'
import "./detailPraktikum.css"

import gambarSementara from "../../page/home/carausel/carausel-1.jpg"


function DetailPraktikum() {
    return (
        <div id="memilihMateri-page">
            
    <section id="conten-header" class="container">
        <div class="row mb-2">
            <div class="col d-flex justify-content-end fs-2">
                <i class="bi bi-bag-plus-fill ms-auto"></i>
            </div>
        </div>
        <div class="row">
            <div class="col-8 d-flex flex-column justify-content-between">
                <div class="NamaMateri/device">
                    <h1 class="fw-bold fs-2">Perakitan Samsung A5 2017</h1>
                </div>
                <div class="deskripsi">
                    <p className="fs-5 lh-base">
                        Chipset =Exynoss 7570 quad-core 1.4GHz <br/> Ram       =  2GB/3GB <br/> Internal  =  16GB/32GB <br/> Camera  = 13MP/5MP <br/> Battery   = 2400mAh   
                    </p>
                </div>
                <button type="button" class="btnBukaMateri btn rounded-pill text-white fw-bold">Buka Materi</button>
            </div>
            <div class="col d-flex justify-content-end">
                <img src={gambarSementara} alt="" class="gambarMateri"/>
            </div>
        </div>
    </section>

    <div class="conten-body container mt-5 pb-5 mb-5">
        <div class="row mt-3 ms-3">
            <div class="col">
                <h2 class="fw-bold">Materi</h2>
            </div>
        </div>

       
        <div class="perMateri row ms-auto me-auto mt-4 d-flex justify-content-center align-items-center container pt-1 fs-4">
            <div class="col-1">
                <h4 class="no"> 1. </h4>
            </div>
            <div class="col-9">
                <h4 class="namaMateri"> Perkenalan materi </h4>
            </div>
            <div class="col">
                <button type="button" class="btn rounded-pill fw-bold">Buka</button>
            </div>
        </div>
        <div class="perMateri row ms-auto me-auto mt-4 d-flex justify-content-center align-items-center container pt-1 fs-4">
            <div class="col-1">
                <h4 class="no"> 1. </h4>
            </div>
            <div class="col-9">
                <h4 class="namaMateri"> Perkenalan materi </h4>
            </div>
            <div class="col">
                <button type="button" class="btn rounded-pill fw-bold">Buka</button>
            </div>
        </div>
        <div class="perMateri row ms-auto me-auto mt-4 d-flex justify-content-center align-items-center container pt-1 fs-4">
            <div class="col-1">
                <h4 class="no"> 1. </h4>
            </div>
            <div class="col-9">
                <h4 class="namaMateri"> Perkenalan materi </h4>
            </div>
            <div class="col">
                <button type="button" class="btn rounded-pill fw-bold">Buka</button>
            </div>
        </div>
        <div class="perMateri row ms-auto me-auto mt-4 d-flex justify-content-center align-items-center container pt-1 fs-4">
            <div class="col-1">
                <h4 class="no"> 1. </h4>
            </div>
            <div class="col-9">
                <h4 class="namaMateri"> Perkenalan materi </h4>
            </div>
            <div class="col">
                <button type="button" class="btn rounded-pill fw-bold">Buka</button>
            </div>
        </div>
        <div class="perMateri row ms-auto me-auto mt-4 d-flex justify-content-center align-items-center container pt-1 fs-4">
            <div class="col-1">
                <h4 class="no"> 1. </h4>
            </div>
            <div class="col-9">
                <h4 class="namaMateri"> Perkenalan materi </h4>
            </div>
            <div class="col">
                <button type="button" class="btn rounded-pill fw-bold">Buka</button>
            </div>
        </div>
        <div class="perMateri row ms-auto me-auto mt-4 d-flex justify-content-center align-items-center container pt-1 fs-4">
            <div class="col-1">
                <h4 class="no"> 1. </h4>
            </div>
            <div class="col-9">
                <h4 class="namaMateri"> Perkenalan materi </h4>
            </div>
            <div class="col">
                <button type="button" class="btn rounded-pill fw-bold">Buka</button>
            </div>
        </div>
        <div class="perMateri row ms-auto me-auto mt-4 d-flex justify-content-center align-items-center container pt-1 fs-4">
            <div class="col-1">
                <h4 class="no"> 1. </h4>
            </div>
            <div class="col-9">
                <h4 class="namaMateri"> Perkenalan materi </h4>
            </div>
            <div class="col">
                <button type="button" class="btn rounded-pill fw-bold">Buka</button>
            </div>
        </div>
        <div class="perMateri row ms-auto me-auto mt-4 d-flex justify-content-center align-items-center container pt-1 fs-4">
            <div class="col-1">
                <h4 class="no"> 1. </h4>
            </div>
            <div class="col-9">
                <h4 class="namaMateri"> Perkenalan materi </h4>
            </div>
            <div class="col">
                <button type="button" class="btn rounded-pill fw-bold">Buka</button>
            </div>
        </div>
        <div class="perMateri row ms-auto me-auto mt-4 d-flex justify-content-center align-items-center container pt-1 fs-4">
            <div class="col-1">
                <h4 class="no"> 1. </h4>
            </div>
            <div class="col-9">
                <h4 class="namaMateri"> Perkenalan materi </h4>
            </div>
            <div class="col">
                <button type="button" class="btn rounded-pill fw-bold">Buka</button>
            </div>
        </div>

    </div>



        </div>
    )
}

export default DetailPraktikum
