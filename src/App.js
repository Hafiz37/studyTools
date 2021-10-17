import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import Footer from "./komponen/footer/footer"

// halaman
import HomePage from "./page/home/home"
import LoginPage from "./page/login-page/login"
import ForumUtama from "./page/forum(utama)/forum(utama)"
import DetailPertanyaan from "./page/forum(detail-pertanyaan)/detail-pertanyaan";
import JwbPertanyaanForum from "./page/forum(jwb-pertanyaan)/jwb-pertanyaan";
import TanyaPertanyaan from './page/forum(tanya-pertanyaan)/tanya-pertanyaan'
import ProfilePage from "./page/profile-page/profile-page"
import LandingPage from "./page/landing-page/landing-page"
import MemilihPraktikum from "./page/memilih-praktikum/memilih-praktikum"
import DetailPraktikum from "./page/detailPraktikum-memilihMateri/detail-praktikum";
// import ModulPraktikumA5Step1 from "./page/modul-praktikum/SamsungA5/modulStep1";
import Pendahuluan from "./page/modul-praktikum/SamsungA5/pendahuluan";
import ModulPraktikumA5Step1 from "./page/modul-praktikum/SamsungA5/modulStep1";
import ModulPraktikumA5Step1old from "./page/modul-praktikum/SamsungA5/modulStep1(old)";
import ModulPraktikumA5Step2 from "./page/modul-praktikum/SamsungA5/modulStep2";
import ModulPraktikumA5Step3 from "./page/modul-praktikum/SamsungA5/modulStep3";
import ModulPraktikumA5Step4 from "./page/modul-praktikum/SamsungA5/modulStep4";
import ModulPraktikumA5Step5 from "./page/modul-praktikum/SamsungA5/modulStep5";
import ModulPraktikumA5Step6 from "./page/modul-praktikum/SamsungA5/modulStep6";
import ModulPraktikumA5Step7 from "./page/modul-praktikum/SamsungA5/modulStep7";
import ModulPraktikumA5Step8 from "./page/modul-praktikum/SamsungA5/modulStep8";
import ModulPraktikumA5Step9 from "./page/modul-praktikum/SamsungA5/modulStep9";
import ModulPraktikumA5Step10 from "./page/modul-praktikum/SamsungA5/modulStep10";
import ModulPraktikumA5Step11a from "./page/modul-praktikum/SamsungA5/modulStep11a";
import ModulPraktikumA5Step11b from "./page/modul-praktikum/SamsungA5/modulStep11b";
import ModulPraktikumA5Step11c from "./page/modul-praktikum/SamsungA5/modulStep11c";
import ModulPraktikumA5Step11d from "./page/modul-praktikum/SamsungA5/modulStep11d";
import ModulPraktikumA5Step12 from "./page/modul-praktikum/SamsungA5/modulStep12";
import ModulPraktikumA5Step13 from "./page/modul-praktikum/SamsungA5/modulStep13";
import ModulPraktikumA5Step14 from "./page/modul-praktikum/SamsungA5/modulStep14";
import ModulPraktikumA5Step15 from "./page/modul-praktikum/SamsungA5/modulStep15";
import ModulPraktikumA5Step16 from "./page/modul-praktikum/SamsungA5/modulStep16";
import ModulPraktikumA5Step17 from "./page/modul-praktikum/SamsungA5/modulStep17";
import ModulPraktikumA5Step18 from "./page/modul-praktikum/SamsungA5/modulStep18";
import ModulPraktikumA5Step19 from "./page/modul-praktikum/SamsungA5/modulStep19";
import ModulPraktikumA5Step20 from "./page/modul-praktikum/SamsungA5/modulStep20";
import ModulPraktikumA5Step21 from "./page/modul-praktikum/SamsungA5/modulStep21";
import ModulPraktikumA5Step22 from "./page/modul-praktikum/SamsungA5/modulStep22";
import ModulPraktikumA5Step23 from "./page/modul-praktikum/SamsungA5/modulStep23";
import ModulPraktikumA5Step24 from "./page/modul-praktikum/SamsungA5/modulStep24";
import ModulPraktikumA5Step25 from "./page/modul-praktikum/SamsungA5/modulStep25";
import ModulPraktikumA5Step26 from "./page/modul-praktikum/SamsungA5/modulStep26";
import ModulPraktikumA5Step27 from "./page/modul-praktikum/SamsungA5/modulStep27";
import Kursus from "./page/kursus/kursus";
import EditProfile from "./page/edit-profile/editProfile";
import SignUp from "./page/signUp-page/signUp";
import DataPribadi from "./page/form-dataPribadi/dataPribadi";
import Home from "./page/home/home";


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/forum/DetailPertanyaan/Jawab">
            <JwbPertanyaanForum />
          </Route>
          <Route path="/forum/DetailPertanyaan">
            <DetailPertanyaan />
          </Route>
          <Route path="/forum/TanyaPertanyaan">
            <TanyaPertanyaan />
          </Route>
          <Route path="/memilihPraktikum/DetailPraktikum">
            <DetailPraktikum />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/signup">
            <SignUp />
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
          <Route path="/Login">
            <LoginPage />
          </Route>
          {/* // -- modul pengerjaan */}
          <Route path="/Pendahuluan">
            <Pendahuluan />
          </Route>
          <Route path="/ModulA5step1">
            <ModulPraktikumA5Step1 />
          </Route>
          <Route path="/ModulA5step1old">
            <ModulPraktikumA5Step1old />
          </Route>
          <Route path="/ModulA5step2">
            <ModulPraktikumA5Step2 />
          </Route>
          <Route path="/ModulA5step3">
            <ModulPraktikumA5Step3 />
          </Route>
          <Route path="/ModulA5step4">
            <ModulPraktikumA5Step4 />
          </Route>
          <Route path="/ModulA5step5">
            <ModulPraktikumA5Step5 />
          </Route>
          <Route path="/ModulA5step6">
            <ModulPraktikumA5Step6 />
          </Route>
          <Route path="/ModulA5step7">
            <ModulPraktikumA5Step7 />
          </Route>
          <Route path="/ModulA5step8">
            <ModulPraktikumA5Step8 />
          </Route>
          <Route path="/ModulA5step9">
            <ModulPraktikumA5Step9 />
          </Route>
          <Route path="/ModulA5step10">
            <ModulPraktikumA5Step10 />
          </Route>
          <Route path="/ModulA5step11a">
            <ModulPraktikumA5Step11a />
          </Route>
          <Route path="/ModulA5step11b">
            <ModulPraktikumA5Step11b />
          </Route>
          <Route path="/ModulA5step11c">
            <ModulPraktikumA5Step11c />
          </Route>
          <Route path="/ModulA5step11d">
            <ModulPraktikumA5Step11d />
          </Route>
          <Route path="/ModulA5step12">
            <ModulPraktikumA5Step12 />
          </Route>
          <Route path="/ModulA5step13">
            <ModulPraktikumA5Step13 />
          </Route>
          <Route path="/ModulA5step13">
            <ModulPraktikumA5Step13 />
          </Route>
          <Route path="/ModulA5step14">
            <ModulPraktikumA5Step14 />
          </Route>
          <Route path="/ModulA5step15">
            <ModulPraktikumA5Step15 />
          </Route>
          <Route path="/ModulA5step16">
            <ModulPraktikumA5Step16 />
          </Route>
          <Route path="/ModulA5step17">
            <ModulPraktikumA5Step17 />
          </Route>
          <Route path="/ModulA5step18">
            <ModulPraktikumA5Step18 />
          </Route>
          <Route path="/ModulA5step19">
            <ModulPraktikumA5Step19 />
          </Route>
          <Route path="/ModulA5step20">
            <ModulPraktikumA5Step20 />
          </Route>
          <Route path="/ModulA5step21">
            <ModulPraktikumA5Step21 />
          </Route>
          <Route path="/ModulA5step22">
            <ModulPraktikumA5Step22 />
          </Route>
          <Route path="/ModulA5step23">
            <ModulPraktikumA5Step23 />
          </Route>
          <Route path="/ModulA5step24">
            <ModulPraktikumA5Step24 />
          </Route>
          <Route path="/ModulA5step25">
            <ModulPraktikumA5Step25 />
          </Route>
          <Route path="/ModulA5step26">
            <ModulPraktikumA5Step26 />
          </Route>
          <Route path="/ModulA5step27">
            <ModulPraktikumA5Step27 />
          </Route>
          {/* // ------------------ */}
          <Route path="/Jawab">
            <JwbPertanyaanForum />
          </Route>
          <Route path="/edit-profile">
            <EditProfile />
          </Route>
          <Route path="/dataPribadi">
            <DataPribadi />
          </Route>
          <Route path="/DetailPertanyaan">
            <DetailPertanyaan />
          </Route>
          <Route path="/Kursus">
            <Kursus />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}


export default App;
