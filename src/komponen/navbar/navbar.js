// import React from 'react'
import "./styleNavbar.css";
import "../../index.css";

import LogoBiru from "../../logo-ST/logo-biru.png";
import profilePic from "./default-photo-profile.jpg";
// import defaultProfile from './default-photo-profile.jpg';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            <img src={LogoBiru} height="24" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/forum">
                  Forum
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home#ourTeam">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/memilihPraktikum">
                  Materi
                </a>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="/Kursus">
                  <span>
                    <i className="bi bi-cart"></i>
                  </span>
                  <sup>
                    <span className="badge badge-pill bg-danger">1</span>
                  </sup>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={profilePic}
                    className="rounded-circle me-2"
                    height="25"
                    width="25"
                    alt=""
                    loading="lazy"
                  />
                  M. Nasrullah
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/profile">
                      <i className="bi bi-person"></i> Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <i className="bi bi-box-arrow-right"></i> Keluar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
