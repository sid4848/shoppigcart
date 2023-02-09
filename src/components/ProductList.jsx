import React from "react";
import { useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import "../css/productList.css";
import { content } from "../utils/content";
import { IconButton } from "@mui/material";

const ProductList = () => {
  const [liked, setLiked] = useState(false);

  const handleLiked = () => {
    setLiked(!liked);
  };
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 420;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 420;
  };
  return (
    <div className="sp_header">
      <div className="sp_header-title">
        <h1>Earthly</h1>
        <p>Sustainable products at affordable prices</p>
      </div>
      <div className="sp_header-blog">
        <div className="sp_header-carousel" id="slider">
          {content.map((item, index) => (
            <div className="sp_header-carousel-content" key={index}>
              <div className="sp_header-product">
                <img src={item.img} alt="" />
              </div>
              <div className="sp_header-product_content">
                <div>
                  <h3>{item.header}</h3>
                  <p className="sp_header-product_desc">{item.desc}</p>
                  <p className="sp_header-product_price">{item.price}</p>
                </div>
                <button className="sp_header-blog_btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="sp_header-detail ">
          <div>
            <div className="sp_header-blog_detail">
              <div className="sp_header-blog_marked">
                <i>
                  <DoneOutlinedIcon />
                </i>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="sp_header-blog_marked">
                <i>
                  <DoneOutlinedIcon />
                </i>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="sp_header-blog_star">
                <span>
                  <StarPurple500OutlinedIcon />
                </span>
                <span>
                  <StarPurple500OutlinedIcon />
                </span>
                <span>
                  <StarPurple500OutlinedIcon />
                </span>
                <span>
                  <StarPurple500OutlinedIcon />
                </span>
                <span>
                  <StarHalfOutlinedIcon />
                </span>
              </div>
              <div className="sp_header-blog_action">
                <div className="sp_header-blog_qty">
                  <p>Qty:</p>
                  <input type="text" placeholder="set" />
                </div>
                <div className="sp_header-blog_action-like">
                  <IconButton onClick={handleLiked}>
                    {!liked && <FavoriteBorderOutlinedIcon />}
                    {liked && <FavoriteOutlinedIcon />}
                  </IconButton>
                </div>
              </div>
              <button className="sp_header-blog_btn">Continue</button>
              <button className="sp_header-blog_btn">Order</button>
            </div>
          </div>
          <div className="sp_header-slider">
            <IconButton onClick={slideLeft}>
              <span>
                <ArrowBackIosNewOutlinedIcon />
              </span>
            </IconButton>

            <IconButton onClick={slideRight}>
              <span>
                <ArrowForwardIosOutlinedIcon />
              </span>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
