/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./auth.css";
import { apiUrl } from "./../assets/utils/env";
import axios from "axios";
import NavBar from "./NavBar";

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
  }, []);
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
    <div className="body-container " style={{ background: "#272a61" }}>
      <div className="auth-container" id="container" style={{ height: "2000" }}>
        <div className="auth-form-container  auth-sign-up-container">
          <form className="bg-light" onSubmit={SubmitSignUpForm}>
            {/* <h1 style={{ paddingTop: "15px" }}> Create Account</h1> */}
            <br />
            <div className=" container ml-5" style={{ marginBottom: "-30px" }}>
              <label for="exampleInputPassword1">Enter Your Name</label>
              <br />
              <input
                className="mb-1 rounded-pill w-75 h-25 border border-1 "
                type="text"
                name="CustomerName"
                placeholder="Full Name"
                onChange={SignUpOnChange}
                required
              />
              <br />
              <label for="exampleInputPassword1">Email</label>
              <br />
              <input
                className="mb-1 rounded-pill w-75 h-25 border border-1 "
                type="email"
                name="Email"
                placeholder="Email"
                required
                onChange={SignUpOnChange}
              />
              <br />
              <label for="exampleInputPassword1">Phone No</label>
              <br />
              <input
                className="mb-1 rounded-pill w-75 h-25 border border-1 "
                type="tel"
                name="Mobile"
                placeholder="Mobile"
                required
                onChange={SignUpOnChange}
              />
              <br />
              <label for="exampleInputPassword1">CNIC</label>
              <br />
              <input
                className="mb-1 rounded-pill w-75 h-25 border border-1 "
                type="text"
                name="Cnic"
                placeholder="Cnic _____-_______-_"
                required
                onChange={SignUpOnChange}
              />
              <br />
              <label for="exampleInputPassword1">Password</label>
              <br />
              <input
                className="mb-1 rounded-pill w-75 h-25 border border-1 "
                type="password"
                name="Password"
                placeholder="Password"
                required
                onChange={SignUpOnChange}
              />
              <br />

              {/* <label for="exampleInputPassword1">Confirm Password</label><br/>
            <input
              className="mb-1 rounded-pill w-75 h-25 border border-1 "
              type="password"
              name="Password"
              placeholder="Confirm Password"
              required
              onChange={SignUpOnChange}
            /><br/> */}
              <div className="error-k ml-3 mt-1">
                <button
                  type="button"
                  onClick={SubmitSignUpForm}
                  className="btn btn-primary btn-lg"
                >
                  {" "}
                  Create Account
                </button>
              </div>

              <h5
                style={{ fontWeight: "bold", font: "200px" }}
                className="ml-1 mt-1 fs-3 "
              >
                Already have an account?{" "}
                <a className="auth-ghost" id="signIn" style={{ color: "blue" }}>
                  <u>LogIn</u>
                </a>
              </h5>
            </div>
          </form>
        </div>
        <div className="auth-form-container auth-sign-in-container">
          <form onSubmit={SubmitLoginForm}>
            <h1 style={{ paddingBottom: "15px" }}> Login Now</h1>
            <div class="text-center" style={{ marginBlockStart: "-50px" }}>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: "185px" }}
                alt="logo"
              />
              <h4 class=" text-danger mb-2">We are The Lotus Team</h4>
            </div>

            <div className="container ml-5">
              <label for="exampleInputPassword1">Email</label>
              <br />
              <input
                className="mb-2 rounded-pill w-75 h-25 border border-1 "
                type="email"
                name="Email"
                placeholder="Email"
                required
                onChange={LoginOnChange}
              />
              <br />
              <label for="exampleInputPassword1">Password</label>
              <br />
              <input
                className="mb-2 rounded-pill w-75 h-25 border border-1 "
                type="password"
                name="Password"
                placeholder="Password"
                required
                onChange={LoginOnChange}
              />
              <div className="container">
                <a href="#" style={{ fontWeight: "bold" }}>
                  {" "}
                  Forgot Your Password?
                </a>
                <br />
                <div className="error-k ml-3 mt-2">
                  <button
                    type="button"
                    onClick={SubmitLoginForm}
                    className="btn btn-primary btn-lg"
                  >
                    {" "}
                    Log In
                  </button>
                </div>
                <h5
                  style={{ fontWeight: "bold", font: "200px" }}
                  className="ml-1 mt-4 fs-3 "
                >
                  New to here!{" "}
                  <a
                    className="auth-ghost"
                    id="signUp"
                    style={{ color: "blue" }}
                  >
                    <u>Sign Up</u>
                  </a>
                </h5>
              </div>
            </div>
          </form>
        </div>
        <div className="auth-overlay-container">
          <div className="auth-overlay">
            <div className="auth-overlay-panel auth-overlay-left">
              <img
                src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                height="480"
                width="500"
                alt="img1"
              />
            </div>
            <div className="auth-overlay-panel auth-overlay-right">
              <img
                src="https://media.istockphoto.com/id/1249282831/photo/modern-bedroom-with-wood-floor-and-rug.jpg?s=612x612&w=0&k=20&c=4AgSikigZJLK4uYC2b3G0Bjv6r8eBLog88TkVm3So3E="
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
