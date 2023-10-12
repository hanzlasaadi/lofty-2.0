import React from "react";
import "./HomeCss/HeaderHome.css";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
// import SearchField from "./search";
import "./search.css";

const HeaderHome = () => {
  const onDateChange = (startDate, endDate) => {
    console.log(startDate, "startDAte");
    console.log(endDate, "endDate");
  };
  return (
    <>
      {/* <!-- ========== Search Bar============= --> */}

      {/* <video style={{ width: '100%', maxHeight: '100%' }} autoPlay muted loop controls preload="auto">
  <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video> */}

      <div id="content">
        <ul class="slideshow">
          <li>
            <span></span>
          </li>
          <li>
            <span>2</span>
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

        <div class="row height d-flex justify-content-center align-items-center">
          <div class="col-md-8 col-sm-6">
            <div class="form">
              <i class="fa fa-search"></i>
              <input
                type="text"
                class="form-control form-input"
                placeholder="Search by city, hotel or neighbourhood"
              />
              <RangeDatePicker
                startDate={new Date(2020, 0, 15)}
                endDate={new Date(2020, 1, 1)}
                minDate={new Date(1900, 0, 1)}
                maxDate={new Date(2100, 0, 1)}
                onChange={(startDate, endDate) =>
                  onDateChange(startDate, endDate)
                }
              />
              {/* <span class="left-pan">
                <i class="bi bi-filter"></i>
              </span> */}
              {/* <SearchField /> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ========== Search Bar============= --> */}
    </>
  );
};

export default HeaderHome;
