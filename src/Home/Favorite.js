import React from "react";
import NavBar from "../nav-bar/NavBar";
const Favorat = () => {
  return (
    <>
      <NavBar />
      <div className="container bg-light mt-3 rounded">
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid smaller-image"
              src="..\assets\images\blog\Lahore4.jpg"
              alt="Card image cap"
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
    </>
  );
};
export default Favorat;
