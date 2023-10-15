import React from "react";
import "./HomeCss/veiw.css";
import NavBar from "../nav-bar/NavBar";
const Veiw = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container">
        <div
          className="row   h-75 text-white rounded"
          style={{ background: "#272a61" }}
        >
          <div className="col-lg-8 mt-3">
            <p class="text-white">Hotel Name:</p>
          </div>
          <div className="col-lg-4 mb-5 mt-3">
            <h4 className="text-white">Maruleena Hotel</h4>
          </div>
          <div className="row  ">
            <div className="col-lg-8">
              <p class="text-white">Email:</p>
            </div>
            <div className="col-lg-4 mb-4">
              <h4 className="text-white">Cfayyaziftikhar@gmail.com</h4>
            </div>
          </div>
        </div>

        <ul class="tabs container center-content">
          <li class="tab">
            {/* -----------------------------room page---- */}
            <input type="radio" name="tabs" checked="checked" id="tab1" />
            <label for="tab1">Rooms</label>
            <div id="tab-content1" class="content">
              <div className="container bg-light mt-3 rounded">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      className="img-fluid smaller-image mt-2"
                      src="..\assets\images\blog\Lahore4.jpg"
                      alt="roomImg"
                    />
                  </div>
                  <div className="col-md-4 mt-3">
                    <span className="room-title">SUIT</span>
                    <p>
                      <span className="titl">
                        Join over 1 Million of users. Dignissimos asspaneriores
                        vitae velit veniam
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
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* ------------------------------------------ */}
          <li class="tab">
            <input type="radio" name="tabs" id="tab2" />
            <label for="tab2">Reviews</label>
            <div id="tab-content2" class="content center-content">
              <img
                src="https://www.shutterstock.com/image-illustration/3d-shiny-colorful-no-text-260nw-77161669.jpg"
                alt="reviewsImg"
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Veiw;
