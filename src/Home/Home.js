import React from "react";
import "./HomeCss/Home.css";
import NavBar from "../nav-bar/NavBar";
import HeaderHome from "./HeaderHome";
import ScrollBar from "./ScrollBar";
import NearBy from "./NearBy";
import Popular from "./Popular";
import QrCode from "./QrCode";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div class="cover">
        <div class="contents">
          <h1>Contents</h1>
          <span class="close">Close</span>
        </div>
      </div>
      <NavBar />
      {/* <!-- ========== Search Bar============= --> */}
      <HeaderHome />
      {/* <!-- ========== Scroll Bar============= --> */}
      <ScrollBar />
      {/* <!-- ========== QR Code============= --> */}
      <QrCode />
      <br />
      <br />
      {/* <!-- ==========  NearBy  ============= --> */}
      <NearBy />
      {/* <!-- ==========  Popular  ============= --> */}
      <Popular />
      {/* <!-- ========== Footer Area Start============= --> */}
      <Footer />
      {/* <!-- ========== Footer Area end============= --> */}
    </>
  );
};
export default Home;
