import React from 'react'
import "./profile-page.css"
import gambarSementara from "../../page/home/carausel/carausel-1.jpg"


function ProfilePage() {
    return (
        <div className="profile-page">
            
    <div className="page-header header-filter" data-parallax="true"></div>

<div className="profile-content container" >
    <div className="row" >
        <div className="profile-content-2 col-md-11 text-center">
            <div className="avatar">
                <img src={gambarSementara} alt="Circle Image" className="rounded-circle img-fluid" />
            </div>
            <div className="name">
                <h3 className="title fs-2 fw-bold mt-1 mb-2">M.Nasrullah</h3>
                <h6 className="fs-5">830 poin</h6>
            </div>
            <div className="deskripsi">
              <div className="row">
                <div className="col d-flex flex-column align-items-center justify-content-between">
                    <h3 className="title fw-bold fs-5">Tanggal Lahir</h3>
                    <p className="ttl">4 Desember 2004</p>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-between">
                    <h3 className="title fw-bold fs-5">Jenis Kelamin</h3>
                    <p className="kelamin">laki-laki</p>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-between">
                    <h3 className="title fw-bold fs-5">Email</h3>
                    <p className="email">nasrullahaja@gmail.com</p>
                </div>
              </div>
            </div>
        </div>
    </div>
    <i className="bi bi-pencil-square fs-2 top-0 absolute"></i>
</div>

<div className="button container mt-5 d-flex justify-content-evenly">
    <div className="row">
        <div className="col">
            <button type="button" className="btn rounded-pill fw-bold">Kursus</button>
        </div>
        <div className="col">
            <button type="button" className="btn rounded-pill fw-bold">Komentar untuk Study Tools</button>
        </div>
    </div>
</div>
        </div>
    )
}

export default ProfilePage
