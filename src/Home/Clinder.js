import React from "react";
import "./HomeCss/Clinder.css";
import NavBar from "../nav-bar/NavBar";
import Footer from "./Footer";
// import Conformbook from "./Conformbook";
import { Link, useParams } from "react-router-dom";
const Clinder = () => {
  const { roomId } = useParams();
  console.log(roomId);
  return (
    <>
      <NavBar />
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
            <div class="form-group">
              <input
                id="dp1"
                type="text"
                class="form-control clickable input-md"
                // id="DtChkIn"
                placeholder="&#xf133;  Check-In"
              />
            </div>
          </div>
          <div className="col-lg-4 text-center text-black">to</div>
          <div className="col-lg-4">
            <div class="form-group">
              <input
                id="dp2"
                type="text"
                class="form-control clickable input-md"
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
          <div class="badge  text-wrap">
            All Booking will have Standard Checkin and Checkout time 12PM . 12PM
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="error-k text-center">
          <Link to={`/Conformbook/${roomId}`}>
            <button type="button" class="btn btn-primary btn-lg">
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
