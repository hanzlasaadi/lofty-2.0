import React from "react";
import "./HomeCss/Conform.css";
import NavBar from "../nav-bar/NavBar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";
import { dummyBookRoomDetails } from "../assets/utils/dummyData";
import { differenceInDays, formatISO } from "date-fns";

const Conformbook = ({
  isLoggedIn,
  setIsLoggedIn,
  authToken,
  datePickerState,
}) => {
  const [bookRoomDetails, setBookRoomDetails] =
    React.useState(dummyBookRoomDetails);
  const { roomIdCusId } = useParams();
  const [roomId, cusId] = roomIdCusId.split(",");

  const differenceDays = differenceInDays(
    datePickerState[0].endDate,
    datePickerState[0].startDate
  );

  React.useEffect(() => {
    axios
      .request({
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        method: "GET",
        url: `${apiUrl}/api/Booking/BookRoomDetail?AdId=${roomId}`,
      })
      .then((res) => {
        console.log(res.data.result, " :dataResult");
        setBookRoomDetails(res.data.data);
      })
      .catch((err) => console.log("bookingConfirmError: ", err));
  }, []);

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div id="popup1" class="overlay">
        <div class="popup ">
          <div className="center-content">
            <img
              src="https://media.istockphoto.com/id/1425217376/vector/a-checkmark-that-looks-like-it-was-written-with-a-pen.jpg?s=612x612&w=0&k=20&c=ZJLNQ2Yjh5gmFJyDnLngB_Bju2Fb-LjvEa7YRUsjA_k="
              style={{ width: "100%" }}
              alt="logo"
            />
          </div>

          <div class="center-content ">
            <p>
              <h1 clas>BOOKING REQUEST</h1>
            </p>
          </div>
          <div className="center-content">
            <p>SUBMITTED SUCCESSFULLY!</p>
          </div>
          <div className="error-k text-center">
            <a href="#" className="btn btn-primary btn-lg mb-3 w-85  mt-5">
              My Bookings
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container multiselect-bar bg-light mt-3 rounded ml-4">
          <div className="row">
            <div className="col-md-4">
              <img
                className="img-fluid smaller-image"
                src={bookRoomDetails.roomImages[0]}
                alt="RoomImg"
              />
            </div>
            <div class="  col-md-4 mt-3">
              <span class="room-title">
                {bookRoomDetails.roomDetail.roomType}
              </span>
              <p>
                <span class="titl">&nbsp;</span>
              </p>
              <p>
                <span class="price">
                  RS.{Math.round(bookRoomDetails.roomDetail.price)}/DAY
                </span>
              </p>
              <p>
                <span class="titl">&nbsp;</span>
              </p>
              <p>
                <i class="bi bi-person custom-icon"></i>
                <span class="number">4</span>
                <i class="bi bi-tv custom-icon"></i>
                <span class="number">2</span>
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
              <h5 class="b">Hotel Name:</h5>
              <br />
              <h5 class="a">Location:</h5>
            </div>

            <div class="col-lg-4">
              <h5 class="b">{bookRoomDetails.roomDetail.hotelName}</h5>
              <br />
              <h5 class="a">{bookRoomDetails.roomDetail.location}</h5>
            </div>
          </div>
        </div>
        {/* ------------------------------- */}

        <div className="container">
          <h3 class="FACILITES locatoin">RESERVATION DETAIL</h3>
          <div class="bor row">
            <div class="col-lg-8 ">
              <h5 class="b">Person Name:</h5>
              <br />
              <h5 class="b">Email:</h5>
              <br />
              <h5 class="a">Check In:</h5>
              <br />
              <h5 class="a">Check Out:</h5>
            </div>

            <div class="col-lg-4">
              <h5 class="b">{localStorage.getItem("customerName")}</h5>
              <br />
              <h5 class="a">{localStorage.getItem("email")}</h5>
              <br />
              <h5 class="a">
                {formatISO(datePickerState[0].startDate, {
                  representation: "date",
                })}
              </h5>
              <br />
              <h5 class="a">
                {formatISO(datePickerState[0].endDate, {
                  representation: "date",
                })}
              </h5>
            </div>
          </div>
        </div>
        {/* ------------------------------------------- */}
        <div className="container  mt-3">
          <div class="row usman">
            <div class="col-lg-8 ">
              <h3 class="FACILITES locatoin">PRICE/DAY</h3>
            </div>
            <div className="col-lg-4 mt-5">
              {" "}
              <h5 class="a mb-4">
                RS.{Math.round(bookRoomDetails.roomDetail.price)}
              </h5>
            </div>
          </div>
        </div>
        <div className="container  mt-2">
          <div class="row usman">
            <div class="col-lg-8 ">
              <h3 class="FACILITES locatoin">DAYS</h3>
            </div>
            <div className="col-lg-4 mt-5">
              {" "}
              <h5 class="a mb-4">{differenceDays}</h5>
            </div>
          </div>
        </div>
        <div className="container mb-3 mt-2">
          <div class="row usman">
            <div class="col-lg-8 ">
              <h3 class="FACILITES locatoin">TOTAL</h3>
            </div>
            <div className="col-lg-4 mt-5">
              {" "}
              <h5 class="a mb-4">
                RS.
                {Math.round(bookRoomDetails.roomDetail.price * differenceDays)}
                .0
              </h5>
            </div>
          </div>
        </div>
        <div className="error-k text-center">
          <a
            type="button"
            href="#popup1"
            className="btn btn-primary btn-lg mb-3 w-25 "
          >
            CONFIRM
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Conformbook;
