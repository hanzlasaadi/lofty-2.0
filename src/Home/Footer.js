import React from "react";
import "./HomeCss/footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const nav = useNavigate();
  return (
    <>
      <footer className="style2">
        <div className="container footer">
          <div className="footer-sec1">
            <div className="first-div">
              <img width={80} height={50} src="./logo.png" alt="Logo" />
            </div>
            <div className="second-div">
              <p>Pakistan's leading chain of hotels and rooms.</p>
            </div>
            <div className="third-div">
              <p style={{ textAlign: "end" }}>
                Stay with us and make yourselves at home!
              </p>
            </div>
            <div className="last-div">
              <button onClick={() => nav("/City/1")}>
                <i className="bi bi-house-door"></i>
                See Our Rooms
              </button>
            </div>
          </div>
          <div className="row border-top align-items-center">
            <div className="col-lg-6">
              <div className="copyright-area">
                <p>
                  © 2023 <b>LOFTYROOMS</b> All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-md-end justify-content-center">
              <div className="social-area">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
