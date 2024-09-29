import React from "react";
import "./Dance.css";
import gallery_1 from "../../../assets/hero1.jpg";
import gallery_2 from "../../../assets/hero3.jpg";
import gallery_3 from "../../../assets/hero4.jpg";
import gallery_4 from "../../../assets/hero5.jpg";
import white_arrow from "../../../assets/white-arrow.png";

const Dance = () => {
  return (
    <div className="dance">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Dance;
