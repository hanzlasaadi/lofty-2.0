import React from "react";
import "./HomeCss/Conform.css";
import NavBar from "../nav-bar/NavBar";
const Conformbook =()=>{
    return(
        <>
        <NavBar/>
       <div className="container bg-light mt-3 rounded">
            <div className="row">
            <div className="col-md-4">
              <img
                className="img-fluid smaller-image"
                src="..\assets\images\blog\Lahore4.jpg"
                alt="Card image cap"
              />
            </div>
                                    <div class="col-md-4 mt-3">
                                        <span class="room-title">SUIT</span>
                                        <p>
                                            <span class="titl">Join over 1 Million of users. Dignissimos asspaneriores vitae velit
                                                veniam</span>
                                        </p>
                                        <p>
                                            <span class="price">RS.4500.0/DAY</span>
                                        </p>
                                        <p>
                                            <i class="bi bi-person custom-icon"></i><span class="number">4</span>
                                            <i class="bi bi-tv custom-icon"></i><span class="number">2</span>
                                        </p>
                                        <div class="review">
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-fill"></i>
                                            <i class="bi bi-star-half"></i>
                                            <i class="bi bi-star"></i>
                                        </div>
                                    </div>
            
                                
                                    </div>
                                    </div>
            {/* ------------------------------ */}
            <div className="container">
    <h3 class="FACILITES locatoin">ABOUT HOTEL
    {/* <img  src="https://cdn-icons-png.flaticon.com/512/9800/9800512.png" /> */}
    </h3>
    <div class="bor row">
    <div class="col-lg-8 ">
        <h5 class="b">Hotel Name:</h5><br/>
        <h5 class="a">Location:</h5>
    </div>
    
    <div class="col-lg-4">
        <h5 class="b">Blue Swiss Hotel And Cafe</h5><br/>
        <h5 class="a">Pico Road,Pindl Rajputan,Model town,lho</h5>
    </div>
</div>

</div>
        </>
    )
}
export default Conformbook;