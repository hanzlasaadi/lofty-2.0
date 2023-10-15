import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import imgHead from "../assets/images/logo.png";
import Favorite from "../Home/Favorite";
import { Link } from "react-router-dom";
import "./nav-bar.css";
const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log(isLoggedIn);
  const [displayText, setDisplayText] = useState(false);
  const [loginOncHangeData, setLoginOncHangeData] = useState({});
  const [signUpOncHangeData, setSignUpOncHangeData] = useState({});
  const navigate = useNavigate();
  let timer = useRef(null);
  //  <<<<<<<<<<<<<<<<<<<        useEffect    >>>>>>>>>>>>>>>>>>>>>
  // useEffect(() => {
  //   if (displayText == false) {
  //     setTimeout(() => {
  //       setDisplayText(true);
  //     }, 5000);
  //   } else {
  //     setTimeout(() => {
  //       setDisplayText(false);
  //     }, 3000);
  //   }
  // }, [displayText]);
  //  <<<<<<<<<<<<<<<<<<<        Forms handling    >>>>>>>>>>>>>>>>>>>>>
  const SubmitLoginForm = () => {
    console.log("setLoginOncHangeData===>>", loginOncHangeData);
  };
  const LoginOnChange = (e) => {
    let obj = loginOncHangeData;
    obj[e.target.name] = e.target.value;
    setLoginOncHangeData(obj);
    console.log("Login", e.target.value);
  };
  const SubmitSignUpForm = () => {
    console.log("setSignUpOncHangeData===>>", signUpOncHangeData);
  };
  const SignUpOnChange = (e) => {
    let obj = signUpOncHangeData;
    obj[e.target.name] = e.target.value;
    setSignUpOncHangeData(obj);
    console.log("SignUp", e.target.value);
  };
  const loftyroom = () => {
    navigate("/");
  };
  //  <<<<<<<<<<<<<<<<<<<        WHATSAPP    >>>>>>>>>>>>>>>>>>>>>
  const Whatsapp = () => {
    const phoneNumber = "+923056129012";
    const message = "Hello";
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phoneNumber
    )}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="cover">
        <div className="contents">
          <h1>Contents</h1>
          <span className="close">Close</span>
        </div>
      </div>

      <header className="header-area style-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="header-logo">
            <div className="Title">
              <h2 onClick={loftyroom} style={{ cursor: "pointer" }}>
                LOFTYROOMS
              </h2>
            </div>
          </div>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"></div> */}
          {/* <div className="main-menu">
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <a href="index.html">
                  <img alt="_no_show" src="assets/images/header2-logo.svg" />
                </a>
              </div>
              <div className="menu-close-btn">
                <i className="bi bi-x-lg"></i>
              </div>
            </div>
          </div> */}

          <li>
            {/* -----------------------notitfication start--------------- */}
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="btn-group pull-right top-head-dropdown">
                  <a
                    type="button"
                    class="btn btn-default "
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bell-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li>
                      <a href="#" class="top-text-block">
                        <div class="top-text-heading">
                          You have <b>3 new themes</b> trending
                        </div>
                        <div class="top-text-light">15 minutes ago</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="top-text-block">
                        <div class="top-text-heading">
                          New asset recommendations in <b>Gaming Laptop</b>
                        </div>
                        <div class="top-text-light">2 hours ago</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="top-text-block">
                        <div class="top-text-heading">
                          New asset recommendations in <b>5 themes</b>
                        </div>
                        <div class="top-text-light">4 hours ago</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="top-text-block">
                        <div class="top-text-heading">
                          Assets specifications modified in themes
                        </div>
                        <div class="top-text-light">4 hours ago</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="top-text-block">
                        <div class="top-text-heading">
                          We crawled <b>www.dell.com</b> successfully
                        </div>
                        <div class="top-text-light">5 hours ago</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="top-text-block">
                        <div class="top-text-heading">
                          Next crawl scheduled on <b>10 Oct 2016</b>
                        </div>
                        <div class="top-text-light">6 hours ago</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="top-text-block">
                        <div class="top-text-heading">
                          You have an update for <b>www.dell.com</b>
                        </div>
                        <div class="top-text-light">7 hours ago</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="top-text-block">
                        <div class="top-text-heading">
                          <b>"Gaming Laptop"</b> is now trending
                        </div>
                        <div class="top-text-light">7 hours ago</div>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="top-text-block">
                        <div class="top-text-heading">
                          New asset recommendations in <b>Gaming Laptop</b>
                        </div>
                        <div class="top-text-light">7 hours ago</div>
                      </a>
                    </li>
                    <li>
                      <div class="loader-topbar"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* --------------------------------notification end----- */}
          </li>
          <div className="nav-right d-flex justify-content-end align-items-center">
            <ul>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link to="/Favorite">
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.4147 1.51371C11.0037 0.302997 8.92573 0.534835 7.61736 1.87434L7.12993 2.38954L6.61684 1.87434C5.33413 0.534835 3.23047 0.302997 1.81948 1.51371C0.203258 2.90473 0.126295 5.37767 1.56294 6.87174L6.53988 12.0237C6.84773 12.3586 7.38647 12.3586 7.69433 12.0237L12.6713 6.87174C14.1079 5.37767 14.0309 2.90473 12.4147 1.51371Z" />
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <div class="dropdown">
                      <a
                        href="login.html"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1585_341)">
                            <path d="M6.98716 0.938832C6.28609 1.04711 5.65949 1.38227 5.169 1.90563C4.62972 2.48055 4.3498 3.14571 4.31128 3.94235C4.25735 5.0561 4.80177 6.12086 5.74167 6.73703C6.20391 7.04125 6.64818 7.19594 7.18747 7.23977C8.18643 7.31711 9.03901 7.00258 9.72724 6.29875C10.2742 5.74188 10.5516 5.13344 10.6183 4.35743C10.7108 3.32102 10.3205 2.3568 9.54234 1.68133C9.03901 1.24821 8.57676 1.03164 7.93733 0.938832C7.62916 0.895004 7.26964 0.892426 6.98716 0.938832Z" />
                            <path d="M4.65531 7.29655C3.49456 7.4203 2.68821 8.25561 2.31327 9.7303C2.06418 10.7126 1.99998 11.8933 2.15919 12.5405C2.29016 13.0587 2.71902 13.5846 3.21465 13.8373C3.43807 13.9507 3.75907 14.0435 4.02871 14.0744C4.18793 14.0951 5.40004 14.1002 7.71896 14.0951L11.1729 14.0873L11.3912 14.0255C12.2027 13.8037 12.7574 13.2572 12.9603 12.4889C13.0656 12.0893 13.0527 11.1354 12.9295 10.3826C12.6598 8.70678 11.9767 7.70131 10.8956 7.38678C10.6491 7.31459 10.2074 7.26045 10.0764 7.28623C9.95057 7.30944 9.77594 7.40225 9.38047 7.65749C8.95931 7.93077 8.90025 7.9617 8.58438 8.0803C8.21972 8.21694 7.91926 8.27624 7.56745 8.27624C7.20792 8.27624 6.93058 8.22467 6.56592 8.09577C6.2218 7.97202 6.20639 7.96428 5.66711 7.62139C5.38463 7.44092 5.17405 7.32491 5.09187 7.3017C4.94806 7.26561 4.94806 7.26561 4.65531 7.29655Z" />
                          </g>
                        </svg>
                      </a>
                      <div
                        class="dropdown-menu mt-2 "
                        aria-labelledby="dropdownMenuButton"
                        style={{ width: "300px", marginRight: "100px" }}
                      >
                        <p class="dropdown-item " href="#">
                          Action
                        </p>
                        <hr />
                        <p class="dropdown-item" href="#">
                          Another action
                        </p>
                        <hr />
                        <p class="dropdown-item" href="#">
                          Something else here
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="login.html">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1585_341)">
                          <path d="M6.98716 0.938832C6.28609 1.04711 5.65949 1.38227 5.169 1.90563C4.62972 2.48055 4.3498 3.14571 4.31128 3.94235C4.25735 5.0561 4.80177 6.12086 5.74167 6.73703C6.20391 7.04125 6.64818 7.19594 7.18747 7.23977C8.18643 7.31711 9.03901 7.00258 9.72724 6.29875C10.2742 5.74188 10.5516 5.13344 10.6183 4.35743C10.7108 3.32102 10.3205 2.3568 9.54234 1.68133C9.03901 1.24821 8.57676 1.03164 7.93733 0.938832C7.62916 0.895004 7.26964 0.892426 6.98716 0.938832Z" />
                          <path d="M4.65531 7.29655C3.49456 7.4203 2.68821 8.25561 2.31327 9.7303C2.06418 10.7126 1.99998 11.8933 2.15919 12.5405C2.29016 13.0587 2.71902 13.5846 3.21465 13.8373C3.43807 13.9507 3.75907 14.0435 4.02871 14.0744C4.18793 14.0951 5.40004 14.1002 7.71896 14.0951L11.1729 14.0873L11.3912 14.0255C12.2027 13.8037 12.7574 13.2572 12.9603 12.4889C13.0656 12.0893 13.0527 11.1354 12.9295 10.3826C12.6598 8.70678 11.9767 7.70131 10.8956 7.38678C10.6491 7.31459 10.2074 7.26045 10.0764 7.28623C9.95057 7.30944 9.77594 7.40225 9.38047 7.65749C8.95931 7.93077 8.90025 7.9617 8.58438 8.0803C8.21972 8.21694 7.91926 8.27624 7.56745 8.27624C7.20792 8.27624 6.93058 8.22467 6.56592 8.09577C6.2218 7.97202 6.20639 7.96428 5.66711 7.62139C5.38463 7.44092 5.17405 7.32491 5.09187 7.3017C4.94806 7.26561 4.94806 7.26561 4.65531 7.29655Z" />
                        </g>
                      </svg>
                    </a>
                  </li>
                </>
              ) : (
                <nav className="navbar navbar-expand-lg ">
                  <div className="navbar-nav ml-auto action-buttons">
                    <Link to={"/login"}>
                      <p>Login / Signup</p>
                    </Link>
                  </div>
                </nav>
              )}
              {/* <  login form  Start> */}
              {/* <nav className="navbar navbar-expand-lg ">
                <div className="navbar-nav ml-auto action-buttons">
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      className="nav-link dropdown-toggle mr-4"
                    >
                      Login
                    </a>
                    <div className="dropdown-menu action-form">
                      <span method="post">
                        <p className="hint-text">
                          Sign in with your social media account
                        </p>
                        <div className="form-group social-btn clearfix">
                          <a
                            href="#"
                            className="btn btn-secondary facebook-btn float-left"
                          >
                            <i className="bi bi-facebook"></i> Facebook
                          </a>
                          <a
                            href="#"
                            className="btn btn-secondary twitter-btn float-right"
                          >
                            <i className="bi bi-twitter"></i> Twitter
                          </a>
                        </div>
                        <div className="or-seperator">
                          <b>or</b>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="UserName"
                            onChange={(e) => LoginOnChange(e)}
                            placeholder="Username"
                            required="required"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            name="Password"
                            onChange={(e) => LoginOnChange(e)}
                            placeholder="Password"
                            required="required"
                          />
                        </div>
                        <button
                          className="btn btn-primary btn-block"
                          onClick={SubmitLoginForm}
                        >
                          Login
                        </button>
                        <div className="text-center mt-2">
                          <a href="#">Forgot Your password?</a>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="nav-item dropdown">
                    <a
                      data-toggle="dropdown"
                      className="btn btn-primary dropdown-toggle sign-up-btn"
                    >
                      Sign up
                    </a>
                    <div className="dropdown-menu action-form">
                      <div method="post">
                        <p className="hint-text">
                          Fill in this form to create your account!
                        </p>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            name="UserName"
                            onChange={(e) => SignUpOnChange(e)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="LastName"
                            name="LastName"
                            onChange={(e) => SignUpOnChange(e)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="Email"
                            onChange={(e) => SignUpOnChange(e)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Phone"
                            name="Mobile"
                            onChange={(e) => SignUpOnChange(e)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Cnic"
                            name="Cnic"
                            onChange={(e) => SignUpOnChange(e)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password "
                            className="form-control"
                            name="Password"
                            onChange={(e) => SignUpOnChange(e)}
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            name="Confirm Password"
                            onChange={(e) => SignUpOnChange(e)}
                            placeholder="Confirm Password"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-check-label">
                            <input type="checkbox" /> I accept the{" "}
                            <a href="#">Terms &amp; Conditions</a>
                          </label>
                        </div>
                        <button
                          className="btn btn-primary btn-block"
                          onClick={SubmitSignUpForm}
                        >
                          Login / Signup{" "}
                        </button>
                      </div>
                    </div>
                  </div> 
                  <Link to={"/login"}>
                    <p>Login / Signup</p>
                  </Link>
                </div>
              </nav>*/}

              {/* Login Form End  */}

              <button
                onClick={() => {
                  window.location.href = "tel:+923232345673";
                }}
                type="button"
                className="btn btn-outline"
              >
                CallNow
              </button>
            </ul>
            {/* <div className="sidebar-button mobile-menu-btn ">
              <i className="bi bi-list"></i>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
