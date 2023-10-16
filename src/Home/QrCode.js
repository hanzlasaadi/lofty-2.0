import React from "react";
import "./HomeCss/QrCode.css";
const QrCode = () => {
  return (
    <>
      <div className="container  BgColor">
        <div className="row d-flex">
          <div className="col-lg-4">
            <img
              className="phone"
              src="..\assets\callToAction2.png"
              alt="no_image_QRcode"
            />
          </div>
          <div className="col-lg-4">
            <img
              className="Mobile"
              src="..\assets\MObile.PNG"
              alt="no_image_QRcode"
            />
          </div>
          <div className="col-lg-4">
            <img
              className="qrcode"
              src="..\assets\frame.png"
              alt="no_image_QRcode"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default QrCode;
