import './leaderboard.css';
import '../../index.css';
import React from 'react'
import pic1 from '../../page/forum(utama)/pic-1.jpg'
import pic2 from '../../page/forum(utama)/pic-2.jpg'
import pic3 from '../../page/forum(utama)/pic-3.jpg'
import pic4 from '../../page/forum(utama)/pic-4.jpg'
import pic5 from '../../page/forum(utama)/pic-5.jpg'
import pic6 from '../../page/forum(utama)/pic-6.jpg'

function Leaderboard() {
    return (
        <div className="col bg-white py-4 shadow leaderboard">
            <h2 className="display-5 fw-bold lh-1 mb-3 text-center">Leaderboard</h2>
            <div className="row text-center">
                <div className="col">
                    <h3 className="fw-bold display-4">2</h3>
                    <img src={pic6} alt="" width="90px" height="90px" className="rounded-circle border border-white border-5" />
                    <h3 className="fs-4">Nurul</h3>
                    <h4 className="bg-poin rounded-pill mx-3 mt-1">828 Poin</h4>
                </div>
                <div className="col mt-4">
                    <h3 className="fw-bold display-4">1</h3>
                    <img src={pic2} alt="" width="90px" height="90px" className="rounded-circle border border-white border-5" />
                    <h3 className="fs-4">M. Nasrullah</h3>
                    <h4 className="bg-poin rounded-pill mx-3 mt-1">830 Poin</h4>
                </div>
                <div className="col">
                    <h3 className="fw-bold display-4">3</h3>
                    <img src={pic3} alt="" width="90px" height="90px" className="rounded-circle border border-white border-5" />
                    <h3 className="fs-4">Naning</h3>
                    <h4 className="bg-poin rounded-pill mx-3 mt-1">825 Poin</h4>
                </div>
            </div>
            <div className="col mx-4 mt-5 py-4 top-ten">
                <div className="d-flex align-items-center rounded-pill mx-1 mx-sm-5 my-2 px-3 py-1">
                    <h4>#04</h4>
                    <img src={pic1} alt="" width="25px" height="25px" className="rounded-circle mx-2" />
                    <h4>Keyer</h4>
                    <div className="bg-poin ms-auto px-sm-4 px-1 rounded-pill text-center">
                        <h4>800 Poin</h4>
                    </div>
                </div>
                <div className="d-flex align-items-center rounded-pill mx-1 mx-sm-5 my-2 px-3 py-1">
                    <h4>#05</h4>
                    <img src={pic2} alt="" width="25px" height="25px" className="rounded-circle mx-2" />
                    <h4>Sri Malay</h4>
                    <div className="bg-poin ms-auto px-sm-4 px-1 rounded-pill text-center">
                        <h4>795 Poin</h4>
                    </div>
                </div>
                <div className="d-flex align-items-center rounded-pill mx-1 mx-sm-5 my-2 px-3 py-1">
                    <h4>#06</h4>
                    <img src={pic3} alt="" width="25px" height="25px" className="rounded-circle mx-2" />
                    <h4>Ryan W.</h4>
                    <div className="bg-poin ms-auto px-sm-4 px-1 rounded-pill text-center">
                        <h4>790 Poin</h4>
                    </div>
                </div>
                <div className="d-flex align-items-center rounded-pill mx-1 mx-sm-5 my-2 px-3 py-1">
                    <h4>#07</h4>
                    <img src={pic4} alt="" width="25px" height="25px" className="rounded-circle mx-2" />
                    <h4>Lucky F.S.</h4>
                    <div className="bg-poin ms-auto px-sm-4 px-1 rounded-pill text-center">
                        <h4>785 Poin</h4>
                    </div>
                </div>
                <div className="d-flex align-items-center rounded-pill mx-1 mx-sm-5 my-2 px-3 py-1">
                    <h4>#08</h4>
                    <img src={pic5} alt="" width="25px" height="25px" className="rounded-circle mx-2" />
                    <h4>Nanda Ayu</h4>
                    <div className="bg-poin ms-auto px-sm-4 px-1 rounded-pill text-center">
                        <h4>780 Poin</h4>
                    </div>
                </div>
                <div className="d-flex align-items-center rounded-pill mx-1 mx-sm-5 my-2 px-3 py-1">
                    <h4>#09</h4>
                    <img src={pic6} alt="" width="25px" height="25px" className="rounded-circle mx-2" />
                    <h4>Agus</h4>
                    <div className="bg-poin ms-auto px-sm-4 px-1 rounded-pill text-center">
                        <h4>775 Poin</h4>
                    </div>
                </div>
                <div className="d-flex align-items-center rounded-pill mx-1 mx-sm-5 my-2 px-3 py-1">
                    <h4>#10</h4>
                    <img src={pic1} alt="" width="25px" height="25px" className="rounded-circle mx-2" />
                    <h4>Muslihat</h4>
                    <div className="bg-poin ms-auto px-sm-4 px-1 rounded-pill text-center">
                        <h4>770 Poin</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard
