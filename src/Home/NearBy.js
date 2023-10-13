import React from "react";
import "./HomeCss/NearBy.css";

const NearBy = () => {
  return (
    <>
      {/* <!-- ==========  NearBy  ============= --> */}
      <div className="home3-blog-area mb-120">
        <div className="container">
          <div className="row mb-60">
            <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="section-title3">
                <h2>
                  <span style={{ color: "#272a61" }}>NearBy</span>
                </h2>
              </div>
              <div className="h3-view-btn d-md-flex d-none">
                <span className="nearbyViewAll" style={{ cursor: "pointer" }}>
                  See More NearBy&nbsp;&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-arrow-right-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                    />
                  </svg>
                  {/*   x<img src="assets/images/icon/haf-button-2.svg"  alt="Image_No_Show" /> */}
                </span>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="blog-card3">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt="Image_No_Show"
                  />
                </div>
                <div className="bolg-content">
                  <div className="cetagoty">
                    <a href="blog-grid.html">Book Now</a>
                  </div>
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <a href="blog-grid.html">
                          Tourism Hotel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 3900/-
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <a href="blog-details.html">
                      A Best room, For tourist to stay
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="blog-card3">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt="Image_No_Show"
                  />
                </div>
                <div className="bolg-content">
                  <div className="cetagoty">
                    <a href="blog-grid.html">Book Now</a>
                  </div>
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <a href="blog-grid.html">
                          Tourism Hotel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 3900/-
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <a href="blog-details.html">
                      A Best room, For tourist to stay
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="blog-card3">
                <div className="blog-img">
                  <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                    alt="Image_No_Show"
                  />
                </div>
                <div className="bolg-content">
                  <div className="cetagoty">
                    <a href="blog-grid.html">Book Now</a>
                  </div>
                  <div className="blog-meta">
                    <ul>
                      <li>
                        <a href="blog-grid.html">
                          Tourism Hotel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs. 3900/-
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <a href="blog-details.html">
                      A Best room, For tourist to stay
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-md-none d-block pt-30">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="h3-view-btn">
                <a href="shop.html">
                  View All Product
                  <img
                    src="assets/images/icon/haf-button-2.svg"
                    alt="Image_No_Show"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ==========  NearBy  ============= --> */}
    </>
  );
};

export default NearBy;
