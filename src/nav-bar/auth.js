/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./auth.css";
import { apiUrl } from "./../assets/utils/env";
import axios from "axios";

export default function LoginSignup({ isLoggedIn, setIsLoggedIn }) {
  const [signUpOncHangeData, setSignUpOncHangeData] = useState({});
  const [loginOncHangeData, setLoginOncHangeData] = useState({});

  // form transform css functionality
  React.useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("auth-right-panel-active");
    });
    signInButton.addEventListener("click", () => {
      container.classList.remove("auth-right-panel-active");
    });
  }, []);

  // check isLoggedIn = true || false
  React.useEffect(() => {
    let checkToken = localStorage.getItem("token");
    if (checkToken) {
      setIsLoggedIn(true);
      console.log("token is present: ", checkToken);
    } else if (
      checkToken === "" ||
      !checkToken ||
      checkToken === undefined ||
      checkToken === null
    ) {
      setIsLoggedIn(false);
      console.log("token not present: ", checkToken);
    }
  }, [setIsLoggedIn]);
  //  <<<<<<<<<<<<<<<<<<<        Forms handling    >>>>>>>>>>>>>>>>>>>>>
  // <<<<   Submit SIGN-IN handler   >>>>>
  const SubmitLoginForm = (e) => {
    e.preventDefault();
    console.log(loginOncHangeData);
    loginOncHangeData.androidFcmToken = "";
    loginOncHangeData.iosFcmToken = "";
    axios
      .post(`${apiUrl}/api/Customer/Login`, loginOncHangeData)
      .then((response) => {
        if (response.status !== 200)
          throw new Error(
            response.data.message || "Could'nt Login, Try Later!"
          );

        let res = response.data.data;
        localStorage.setItem("token", res.token);
        localStorage.setItem("customerId", res.customerId);
        localStorage.setItem("customerName", res.customerName);
        localStorage.setItem("email", res.email);
        localStorage.setItem("mobile", res.mobile);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log("Err===->>>", err);
      });
  };

  // <<<<   Submit SIGN-UP handler   >>>>>
  const SubmitSignUpForm = (e) => {
    e.preventDefault();
    const signupFormData = new FormData();
    for (let key in signUpOncHangeData) {
      signupFormData.append(key, signUpOncHangeData[key]);
    }
    axios({
      method: "post",
      url: `${apiUrl}/api/Customer/AddUpdateCustomer`,
      data: signupFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        if (response.status !== 200)
          throw new Error(
            response.data.message || "Could not signup! Try Again"
          );

        const res = response.data.data;
        localStorage.setItem("token", res.token);
        localStorage.setItem("customerId", res.customerId);
        localStorage.setItem("customerName", res.customerName);
        localStorage.setItem("email", res.email);
        localStorage.setItem("mobile", res.mobile);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
    // console.log(signUpOncHangeData);
  };
  const LoginOnChange = (e) => {
    let obj = loginOncHangeData;
    obj[e.target.name] = e.target.value;
    setLoginOncHangeData(obj);
    console.log("Login", e.target.value);
  };

  // <<<<           LOG-OUT          >>>>>
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  const SignUpOnChange = (e) => {
    let obj = signUpOncHangeData;
    obj[e.target.name] = e.target.value;
    setSignUpOncHangeData(obj);
    console.log("SignUp", e.target.value);
  };
  // const loftyroom = () => {
  //   navigate("/");
  // };

  return (
    <div className="body-container">
      <div className="auth-container" id="container">
        <div className="auth-form-container auth-sign-up-container">
          <form onSubmit={SubmitSignUpForm}>
            <h1 style={{ paddingTop: "15px" }}> Create Account</h1>
            <input
              type="text"
              name="CustomerName"
              placeholder="Full Name"
              onChange={SignUpOnChange}
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              onChange={SignUpOnChange}
            />
            <input
              type="tel"
              name="Mobile"
              placeholder="Mobile"
              required
              onChange={SignUpOnChange}
            />
            <input
              type="text"
              name="Cnic"
              placeholder="Cnic _____-_______-_"
              required
              onChange={SignUpOnChange}
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              required
              onChange={SignUpOnChange}
            />
            <button style={{ marginTop: "10px" }} onClick={SubmitSignUpForm}>
              {" "}
              Create Account
            </button>
            <h5>
              Already have an account!{" "}
              <a className="auth-ghost" id="signIn" style={{ color: "blue" }}>
                <u>Sign In</u>
              </a>
            </h5>
          </form>
        </div>
        <div className="auth-form-container auth-sign-in-container">
          <form onSubmit={SubmitLoginForm}>
            <h1 style={{ paddingBottom: "15px" }}> Login Now</h1>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              onChange={LoginOnChange}
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              required
              onChange={LoginOnChange}
            />
            <a href="#" style={{ paddingLeft: "150px", fontWeight: "bold" }}>
              {" "}
              Forgot Your Password?
            </a>
            <button onClick={SubmitLoginForm} style={{ marginTop: "10px" }}>
              {" "}
              Log In
            </button>
            <h5>
              New to here!{" "}
              <a className="auth-ghost" id="signUp" style={{ color: "blue" }}>
                <u>Sign Up</u>
              </a>
            </h5>
          </form>
        </div>
        <div className="auth-overlay-container">
          <div className="auth-overlay">
            <div className="auth-overlay-panel auth-overlay-left">
              <img
                src="https://i.pinimg.com/originals/94/b5/2e/94b52e6d83b83c12941ec6ee3fc69363.png"
                height="480"
                width="500"
                alt="img1"
              />
            </div>
            <div className="auth-overlay-panel auth-overlay-right">
              <img
                src="https://i.pinimg.com/originals/b8/e1/b6/b8e1b67a3f203dac4bc4602339e534a3.jpg"
                alt="movie-2"
                height="480"
                width="500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
