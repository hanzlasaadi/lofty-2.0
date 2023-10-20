import React from "react";
import "./HomeCss/HeaderHome.css";
// import SearchField from "./search";
// import "./search.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";

const HeaderHome = ({ datePickerState, setDatePickerState }) => {
  const nav = useNavigate();
  const onDateChange = (startDate, endDate) => {
    console.log(startDate, "startDAte");
    console.log(endDate, "endDate");
  };
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="Pick a Date"
      // value={datePickerState ? `✅: ${datePickerState.day}` : ""}
      style={{
        textAlign: "center",
        // padding: "1rem 1.5rem",
        fontSize: "1rem",
        border: "1px solid #272a61",
        borderRadius: "100px",
        // boxShadow: "0 1.5rem 2rem grey",
        color: "#272a61",
        backgroundColor: "#fff",
        outline: "none",
        alignSelf: "center",
        width: "100%",
      }}
      className="my-custom-input-class" // a styling class
    />
  );
  const [showCal, setShowCal] = React.useState(false);

  const handleShowCal = () => {
    console.log("state: ", datePickerState);
    setShowCal(true);
  };
  const handleCloseCal = () => {
    setShowCal(false);
  };

  const handleKeyInput = (e) => {
    if (e.keyCode === 13) nav("/City/1");
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
          className="row height d-flex flex-wrap justify-content-center align-items-center w-100"
          onFocus={handleShowCal}
        >
          <div className="w-100">
            <div className="form w-100">
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
            </div>
          </div>
          {showCal ? (
            <div
              className="col-sm-6 w-100 d-flex flex-nowrap justify-content-between"
              // style={{ paddingLeft: "10rem" }}
            >
              {/* <DateRange
                editableDateInputs={true}
                onChange={(item) => setDatePickerState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={datePickerState}
              /> */}
              <DatePicker
                value={datePickerState}
                onChange={setDatePickerState}
                inputPlaceholder="Select a day"
                renderInput={renderCustomInput}
                colorPrimary="rgb(39, 42, 97)"
                colorPrimaryLight="rgba(39, 42, 97, 0.4)"
                shouldHighlightWeekends
              />
              {true ? (
                <i
                  className="fa fa-close align-self-center"
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={handleCloseCal}
                ></i>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      {/* <!-- ========== Search Bar============= --> */}
    </>
  );
};

export default HeaderHome;
