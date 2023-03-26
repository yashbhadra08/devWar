import "./Product.scss";
import { useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = ({ id, data }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const navigate = useNavigate();
  return (
    <div
      className="product-card"
      onClick={() => navigate("/product/" + id)}
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-delay="0"
      data-aos-easing="ease"
    >
      <div className="thumbnail">
        <img
          src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url}
          alt=""
        />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <div className="star-ratings">
          <AiFillStar className="fa fa-star" />
          <AiFillStar className="fa fa-star" />
          <AiFillStar className="fa fa-star" />
          <AiFillStar className="fa fa-star" />
          <AiFillStar className="fa fa-star" />
        </div>
        <span className="price">
          ₹{data.price} <MdShoppingCart className="cart-icon" />
        </span>
      </div>
    </div>
  );
};

export default Product;
