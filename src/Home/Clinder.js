import React from "react";
import "./HomeCss/Clinder.css";
import NavBar from "../nav-bar/NavBar";
import Footer from "./Footer";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

// import Conformbook from "./Conformbook";
import { Link, useParams } from "react-router-dom";
const Clinder = ({
  isLoggedIn,
  setIsLoggedIn,
  laterDatePickerState,
  setLaterDatePickerState,
  datePickerState,
}) => {
  React.useEffect(() => {
    setLaterDatePickerState([
      {
        startDate: new Date(
          datePickerState.from.year,
          datePickerState.from.month,
          datePickerState.from.day
        ),
        endDate: new Date(
          datePickerState.to.year,
          datePickerState.to.month,
          datePickerState.to.day
        ),
        key: "selection",
      },
    ]);
  }, []);
  const { roomId } = useParams();
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="container">
        <div className="row br flex">
          <br />
          <br />
          {/* <div className="row">
            <div className="col-lg-12">
              <h5>DATE</h5>
            </div>
            <br />
            <br />
            <br />
          </div> */}
          <div className="col-lg-4 align-self-center">
            <div className="form-group">
              {/* <input
                id="dp1"
                type="text"
                className="form-control clickable input-md"
                // id="DtChkIn"
                placeholder="&#xf133;  Check-In"
              /> */}
              <DateRangePicker
                onChange={(item) => setLaterDatePickerState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={laterDatePickerState}
                direction="horizontal"
              />
            </div>
          </div>
          {/* <div className="col-lg-4 text-center text-black">to</div> */}
          {/* <div className="col-lg-4">
            <div className="form-group">
              <input
                id="dp2"
                type="text"
                className="form-control clickable input-md"
                // id="DtChkOut"
                placeholder="&#xf133;  Check-Out"
              />
            </div>
          </div> */}
        </div>
        <br />
        <br />
        <div className="error-h text-center">
          <h2>Note</h2>
          <div className="badge  text-wrap">
            All Booking will have Standard Checkin and Checkout time 12PM . 12PM
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="error-k text-center">
          <Link to={`/Conformbook/${roomId}`}>
            <button type="button" className="btn btn-primary btn-lg">
              CONFIRM
            </button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
export default Clinder;
