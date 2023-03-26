import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h4
            data-aos="slide-right"
            data-aos-duration="100"
            data-aos-easing="ease-in"
          >
            Trade-In-Offer
          </h4>
          <h2
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            Super Value Deals
          </h2>
          <h1
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            On All Products
          </h1>
          <p
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            Save More With Coupons & upto 70% Off !
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};
export default Banner;
