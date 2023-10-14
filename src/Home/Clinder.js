import React from "react";
import "./HomeCss/Clinder.css";
import NavBar from "../nav-bar/NavBar";
import Footer from "./Footer";
// import Conformbook from "./Conformbook";
import { Link, useParams } from "react-router-dom";
<<<<<<< HEAD
const Clinder = () => {
=======
const Clinder = ({ isLoggedIn, setIsLoggedIn }) => {
>>>>>>> 1ec2750924e323d6ee6da6970d199862f7b6d38a
  const { roomId } = useParams();
  console.log(roomId);
  return (
    <>
<<<<<<< HEAD
      <NavBar />
=======
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
>>>>>>> 1ec2750924e323d6ee6da6970d199862f7b6d38a
      <div className="container">
        <div className="row br">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <h5>DATE</h5>
            </div>
            <br />
            <br />
            <br />
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <input
                id="dp1"
                type="text"
                className="form-control clickable input-md"
                // id="DtChkIn"
                placeholder="&#xf133;  Check-In"
              />
            </div>
          </div>
          <div className="col-lg-4 text-center text-black">to</div>
          <div className="col-lg-4">
            <div className="form-group">
              <input
                id="dp2"
                type="text"
                className="form-control clickable input-md"
                // id="DtChkOut"
                placeholder="&#xf133;  Check-Out"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="error-h text-center">
          <h2>Note</h2>
          <div className="badge  text-wrap">
            All Booking will have Standard Checkin and Checkout time 12PM . 12PM
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="error-k text-center">
          <Link to={`/Conformbook/${roomId}`}>
            <button type="button" className="btn btn-primary btn-lg">
              CONFIRM
            </button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
export default Clinder;
