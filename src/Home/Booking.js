import React, { useState } from "react";
import "./HomeCss/Booking.css";
import Footer from "./Footer";
import NavBar from "../nav-bar/NavBar";
// import Clinder from "./Clinder";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";
import { dummyRoomDetails } from "../assets/utils/dummyData";

const Booking = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log(isLoggedIn, "hello true or false");
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(dummyRoomDetails);
  React.useEffect(() => {
    axios
      .get(`${apiUrl}/api/Customer/GetRoomDeatil?AdID=${roomId}`)
      .then((res) => {
        console.log(res.data.data);
        setRoomDetails(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="error-wrapper">
              <div class="error-img">
                <img
                  class="img-fluid rounded-4"
                  src={roomDetails.roomImages[0]}
                  loading="lazy"
                  alt="Room Img"
                />
                <div class="icon-img">
                  <a href="abc" class="link">
                    <svg
                      width="30"
                      height="20"
                      viewBox="0 0 14 13"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon-circle"
                    >
                      <path d="M12.4147 1.51371C11.0037 0.302997 8.92573 0.534835 7.61736 1.87434L7.12993 2.38954L6.61684 1.87434C5.33413 0.534835 3.23047 0.302997 1.81948 1.51371C0.203258 2.90473 0.126295 5.37767 1.56294 6.87174L6.53988 12.0237C6.84773 12.3586 7.38647 12.3586 7.69433 12.0237L12.6713 6.87174C14.1079 5.37767 14.0309 2.90473 12.4147 1.51371Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" mt-1">
          <h2 class="Deluxe">{roomDetails.roomDetail.roomType}</h2>
          <h3 class="FACILITES">FACILITES</h3>
          <div class="row-ico d-flex">
            {roomDetails.facilityList.map((fac, i) => {
              return (
                <div class="ico c col-lg-2" key={i}>
                  <img
                    class="u"
                    src={fac.image}
                    alt={fac.facilityName}
                    loading="lazy"
                  />
                  <span class="number">{fac.facilityName}</span>
                </div>
              );
            })}
          </div>
          <h3 class="FACILITES">GALLERY</h3>
          <div class="row gutters justify-content-center">
            {roomDetails.roomImages.slice(1).map((img, i) => {
              return (
                <div class="col-lg-4 col-md-4 col-xs-6 thumb" key={i}>
                  <a href={img} class="fancybox" rel="ligthbox">
                    <img
                      src={img}
                      class="zoom img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </div>
              );
            })}
          </div>
          <div className="container">
            <h3 class="FACILITES locatoin">
              ABOUT HOTEL
              <img src="https://cdn-icons-png.flaticon.com/512/9800/9800512.png" />
            </h3>
            <div class="bor">
              <div class="col">
                <h5 class="b">Hotel Name:</h5>
                <br />
                <h5 class="a">{roomDetails.roomDetail.hotelName}</h5>
              </div>
              <div class="col">
                <h5 class="b">Location:</h5>
                <br />
                <h5 class="a">{roomDetails.roomDetail.location}</h5>
              </div>
              <div class="col">
                <h5 class="b">Room Number:</h5>
                <br />
                <h5 class="a">{roomDetails.roomDetail.roomNo}</h5>
              </div>
            </div>
          </div>
          <br />
          <div class="error">
            <button type="button" class="btn btn-primary btn-lg ">
              View Hotel Detail <i class="bi bi-chevron-right"></i>
            </button>
          </div>
          <h3 class="FACILITES locatoin">DESCRIPTION</h3>
          <div class="best">{roomDetails.roomDetail.description}</div>

          <div class="err">
            <Link to={`/Clinder/${roomDetails.roomDetail.adId}`}>
              <button type="button" class="btn btn-primary btn-lg">
                <span class="">
                  Rs.{Math.round(roomDetails.roomDetail.price)}/
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BOOK NOW{" "}
                <i class="bi bi-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};
export default Booking;
