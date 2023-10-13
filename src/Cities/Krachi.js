/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import NavBar from "../nav-bar/NavBar";
import "./Krachi.css";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import Booking from "../Home/Booking";
import axios from "axios";

const Krachi = () => {
  const [allRooms, setAllRooms] = useState([]);
  React.useEffect(() => {
    axios
      .get(
        `https://loftyrooms.cyberasol.com/api/api/Customer/GetAllRoomsCityWise?CityId=${1}
    `
      )
      .then((res) => {
        setAllRooms(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      <div class="shop-page pt-30 mb-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="shop-sidebar">
                <div class="card">
                  <div class="card-body">
                    <div class="map-container">
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
                </div>

                <div class="shop-widget">
                  <div class="check-box-item">
                    <h5 class="shop-widget-title">Property Type</h5>
                    <div class="checkbox-container">
                      <label class="containerss">
                        Hotels
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Hostels
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Apartments
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Apartment hotels
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Guesthouses
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Cottages
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="shop-widget">
                  <div class="check-box-item">
                    <h5 class="shop-widget-title">Facilities and Services</h5>
                    <div class="checkbox-container">
                      <label class="containerss">
                        Free Wi-Fi
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Free parking
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Swimming pool
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Spa
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="shop-widget">
                  <div class="check-box-item">
                    <h5 class="shop-widget-title">Accommodation Features</h5>
                    <div class="checkbox-container">
                      <label class="containerss">
                        Air Conditioning
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Balcony
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Kitchen
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        TV
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="shop-widget">
                  <div class="check-box-item">
                    <h5 class="shop-widget-title">Meals</h5>
                    <div class="checkbox-container">
                      <label class="containerss">
                        Breakfast
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Lunch
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        Dinner
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="containerss">
                        All Inclusive
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row mb-50">
                <div class="col-lg-12">
                  <div class="multiselect-bar">
                    <h6>LOFTYROOMS</h6>
                    <div class="multiselect-area">
                      <div class="single-select">
                        <span>Show</span>
                        <select
                          class="defult-select-drowpown"
                          id="color-dropdown"
                        >
                          <option selected value="0">
                            12
                          </option>
                          <option value="1">15</option>
                          <option value="2">18</option>
                          <option value="3">21</option>
                          <option value="4">25</option>
                        </select>
                      </div>
                      <div class="single-select two">
                        <select
                          class="defult-select-drowpown"
                          id="eyes-dropdown"
                        >
                          <option selected value="0">
                            Default
                          </option>
                          <option value="1">Grid</option>
                          <option value="2">Closed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* //////////////////////// one Room*/}
              {/* hanzla */}
              {allRooms.map((room) => {
                return (
                  <div class="row search-card-result rounded-4" key={room.adId}>
                    <div class="col-md-5">
                      {/* 👇️ react router link */}
                      <Link to="/Booking">
                        <img
                          class="img-fluid rounded-4"
                          src={`${room.adImage1}`}
                          alt="Card image cap"
                        />
                      </Link>
                    </div>

                    <div class="col-md-7">
                      <span class="room-title">{room.roomType}</span>
                      <p>
                        <span class="titl">&nbsp;</span>
                      </p>
                      <p>
                        <span class="price">
                          RS.{Math.round(room.price)}/DAY
                        </span>
                      </p>
                      <p>
                        <span class="titl">&nbsp;</span>
                      </p>
                      <p>
                        <i class="bi bi-person custom-icon"></i>
                        <span class="number">{room.noOfPerson}</span>
                        <i class="bi bi-tv custom-icon"></i>
                        <span class="number">{room.noOfBed}</span>
                      </p>
                      {/* <div class="review">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                        <i class="bi bi-star"></i>
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </div>

            <div class="center-content">
              <div aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
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
