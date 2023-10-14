import React from "react";
import "./HomeCss/Conform.css";
import NavBar from "../nav-bar/NavBar";
const Conformbook = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container bg-light mt-3 rounded">
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid smaller-image"
              src="..\assets\images\blog\Lahore4.jpg"
              alt="imgRoom"
            />
          </div>
          <div className="col-md-4 mt-3">
            <span className="room-title">SUIT</span>
            <p>
              <span className="titl">
                Join over 1 Million of users. Dignissimos asspaneriores vitae
                velit veniam
              </span>
            </p>
            <p>
              <span className="price">RS.4500.0/DAY</span>
            </p>
            <p>
              <i className="bi bi-person custom-icon"></i>
              <span className="number">4</span>
              <i className="bi bi-tv custom-icon"></i>
              <span className="number">2</span>
            </p>
            <div className="review">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
              <i className="bi bi-star"></i>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------ */}
      <div className="container">
        <h3 className="FACILITES locatoin">
          ABOUT HOTEL
          {/* <img  src="https://cdn-icons-png.flaticon.com/512/9800/9800512.png" /> */}
        </h3>
        <div className="bor row">
          <div className="col-lg-8 ">
            <h5 className="b">Hotel Name:</h5>
            <br />
            <h5 className="a">Location:</h5>
          </div>

          <div className="col-lg-4">
            <h5 className="b">Blue Swiss Hotel And Cafe</h5>
            <br />
            <h5 className="a">Pico Road,Pindl Rajputan,Model town,lho</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default Conformbook;
