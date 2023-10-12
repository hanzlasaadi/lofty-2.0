import React from "react";
import "./HomeCss/Booking.css";
import Footer from "./Footer";
import NavBar from "../nav-bar/NavBar";
import Clinder from "./Clinder";
import { Link } from "react-router-dom";
const Booking =()=>{
    return(
        <>
<NavBar/>
   <div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="error-wrapper">
                <div class="error-img">
                    <img class="fluid" src="https://images.unsplash.com/photo-1653972233971-8d7852fb815d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt=""/>
                    <div class="icon-img">
                        <a href="abc" class="link">
                            <svg
                                width="30"
                                height="20"
                                viewBox="0 0 14 13"
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon-circle"
                            >
                                <path d="M12.4147 1.51371C11.0037 0.302997 8.92573 0.534835 7.61736 1.87434L7.12993 2.38954L6.61684 1.87434C5.33413 0.534835 3.23047 0.302997 1.81948 1.51371C0.203258 2.90473 0.126295 5.37767 1.56294 6.87174L6.53988 12.0237C6.84773 12.3586 7.38647 12.3586 7.69433 12.0237L12.6713 6.87174C14.1079 5.37767 14.0309 2.90473 12.4147 1.51371Z" />
                            </svg>
                        </a>
                    </div>
                    
        </div>
                </div>
            </div>
    </div>
            <div class=" mt-1">
                <h2 class="Deluxe">DELUXE ROOM</h2>
                <h3 class="FACILITES">FACILITES</h3>
                <div class="row-ico d-flex">
        <div class="ico c col-lg-2">
        <img class="u" src="https://png.pngtree.com/png-vector/20191114/ourmid/pngtree-bathroom-icon-outline-style-png-image_1979997.jpg" alt="" />
            <span class="number"><span>1</span> BathRoom</span>
        </div>
        <div class="ico col-lg-2">
            <img src="https://cdn-icons-png.flaticon.com/512/2642/2642268.png" alt="" />
            <span class="number"><span>1</span> Bed</span>
        </div>
        <div class="ico d col-lg-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwne0HlLecvawGnde5O9sQ1IIxtGJjh-EttF1tzJtai0EYgun6gin3Kj6PTAv2myZGS4&usqp=CAU" alt="" />
            <span class="number"><span>3</span> Persion</span>
        </div>
        <div class="ico col-lg-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5y6rsHIWWMA4o1kghO4LLHdyOk9yTVBc7Ig&usqp=CAU" alt="" />
            <span class="number">Wifi</span>
        </div>
        <div class="ico col-lg-2">
            <img src="https://static.vecteezy.com/system/resources/previews/000/424/198/original/vector-lcd-icon.jpg" alt="" />
            <span class="number">LED</span>
        </div>
    </div>
    <h3 class="FACILITES">GALLERY</h3>
	<div class="row gutters justify-content-center">

		<div class="col-lg-4 col-md-4 col-xs-6 thumb">
			<a href="https://images.unsplash.com/photo-1547333101-6bb18e609b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80" class="fancybox" rel="ligthbox">
                    <img  src="https://images.unsplash.com/photo-1547333101-6bb18e609b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80" class="zoom img-fluid "  alt=""/>
                </a>
		</div>
		<div class="col-lg-4 col-md-4 col-xs-6 thumb">
			<a href="https://images.pexels.com/photos/56005/fiji-beach-sand-palm-trees-56005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="fancybox" rel="ligthbox">
                    <img  src="https://images.unsplash.com/photo-1585264550248-1778be3b6368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80" class="zoom img-fluid "  alt=""/>
                </a>
		</div>

		<div class="col-lg-4 col-md-4 col-xs-6 thumb">
			<a href="https://images.pexels.com/photos/1038002/pexels-photo-1038002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="fancybox" rel="ligthbox">
                    <img  src="https://images.unsplash.com/photo-1617228069096-4638a7ffc906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" class="zoom img-fluid "  alt=""/>
                </a>
		</div>

	</div>
    <div className="container">
    <h3 class="FACILITES locatoin">ABOUT HOTEL
    <img  src="https://cdn-icons-png.flaticon.com/512/9800/9800512.png" />
    </h3>
    <div class="bor">
    <div class="col">
        <h5 class="b">Hotel Name:</h5><br/>
        <h5 class="a">Grand Palm Hotel</h5>
    </div>
    <div class="col">
        <h5 class="b">Location:</h5><br/>
        <h5 class="a">Garden Town Lahore</h5>
    </div>
    <div class="col">
        <h5 class="b">Room Number:</h5><br/>
        <h5 class="a">12</h5>
    </div>
</div>

</div>
<br/>
  <div class="error"> 
    <button type="button" class="btn btn-primary btn-lg ">
       View Hotel Detail <i class="bi bi-chevron-right"></i>
    </button>
</div> 
<h3 class="FACILITES locatoin">DESCRIPTION</h3>
<div class="best">one of best</div>
               
<div class="err">
<Link to="/Clinder">
    <button type="button" class="btn btn-primary btn-lg">
      <span class="">Rs.4884/</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BOOK NOW <i class="bi bi-arrow-right"></i>
    </button>
    </Link>
  </div>
            </div>
</div><br/>
<Footer/>

        </>
    )
}
export default Booking;