import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import LogoBiru from "./logo-ST/logo-biru.png"


// import logo from './logo.svg';
import './App.css';
import Navbar from "./komponen/navbar/navbar"
import Footer from "./komponen/footer/footer"
import Leaderboard from './komponen/leaderbord/leaderboard';


// halaman
import HomePage from "./page/home/home"
import LoginPage from "./page/login-page/login"
import ForumUtama from "./page/forum(utama)/forum(utama)"
import memilihPraktikum from "./page/memilih-praktikum/memilih-praktikum"
import ProfilePage from "./page/profile-page/profile-page"
import LandingPage from "./page/landing-page/landing-page"
import MemilihPraktikum from "./page/memilih-praktikum/memilih-praktikum"
import DetailPraktikum from "./page/detailPraktikum-memilihMateri/detail-praktikum";
import ModulPraktikum from "./page/modul-praktikum/modulPraktikum";
import JwbPertanyaanForum from "./page/forum(jwb-pertanyaan)/jwb-pertanyaan";
import DetailPertanyaan from "./page/forum(detail-pertanyaan)/detail-pertanyaan";








function App() {
  return (  
    <div className="App">
    <Router>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><Link to="/home">
                <img src={LogoBiru} height="24" alt="" />
            </Link></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                    <Link to="/home"><a className="nav-link active" aria-current="page" href="hlmn-home.html">Home</a> </Link>
                </li>
                <li className="nav-item">
                    <Link to="/forum"><a className="nav-link" href="hlmn-forum(utama).html">Forum</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/ourTeam"><a className="nav-link" href="#ourTeam">Team</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/memilihPraktikum"><a className="nav-link" href="hlmn-memilih_device.html">Materi</a></Link>
                </li>
                <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="#">
                        <span><i className="bi bi-cart"></i></span>
                        <sup><span className="badge badge-pill bg-danger">1</span></sup>
                    </a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="assets/img/carausel-1.jpg" className="rounded-circle me-2" height="25" width="25" alt="" loading="lazy" />
                    M. Nasrullah
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><Link to="/profile"><a className="dropdown-item" href="hmln-profile.html"><i className="bi bi-person"></i> Profile</a></Link></li>
                    <li><Link to="/logOut"><a className="dropdown-item" href="#"><i className="bi bi-box-arrow-right"></i> Keluar</a></Link></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/forum">
          <ForumUtama />
        </Route>
        <Route path="/ourTeam">
          <HomePage />
        </Route>
        <Route path="/memilihPraktikum">
          <MemilihPraktikum />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/logOut">
          <LandingPage />
        </Route>
      </Switch>
    </Router>                  


                    <LoginPage /> 


      <Footer />
    </div>
  );
}





// function App() {
//   return (  
//     <div className="App">
//         <Navbar />

//         <ProfilePage />


//         <Footer />
//     </div>
//   );
// }


export default App;
