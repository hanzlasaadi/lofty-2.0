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
          <div className="col-md-4 mt-3">
            <span className="room-title">
              {roomDetails.roomDetail.roomType}
            </span>
            <p>
              <span className="titl">&nbsp;</span>
            </p>
            <p>
              <span className="price">
                RS.{Math.round(roomDetails.roomDetail.price)}/DAY
              </span>
            </p>
            <p>
              <span className="titl">&nbsp;</span>
            </p>
            <p>
              <i className="bi bi-person custom-icon"></i>
              <span className="number">
                {roomDetails.roomDetail.noOfPerson}
              </span>
              <i className="bi bi-tv custom-icon"></i>
              <span className="number">{roomDetails.roomDetail.noOfBed}</span>
            </p>
            {/* <div className="review">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
              <i className="bi bi-star"></i>
            </div> */}
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
            <h5 className="a">Hotel Name:</h5>
            <br />
            <h5 className="a">Location:</h5>
          </div>

          <div className="col-lg-4">
            <h5 className="b">{roomDetails.roomDetail.hotelName}</h5>
            <br />
            <h5 className="b">{roomDetails.roomDetail.location}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default Conformbook;
