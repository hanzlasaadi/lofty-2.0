/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import NavBar from "../nav-bar/NavBar";
import "./Krachi.css";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
// import Booking from "../Home/Booking";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";

const Krachi = () => {
  const [allRooms, setAllRooms] = useState([]);
  React.useEffect(() => {
    axios
      .get(`${apiUrl}/api/Customer/GetAllRoomsCityWise?CityId=${1}`)
      .then((res) => {
        setAllRooms(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      <div className="shop-page pt-30 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="shop-sidebar">
                {/* <div className="card">
                  <div className="card-body">
                    <div className="map-container">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div> */}

                <div className="shop-widget">
                  <div className="check-box-item">
                    <h5 className="shop-widget-title">Property Type</h5>
                    <div className="checkbox-container">
                      <label className="containerss">
                        Hotels
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Hostels
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Apartments
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Apartment hotels
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Guesthouses
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Cottages
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="shop-widget">
                  <div className="check-box-item">
                    <h5 className="shop-widget-title">
                      Facilities and Services
                    </h5>
                    <div className="checkbox-container">
                      <label className="containerss">
                        Free Wi-Fi
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Free parking
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Swimming pool
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Spa
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="shop-widget">
                  <div className="check-box-item">
                    <h5 className="shop-widget-title">
                      Accommodation Features
                    </h5>
                    <div className="checkbox-container">
                      <label className="containerss">
                        Air Conditioning
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Balcony
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Kitchen
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        TV
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="shop-widget">
                  <div className="check-box-item">
                    <h5 className="shop-widget-title">Meals</h5>
                    <div className="checkbox-container">
                      <label className="containerss">
                        Breakfast
                        <input type="checkbox" checked="checked" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Lunch
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        Dinner
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="containerss">
                        All Inclusive
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          

            <div className="center-content">
              <div aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Krachi;
