import React from "react";
import "./HomeCss/profile.css";
import NavBar from "../nav-bar/NavBar";
import axios from "axios";
import { apiUrl } from "../assets/utils/env";
import { Link } from "react-router-dom";
// import { dummyWalletData } from "../assets/utils/dummyData";

const Profile = ({ isLoggedIn, setIsLoggedIn, authToken }) => {
  const [historyFound, setHistoryFound] = React.useState(false);
  const [walHistoryFound, setWalHistoryFound] = React.useState(false);
  const [walletAmount, setWalletAmount] = React.useState(0.0);
  const [paymentHistory, setPaymentHistory] = React.useState([]);
  const [depositHistory, setDepositHistory] = React.useState([]);

  const [cusId, setCusId] = React.useState(localStorage.getItem("customerId"));

  React.useEffect(() => {
    setCusId(localStorage.getItem("customerId"));
    const apiCall = async () => {
      setHistoryFound(false);
      setWalHistoryFound(false);
      await axios
        .request({
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          method: "GET",
          url: `${apiUrl}/api/Customer/GetWalletTotalAmount?CustomerId=${cusId}`,
        })
        .then((res) => {
          console.log(res.data);
          setWalletAmount(res.data.data.totalAmount);
        })
        .catch((err) => {
          console.log("errorGettingWalletAmountData: ", err);
        });

      await axios
        .request({
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          method: "GET",
          url: `${apiUrl}/api/Customer/CustomerPayitAmountStatus`,
        })
        .then((res) => {
          console.log(res.data);
          setHistoryFound(res.data.data.depositHistory !== undefined);
          setWalHistoryFound(res.data.data.walletHistory !== undefined);
          setDepositHistory(res.data.data.depositHistory);
          setPaymentHistory(res.data.data.walletHistory);
        })
        .catch((err) => {
          setHistoryFound(false);
          setWalHistoryFound(false);
          console.log("errorGettingWalletHistoryData: ", err);
        });
    };
    apiCall();
  }, []);

  // --------------Change Password
  const [passwordOnChangeData, setPasswordOnChangeData] = React.useState({});
  const [submittingPass, setSubmittingPass] = React.useState(false);

  const handlePasswordChange = (e) => {
    let obj = passwordOnChangeData;
    obj[e.target.name] = e.target.value;
    setPasswordOnChangeData(obj);
    console.log("Password Change: ", e.target.value);
  };

  const handleSubmitPassChange = (e) => {
    e.preventDefault();
    setSubmittingPass(true);
    passwordOnChangeData.CustomerId = cusId;
    console.log("obj: ", passwordOnChangeData);
    axios
      .request({
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        method: "POST",
        url: `${apiUrl}/api/Customer/ChangePassword`,
        data: passwordOnChangeData,
      })
      .then((response) => {
        if (response.status !== 200)
          throw new Error(
            response.data.message || "Could'nt Change Password, Try Later!"
          );

        console.log(response.data);
        setSubmittingPass(false);
        document.getElementById("oldpassword").value = "";
        document.getElementById("newpassword").value = "";
        document.getElementById("confirmpassword").value = "";
        alert("Successfully Changed Password");
      })
      .catch((err) => {
        console.log("Error chanaging pass->>>", err);
        setSubmittingPass(false);
      });
  };

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></NavBar>
      {/* ------------------------popup1---start------------------- */}
      <div id="popup1" className="overlay">
        <div className="popup ">
          <div className="center-content"></div>

          <div
            className="center-content  content-center"
            style={{ marginTop: "30%" }}
          >
            <p className="fs-3" style={{ Color: "grey", marginRight: "35%" }}>
              Delete Account?
            </p>
          </div>
          <div className="center-content ">
            <p className="fs-5">
              Deleting youre account is permanent
              <br /> and cannot be undone. Are you sure,
              <br /> you want to delete this account?
            </p>
          </div>
          <div className="error-k text-center mt-4">
            <a href="" className="btn btn-primary w-25">
              NO
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="" className="btn btn-primary w-25">
              Yes
            </a>
          </div>
        </div>
      </div>
      {/* ------------------------popup1---------end------------- */}

      {/* ----------------------popup2------start--------------- */}
      <div id="popup2" className="overlay">
        <div className="popup " style={{ height: "-50vh" }}>
          <div className="center-content"></div>

          <div
            className="center-content  content-center"
            style={{ marginTop: "30%" }}
          >
            <p
              className="fs-3"
              style={{ Color: "grey", marginRight: "35%" }}
            ></p>
          </div>
          <div className="inputDiv">
            <input
              type="password"
              id="password"
              className="rounded"
              placeholder="Enter your amount"
              name="password"
              required
            />
          </div>
          <div className="error-k text-center mt-4">
            <Link to={"/add"}>
              <a href className="btn btn-primary w-50">
                ADD
              </a>
            </Link>
          </div>
        </div>
      </div>
      <section className="head">
        <div className="container">
          <div
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse "
          >
            <div className="d-flex align-items-start">
              <div
                className="nav flex-column nav-pills me-3 shadow u rounded   "
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active fs-2 text-white mt-2"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                  style={{ textAlign: "left" }}
                >
                  <i className="bi bi-wallet2 mr-3"></i>
                  Wallet
                  {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                  {/* <i className="bi bi-chevron-right ml-5"></i> */}
                </button>
                <button
                  className="nav-link fs-3 text-white"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                  style={{ textAlign: "left" }}
                >
                  {/* {" "} */}
                  <i className="bi bi-person-gear mr-3"></i>
                  Account Settings
                  {/* <i className="bi bi-chevron-right"></i> */}
                </button>
                {/* <hr className="co" /> */}

                <button
                  className="nav-link fs-3  text-white"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                  style={{ textAlign: "left" }}
                >
                  <i className="bi bi-person-lock mr-3"></i>
                  Password
                  {/* &nbsp;&nbsp;&nbsp;&nbsp;{" "} */}
                  {/* <i className="bi bi-chevron-right"></i> */}
                </button>
                {/* <hr className="co" /> */}
                <button
                  className="nav-link fs-3 text-white"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                  style={{ textAlign: "left" }}
                >
                  <i className="bi bi-info-circle mr-3"></i>
                  Help & Support
                  {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                  {/* <i className="bi bi-chevron-right"></i> */}
                </button>
                {/* <hr className="co" /> */}
                <a
                  className="nav-link fs-3 text-danger text-center mt-3"
                  type="button"
                  href="#popup1"
                >
                  Delete Account
                </a>
                {/* <button
                  className="nav-link fs-3 text-white"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                  style={{ textAlign: "left" }}
                >
                  <i className="bi bi-trash mr-3"></i>
                  Delete Account */}
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                {/* <i className="bi bi-chevron-right"></i> */}
                {/* </button> */}
                {/* <hr className="co" /> */}
              </div>
              <div className="card card-body g">
                <div className="tab-content  " id="v-pills-tabContent">
                  <div
                    className="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="mainDiv">
                      <div className="cardStyle">
                        <form
                          action=""
                          method="post"
                          name="signupForm"
                          id="signupForm"
                        >
                          <img
                            alt="signupLogo"
                            src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                            id="signupLogo"
                          />
                          <div className="inputDiv">
                            <label className="inputLabel" for="password">
                              Full Name
                            </label>
                            <input
                              type="password"
                              id="password"
                              className="rounded"
                              name="password"
                              required
                            />
                          </div>
                          <div className="inputDiv">
                            <label className="inputLabel" for="password">
                              Email
                            </label>
                            <input
                              type="password"
                              id="password"
                              className="rounded"
                              name="password"
                              required
                            />
                          </div>
                          <div className="inputDiv">
                            <label className="inputLabel" for="confirmphone">
                              Phone no.
                            </label>
                            <input
                              type="number"
                              id="confirmphone"
                              className="rounded"
                              name="confirmPassword"
                            />
                          </div>
                          <div className="buttonWrapper">
                            <button
                              type="submit"
                              id="submitButton"
                              onclick="validateSignupForm()"
                              className="submitButton pure-button  rounded-pill"
                              style={{ backgroundColor: "#272a61" }}
                            >
                              <span>UPDATE</span>
                              <span id="loader"></span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* -------------------------wallet------start----------------- */}
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="container">
                      {/* ---------Amount---- start--- */}
                      <ul style={{ marginRight: "80px" }}>
                        <div
                          className="showaccount rounded text-white"
                          style={{
                            backgroundColor: "#272a61",
                            height: "10vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "130%",
                          }}
                        >
                          <span className="">Available Amount:</span>
                          &nbsp;&nbsp;<span>{walletAmount}</span>
                        </div>
                      </ul>
                      {/* ---------------------Amount- end------ */}
                      <ul
                        className="tabs container "
                        style={{ marginTop: "-10px" }}
                      >
                        <li className="tab kh ">
                          <input type="radio" name="tabs" id="tab1" />
                          <label for="tab1">Payment History</label>
                          <div id="tab-content1" className="content">
                            {walHistoryFound ? (
                              paymentHistory.map((_, i) => {
                                return (
                                  <div
                                    className="che rounded mt-3"
                                    style={{
                                      backgroundColor: "grey",
                                      width: "-50px",
                                    }}
                                  >
                                    <div className="row mt-3 mb-5">
                                      <div className="col-lg-8 ">
                                        <p
                                          className="text-white"
                                          style={{ marginLeft: "10%" }}
                                        >
                                          Customer:
                                        </p>
                                      </div>
                                      <div className="col-lg-4">
                                        <p
                                          className="text-white"
                                          style={{ marginLeft: "40%" }}
                                        >
                                          {" "}
                                          {paymentHistory[i].customerName}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="row mt-3 mb-5">
                                      <div className="col-lg-8 ">
                                        <p
                                          className="text-white"
                                          style={{ marginLeft: "10%" }}
                                        >
                                          Amount:
                                        </p>
                                      </div>
                                      <div className="col-lg-4">
                                        <p
                                          className="text-white"
                                          style={{ marginLeft: "40%" }}
                                        >
                                          {" "}
                                          {paymentHistory[i].amount}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })
                            ) : (
                              <h2>No Data Found!</h2>
                            )}
                          </div>
                        </li>
                        {/* ------------------------------------------ */}
                        <li className="tab kh ">
                          <input
                            type="radio"
                            name="tabs"
                            id="tab2"
                            defaultChecked
                          />
                          <label for="tab2">Deposit History</label>
                          <div id="tab-content2" className="content">
                            {historyFound ? (
                              depositHistory.map((_, i) => {
                                return (
                                  <div
                                    className="che rounded mt-3"
                                    style={{
                                      backgroundColor: "grey",
                                      width: "-50px",
                                    }}
                                  >
                                    <div className="row">
                                      <div className="col-lg-8 mt-2">
                                        <p
                                          className="text-white"
                                          style={{ marginLeft: "10%" }}
                                        >
                                          {depositHistory[i].referenceNumber}
                                        </p>
                                      </div>
                                      <div className="col-lg-4 mt-2">
                                        {/* <p className="text-white">ksdfjskdfkjsafd</p> */}
                                        <div className="error-k text-center">
                                          <a
                                            href
                                            type="button"
                                            className="btn btn-primary btn-sm  "
                                          >
                                            Pay & verify
                                          </a>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-lg-8 ">
                                        <p
                                          className="text-white"
                                          style={{ marginLeft: "10%" }}
                                        >
                                          Amount:
                                        </p>
                                      </div>
                                      <div className="col-lg-4">
                                        <p
                                          className="text-white"
                                          style={{ marginLeft: "40%" }}
                                        >
                                          {depositHistory[i].amount}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })
                            ) : (
                              <h2>No Data Found!</h2>
                            )}
                          </div>
                        </li>
                      </ul>
                      <div
                        className="error-k text-center "
                        style={{ marginTop: "70%", marginLeft: "100%" }}
                      >
                        <a
                          type="button"
                          href="#popup2"
                          className="btn btn-primary btn-lg"
                        >
                          +
                        </a>
                      </div>
                    </div>
                    {/* <div className="error-k text-center">

<a
  type="button"
  href="#popup1"
  className="btn btn-primary btn-lg mb-3 w-25 "
>
  CONFIRM
</a>
</div>         */}
                  </div>

                  {/* ---------------------------wallet-------end---------------------- */}
                  {/* -------------------------Change password- start----- */}
                  <div
                    className="tab-pane fade shadow"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="#v-pills-profile"
                  >
                    <div className="mainDiv">
                      <div className="cardStyle">
                        <form
                          name="signupForm"
                          id="signupForm"
                          onSubmit={(e) => handleSubmitPassChange(e)}
                        >
                          {/* <img src="" id="signupLogo" /> */}

                          <h2 className="formTitle s">PASSWORD CHANGE</h2>
                          <div className="inputDiv">
                            <label className="inputLabel" for="password">
                              Old Password
                            </label>
                            <input
                              type="password"
                              id="oldpassword"
                              className="rounded"
                              name="OldPassword"
                              required
                              onChange={handlePasswordChange}
                            />
                          </div>

                          <div className="inputDiv">
                            <label className="inputLabel" for="password">
                              New Password
                            </label>
                            <input
                              type="password"
                              id="newpassword"
                              className="rounded"
                              name="NewPassword"
                              required
                              onChange={handlePasswordChange}
                            />
                          </div>

                          <div className="inputDiv">
                            <label className="inputLabel" for="confirmPassword">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              id="confirmpassword"
                              className="rounded"
                              name="confirmPassword"
                              required
                            />
                          </div>

                          <div className="buttonWrapper">
                            <button
                              type="submit"
                              id="submitButton"
                              onClick={(e) => handleSubmitPassChange(e)}
                              className="submitButton pure-button  rounded-pill"
                              style={{ backgroundColor: "#272a61" }}
                            >
                              {submittingPass ? (
                                <span id="loader"></span>
                              ) : (
                                <span>Save</span>
                              )}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* --------------------------------Change password --end--------------------- */}
                  {/* ---------------------------------Help create----- start---------------- */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="cardStyle">
                      <form
                        action=""
                        method="post"
                        name="signupForm"
                        id="signupForm"
                      >
                        {/* <img src="" id="signupLogo" /> */}

                        <h2 className="formTitle s">HELP & SUPPORT</h2>
                        <div className="inputDiv">
                          <label className="inputLabel o" for="password">
                            How can we help?
                          </label>
                          <textarea
                            className=""
                            placeholder="Write here..."
                            id="exampleFormControlTextarea1"
                            rows="6"
                          ></textarea>
                        </div>

                        <div className="buttonWrapper">
                          <button
                            type="submit"
                            id="submitButton"
                            onclick="validateSignupForm()"
                            className="submitButton pure-button pure rounded-pill "
                            style={{ backgroundColor: "#272a61" }}
                          >
                            <span>submit</span>
                            <span id="loader"></span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* ---------------------------------Help create----- end---------------- */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
