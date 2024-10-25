import React from "react";
import "./Program.css";
import group from "../../../assets/prices.jpg";
import prive from "../../../assets/prices1.jpg";
import social from "../../../assets/herostev.jpg";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={group} alt="" />

        <div className="caption">
          <img src={group} alt="" />
          <p>Bachata</p>
        </div>
      </div>

      <div className="program">
        <img src={prive} alt="" />

        <div className="caption">
          <img src={prive} alt="" />
          <p>Kizomba</p>
        </div>
      </div>

      <div className="program">
        <img src={social} alt="" />

        <div className="caption">
          <img src={social} alt="" />
          <p>Social</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
