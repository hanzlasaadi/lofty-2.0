import React from "react";
import NavBar from "../nav-bar/NavBar";
import "./Krachi.css";
import {Link} from 'react-router-dom';
import Footer from "../Home/Footer";
import Booking from "../Home/Booking";
const Krachi=()=>{
return(
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
                                    <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="450"
                                        allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>

                        <div class="shop-widget">
                            <div class="check-box-item">
                                <h5 class="shop-widget-title">Property Type</h5>
                                <div class="checkbox-container">
                                    <label class="containerss">Hotels
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">Hostels
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">Apartments
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">Apartment hotels
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">Guesthouses
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">Cottages
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
                                    <label class="containerss">Free Wi-Fi
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">Free parking
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">Swimming pool
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">Spa
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
                                    <label class="containerss">Air Conditioning
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">Balcony
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">Kitchen
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">TV
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
                                    <label class="containerss">Breakfast
                                        <input type="checkbox" checked="checked" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">Lunch
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">Dinner
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="containerss">All Inclusive
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
                                        <select class="defult-select-drowpown" id="color-dropdown">
                                            <option selected value="0">12</option>
                                            <option value="1">15</option>
                                            <option value="2">18</option>
                                            <option value="3">21</option>
                                            <option value="4">25</option>
                                        </select>
                                    </div>
                                    <div class="single-select two">
                                        <select class="defult-select-drowpown" id="eyes-dropdown">
                                            <option selected value="0">Default</option>
                                            <option value="1">Grid</option>
                                            <option value="2">Closed</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* //////////////////////// one Room*/}
                    <div class="row search-card-result">
                    <div class="col-md-5">
      {/* 👇️ react router link */}
      <Link to="/Booking">
        <img class="img-fluid" src="..\assets\images\blog\Lahore4.jpg" alt="Card image cap" />
    </Link>
</div>

                        <div class="col-md-7">
                            <span class="room-title">SUIT</span>
                            <p>
                                <span class="titl">Join over 1 Million of users. Dignissimos asspaneriores vitae velit
                                    veniam</span>
                            </p>
                            <p>
                                <span class="price">RS.4500.0/DAY</span>
                            </p>
                            <p>
                                <i class="bi bi-person custom-icon"></i><span class="number">4</span>
                                <i class="bi bi-tv custom-icon"></i><span class="number">2</span>
                            </p>
                            <div class="review">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                                <i class="bi bi-star"></i>
                            </div>
                        </div>

                    </div>
                    {/* -----------------------One room end------ */}
                    {/* ---------------------second Room start------- */}
                    <div class="row search-card-result">
                        <div class="col-md-5">
                            <img class="img-fluid" src="..\assets\images\blog\Lahore4.jpg" alt="Card image cap" />
                        </div>
                        <div class="col-md-7">
                            <span class="room-title">SUIT</span>
                            <p>
                                <span class="titl">Join over 1 Million of users. Dignissimos asspaneriores vitae velit
                                    veniam</span>
                            </p>
                            <p>
                                <span class="price">RS.4500.0/DAY</span>
                            </p>
                            <p>
                                <i class="bi bi-person custom-icon"></i><span class="number">4</span>
                                <i class="bi bi-tv custom-icon"></i><span class="number">2</span>
                            </p>
                            <div class="review">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                                <i class="bi bi-star"></i>
                            </div>
                        </div>

                    </div>
                    {/* --------------------Second room End-------------- */}
                    {/* ----------------------------Three Room strat------------- */}
                    <div class="row search-card-result">
                        <div class="col-md-5">
                            <img class="img-fluid" src="..\assets\images\blog\Lahore4.jpg" alt="Card image cap" />
                        </div>
                        <div class="col-md-7">
                            <span class="room-title">SUIT</span>
                            <p>
                                <span class="titl">Join over 1 Million of users. Dignissimos asspaneriores vitae velit
                                    veniam</span>
                            </p>
                            <p>
                                <span class="price">RS.4500.0/DAY</span>
                            </p>
                            <p>
                                <i class="bi bi-person custom-icon"></i><span class="number">4</span>
                                <i class="bi bi-tv custom-icon"></i><span class="number">2</span>
                            </p>
                            <div class="review">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                                <i class="bi bi-star"></i>
                            </div>
                        </div>

                    </div>
                    {/* --------------------three room end----------- */}

                </div>

                <div class="center-content">
                    <div aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
                                        <Footer/>
</>
)
}
export default Krachi;