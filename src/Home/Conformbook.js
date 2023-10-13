import React, { useState } from "react";
import "./HomeCss/Conform.css";
import NavBar from "../nav-bar/NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";
import { dummyRoomDetails } from "../assets/utils/dummyData";

const Conformbook = () => {
  const [roomDetails, setRoomDetails] = useState(dummyRoomDetails);
  const { roomId } = useParams();
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
      <div className="container bg-light mt-3 rounded">
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid smaller-image"
              src={roomDetails.roomImages[0]}
              alt="roomImg"
              loading="lazy"
            />
          </div>
          <div class="col-md-4 mt-3">
            <span class="room-title">{roomDetails.roomDetail.roomType}</span>
            <p>
              <span class="titl">&nbsp;</span>
            </p>
            <p>
              <span class="price">
                RS.{Math.round(roomDetails.roomDetail.price)}/DAY
              </span>
            </p>
            <p>
              <span class="titl">&nbsp;</span>
            </p>
            <p>
              <i class="bi bi-person custom-icon"></i>
              <span class="number">{roomDetails.roomDetail.noOfPerson}</span>
              <i class="bi bi-tv custom-icon"></i>
              <span class="number">{roomDetails.roomDetail.noOfBed}</span>
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
      </div>
      {/* ------------------------------ */}
      <div className="container">
        <h3 class="FACILITES locatoin">
          ABOUT HOTEL
          {/* <img  src="https://cdn-icons-png.flaticon.com/512/9800/9800512.png" /> */}
        </h3>
        <div class="bor row">
          <div class="col-lg-8 ">
            <h5 class="a">Hotel Name:</h5>
            <br />
            <h5 class="a">Location:</h5>
          </div>

          <div class="col-lg-4">
            <h5 class="b">{roomDetails.roomDetail.hotelName}</h5>
            <br />
            <h5 class="b">{roomDetails.roomDetail.location}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default Conformbook;
