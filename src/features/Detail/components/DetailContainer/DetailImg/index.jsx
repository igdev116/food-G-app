import React from "react";

import "./DetailImg.scss";

function DetailImg() {
  return (
    <div className="detail-img">
      <div className="detail-img__main">
        <img
          src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110906/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
          alt="Detail"
        />
      </div>

      <div className="detail-img__slides">
        <div className="detail-img__slide">
          <img
            src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110906/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
            alt="Slide"
          />
        </div>
        <div className="detail-img__slide">
          <img
            src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110906/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
            alt="Slide"
          />
        </div>
        <div className="detail-img__slide">
          <img
            src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110906/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
            alt="Slide"
          />
        </div>
        <div className="detail-img__slide">
          <img
            src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110906/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
            alt="Slide"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailImg;
