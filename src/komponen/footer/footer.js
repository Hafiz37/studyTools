// import React from 'react'
import "./footer.css"
import '../../index.css';
import Logo from "../../logo-ST/logo-putih.png"

function Footer() {
    return (
            <footer className="text-white text-center text-md-start">
                <div className="container p-4">
                <div className="row">
                    <a href="/home" className="text-white col-lg-6 col-md-12 mb-4 mb-md-0">
                        <img src={Logo} alt="" width="308px" className="logo mb-4" />
                        <p>Belajar dimanapun, kapanpun dan siapapun</p>
                    </a>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase fw-bold mb-3">Jelajahi</h5>

                        <ul className="list-unstyled">
                        <li>
                            <a href="/home" className="text-white">Home</a>
                        </li>
                        <li>
                            <a href="/home" className="text-white">Team</a>
                        </li>
                        <li>
                            <a href="/memilihPraktikum" className="text-white">Materi</a>
                        </li>
                        <li>
                            <a href="/forum" className="text-white">Forum</a>
                        </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase fw-bold mb-3">Kunjungi Kami</h5>
                        <section className="mb-4">
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-facebook"></i></a>
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-twitter"></i></a>
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-youtube"></i></a>
                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-instagram"></i></a>
                        </section>
                    </div>
                    </div>
                </div>

                <div className="copyright text-center p-3" >
                    © 2021 Copyright <a className="text-white" href="/home">StudyTools</a>. All Rights Reserved.
                </div>
            </footer>
    )
}

export default Footer
