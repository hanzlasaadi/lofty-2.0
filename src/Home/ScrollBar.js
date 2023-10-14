import React, { useRef, useEffect } from "react";
import "./HomeCss/ScrollBar.css";
import { useNavigate } from "react-router-dom";
const ScrollBar = () => {
  const navigate = useNavigate();
  const listRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      // if (listRef.current) {
      //   const scrollOffset =
      //     window.pageYOffset || document.documentElement.scrollTop;
      //   listRef.current.scrollTo({
      //     top: 0,
      //     left: scrollOffset,
      //     behavior: "smooth",
      //   });
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const moveLeft = () => {
    console.log("Comment---");
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const moveRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: "smooth",
      });
    }
  };
  const handl = () => {
    navigate("Lahore");
  };
  const hand = () => {
    navigate("Karachi");
  };

  return (
    <>
      {/* <!-- ========== Scroll Bar============= --> */}
      <div>
        <br />
        <div
          className="list-container d-flex align-items-center justify-content-center"
          ref={listRef}
        >
          <ul className="horizontal-list d-flex flex-wrap gap-3 justify-content-center">
            <li onClick={handl}> Lahore </li>
            <li>Islamabad</li>
            <li onClick={hand}>Karachi</li>
            <li>Faisalabad</li>
            <li>Rawalpindi</li>
            <li>Gujranwala</li>
            <li>Peshawar</li>
            <li>Multan</li>
            <li>Hyderabad</li>
            <li>Quetta</li>
            <li>Bahawalpur</li>
            <li>Sargodha</li>
            <li>Sialkot</li>
            <li>Gujrat</li>
          </ul>
        </div>
        <div className="ScrolingArrow">
          <div className="essential-items-area mb-120">
            <div className="section-title3"></div>
            <div className="slider-btn-wrap">
              {/* <div className="slider-btn prev-btn-12">
                <i
                  onClick={moveLeft}
                  className="bi bi-arrow-left"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <div className="slider-btn next-btn-12">
                <i
                  onClick={moveRight}
                  className="bi bi-arrow-right"
                  style={{ cursor: "pointer" }}
                ></i>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ========== Scroll Bar============= --> */}
    </>
  );
};

export default ScrollBar;
