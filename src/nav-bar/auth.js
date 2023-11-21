/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./auth.css";
import { apiUrl } from "./../assets/utils/env";
import axios from "axios";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
const LoginSignup=()=>{


  return (
    <div className="khu">
    <div class="wrapper">
    <div class="title-text">
      <div class="title login"><img width={100} height={80} src="./logo.png" alt="Logo" /></div>
      <div class="title signup">Signup Form</div>
    </div>
    <div class="form-container">
      <div class="slide-controls">
        <input type="radio" name="slide" id="login" checked/>
        <input type="radio" name="slide" id="signup"/>
        <label for="login" class="slide login">Login</label>
        <label for="signup" class="slide signup">Signup</label>
        <div class="slider-tab"></div>
      </div>
      <div class="form-inner">
        <form action="#" class="login">
          <div class="field">
            <input type="text" placeholder="Email Address" required/>
          </div>
          <div class="field">
            <input type="password" placeholder="Password" required/>
          </div>
          <div class="pass-link"><a href="#">Forgot password?</a></div>
          <div class="field btn">
            <div class="btn-layer"></div>
            <input type="submit" value="Login"/>
          </div>
          <div class="signup-link">Not a member? <a href="">Signup now</a></div>
        </form>
        <form action="#" class="signup">
          <div class="field">
            <input type="text" placeholder="Email Address" required/>
          </div>
          <div class="field">
            <input type="password" placeholder="Password" required/>
          </div>
          <div class="field">
            <input type="password" placeholder="Confirm password" required/>
          </div>
          <div class="field btn">
            <div class="btn-layer"></div>
            <input type="submit" value="Signup"/>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>

  )}
export default LoginSignup;
