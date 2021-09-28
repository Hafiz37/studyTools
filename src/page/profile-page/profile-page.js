import React from 'react'
import "./profile-page.css"
import gambarSementara from "../../komponen/navbar/default-photo-profile.jpg"
import Navbar from '../../komponen/navbar/navbar'


function ProfilePage() {
    return (
        <div className="profile-page">

            <Navbar/>
            <div className="page-header header-filter" data-parallax="true"></div>
            <div className="profile-content container" >
                <div className="row" >
                    <a className="d-flex justify-content-end mt-2"><i className="bi bi-pencil-square fs-2 top-0 absolute"></i></a>
                    <div className="profile-content-2 col-md-11 text-center">
                        <div className="avatar">
                            <img src={gambarSementara} alt="Circle Image" className="rounded-circle img-fluid" />
                        </div>
                        <div className="name">
                            <h3 className="title fs-2 fw-bold mt-1 mb-2">M.Nasrullah</h3>
                            <h6 className="fs-5">830 poin</h6>
                        </div>
                        <div className="deskripsi mb-4">
                            <div className="d-flex flex-column flex-md-row justify-content-md-between">
                                <div className="d-flex flex-row flex-md-column align-items-center justify-content-between">
                                    <h3 className="title fw-bold fs-5">Tanggal Lahir</h3>
                                    <p className="ttl">4 Desember 2004</p>
                                </div>
                                <div className="d-flex flex-row flex-md-column align-items-center justify-content-between">
                                    <h3 className="title fw-bold fs-5">Jenis Kelamin</h3>
                                    <p className="kelamin">laki-laki</p>
                                </div>
                                <div className="d-flex flex-row flex-md-column align-items-center justify-content-between">
                                    <h3 className="title fw-bold fs-5">Email</h3>
                                    <p className="email">nasrullahaja@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 d-flex flex-column flex-md-row align-items-center justify-content-md-evenly mx-2 mx-md-0">
                <button className="btn btn-primary rounded-pill fw-bold mb-2 mb-md-0">Kursus Saya</button>
                <button className="btn btn-secondary rounded-pill fw-bold">Komentar untuk Study Tools</button>
            </div>
        </div>
    )
}

export default ProfilePage
