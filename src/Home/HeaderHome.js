import React from "react";
import "./HomeCss/HeaderHome.css";
// import SearchField from "./search";
// import "./search.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

const HeaderHome = ({ datePickerState, setDatePickerState }) => {
  const nav = useNavigate();
  const onDateChange = (startDate, endDate) => {
    console.log(startDate, "startDAte");
    console.log(endDate, "endDate");
  };
  const [showCal, setShowCal] = React.useState(false);

  const handleShowCal = () => {
    setShowCal(true);
  };
  const handleCloseCal = () => {
    setShowCal(false);
  };

  const handleKeyInput = (e) => {
    if (e.keyCode === 13) nav("/Karachi");
  };

  return (
    <>
      {/* <!-- ========== Search Bar============= --> */}

      {/* <video style={{ width: '100%', maxHeight: '100%' }} autoPlay muted loop controls preload="auto">
  <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video> */}

      <div id="content">
        <ul className="slideshow" style={{ marginBottom: "16rem" }}>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>

        <div
          className="row height d-flex justify-content-center align-items-center"
          onFocus={handleShowCal}
        >
          <div className="col-md-8 col-sm-6">
            <div className="form">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search by city, hotel or neighbourhood"
                onKeyUp={handleKeyInput}
              />
              {/* <span className="left-pan">
                <i className="bi bi-filter"></i>
              </span> */}
              {/* <SearchField /> */}
              {showCal ? (
                <i className="fa fa-close" onClick={handleCloseCal}></i>
              ) : null}
            </div>
          </div>
          {showCal ? (
            <div>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDatePickerState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={datePickerState}
              />
            </div>
          ) : null}
        </div>
      </div>

      {/* <!-- ========== Search Bar============= --> */}
    </>
  );
};

export default HeaderHome;
