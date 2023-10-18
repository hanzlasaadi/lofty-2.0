import React from "react";
import "./HomeCss/profile.css";

const Profile=()=>{
  
    return(
        <>
      <div id="popup1" class="overlay">
        <div class="popup ">
        <div className="center-content">
           <img 
                src="https://media.istockphoto.com/id/1425217376/vector/a-checkmark-that-looks-like-it-was-written-with-a-pen.jpg?s=612x612&w=0&k=20&c=ZJLNQ2Yjh5gmFJyDnLngB_Bju2Fb-LjvEa7YRUsjA_k="
                style={{ width: "300px" }}
                alt="logo"
              />
              </div>
          
        
          <div class="center-content ">
            
            <p><h1 clas>BOOKING REQUEST</h1></p>
          </div>
          <div className="center-content">
            <p>SUBMITTED SUCCESSFULLY!</p>
            </div>
              <div className="error-k text-center">

<a
   href="/Tab"
  className="btn btn-primary btn-lg mb-3 w-75  mt-5"
>
  CONFIRM
</a>
</div>
        </div>
        
      </div>
      
         <section class="head">
        <div class="container">
          <div id="sidebarMenu" class="collapse d-lg-block sidebar collapse ">
              <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills me-3 shadow u rounded   " id="v-pills-tab" role="tablist" aria-orientation="vertical" >
                  <button class="nav-link active fs-2 text-white mt-2" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" >Wallet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-chevron-right ml-5"></i></button><hr className="co"/>

                  <button class="nav-link fs-3  text-white" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">change password&nbsp;&nbsp;&nbsp;&nbsp;   <i class="bi bi-chevron-right"></i></button><hr className="co"/>
                  <button class="nav-link fs-3 text-white" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Help and support&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-chevron-right"></i></button><hr className="co"/>
                  <button class="nav-link fs-3 text-white" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Delete Account&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-chevron-right"></i></button><hr className="co"/>

                </div>
            <div class="card card-body g" >
                <div class="tab-content  " id="v-pills-tabContent" >
                  {/* -------------------------wallet------start----------------- */}
                  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"
                  >
<div className="container">
  {/* ---------Amount---- start--- */}
<ul style={{marginRight:"80px"}}>
<div className="showaccount rounded text-white" style={{ backgroundColor: "#272a61", height: "10vh", display: "flex", alignItems: "center", justifyContent: "center" , width:"130%"}}>
  <span className="">Available Amount:</span>&nbsp;&nbsp;<span>0.0</span>
</div>
</ul>
{/* ---------------------Amount- end------ */}
          <ul class="tabs container " style={{marginTop:"-10px"}}>
         
    <li class="tab kh ">
        <input type="radio" name="tabs" checked="checked" id="tab1" />
        <label for="tab1">Payment History</label>
        <div id="tab-content1" class="content ml-5">
        
        <div className="che rounded mt-3" style={{backgroundColor:"grey", width:"-50px"}}>
         <div className="row">
          <div className="col-lg-8 mt-2">
            <p className="text-white" style={{marginLeft:"10%"}}>100000048475847557</p>
          </div>
          <div className="col-lg-4 mt-2">
            {/* <p className="text-white">ksdfjskdfkjsafd</p> */}
            <div className="error-k text-center" >
          <a
            type="button"
            className="btn btn-primary btn-sm  "
          >
            Pay & verify
          </a>
        </div>
          </div>
         </div>
         
         <div className="row mt-3 mb-5">
          <div className="col-lg-8 ">
            <p className="text-white" style={{marginLeft:"10%"}}>Amount:</p>
          </div>
          <div className="col-lg-4">
            <p className="text-white" style={{marginLeft:"40%"}}> 1000.0</p>
          </div>
         </div>
         </div>

        </div>
    </li>
    {/* ------------------------------------------ */}
    <li class="tab kh ">
      <input type="radio" name="tabs" id="tab2" />
      <label for="tab2">Deposit History</label>   
      <div id="tab-content2" class="content ">
        
         <div className="che rounded mt-3" style={{backgroundColor:"grey", width:"-50px"}}>
         <div className="row">
          <div className="col-lg-8 mt-2">
            <p className="text-white" style={{marginLeft:"10%"}}>100000048475847557</p>
          </div>
          <div className="col-lg-4 mt-2">
            {/* <p className="text-white">ksdfjskdfkjsafd</p> */}
            <div className="error-k text-center" >
          <a
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
            <p className="text-white" style={{marginLeft:"10%"}}>Amount:</p>
          </div>
          <div className="col-lg-4">
            <p className="text-white" style={{marginLeft:"40%"}}>1000.0</p>
          </div>
         </div>
         </div>
       </div>
    </li>
  </ul>
 
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
                  <div class="tab-pane fade shadow" id="v-pills-profile" role="tabpanel" aria-labelledby="#v-pills-profile">
                  <div class="mainDiv">
  <div class="cardStyle">
    <form action="" method="post" name="signupForm" id="signupForm">
      
      <img src="" id="signupLogo"/>
      
      <h2 class="formTitle s">
      PASSWORD CHANGE
      </h2>
      <div class="inputDiv">
      <label class="inputLabel" for="password">Old Password</label>
      <input type="password" id="password" className="rounded" name="password" required/>
    </div>
      
    <div class="inputDiv">
      <label class="inputLabel" for="password">New Password</label>
      <input type="password" id="password" className="rounded" name="password" required/>
    </div>
      
    <div class="inputDiv">
      <label class="inputLabel" for="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" className="rounded" name="confirmPassword"/>
    </div>
    
    <div class="buttonWrapper">
      <button type="submit" id="submitButton" onclick="validateSignupForm()" class="submitButton pure-button  rounded-pill" style={{backgroundColor:"#272a61"}}>
        <span>Save</span>
        <span id="loader"></span>
      </button>
    </div>
      
  </form>
  </div>
</div>
                  </div>
            {/* --------------------------------Change password --end--------------------- */}
    {/* ---------------------------------Help create----- start---------------- */}
                  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                  <div class="cardStyle">
    <form action="" method="post" name="signupForm" id="signupForm">
      
      <img src="" id="signupLogo"/>
      
      <h2 class="formTitle s">
 HELP & SUPPORT
      </h2>
      <div class="inputDiv">
      <label class="inputLabel o" for="password">How can we help?</label>
      <textarea class="" placeholder="Write here..." id="exampleFormControlTextarea1" rows="6"></textarea>
    </div>
      
   
    <div class="buttonWrapper">
      <button type="submit" id="submitButton" onclick="validateSignupForm()" class="submitButton pure-button pure rounded-pill " style={{backgroundColor:"#272a61"}}>
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
        <div className="error-k text-center" >
          <a
            type="button"
            href="#popup1"
            className="btn btn-primary btn-lg mb-3 w-25 "
          >
            CONFIRM
          </a>
        </div>
      </section>
        </>
    )
}
export default Profile;