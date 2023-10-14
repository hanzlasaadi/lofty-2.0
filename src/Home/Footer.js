import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="style2">
        <div className="container">
          <div className="row border-top align-items-center">
            <div className="col-lg-6">
              <div className="copyright-area">
                <p>
                  © 2023 <b>LOFTYROOMS</b> is Proudly Powered by ----
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
