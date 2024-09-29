import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../../assets/next-icon.png";
import back_icon from "../../../assets/back-icon.png";
import user_1 from "../../../assets/user-1.jpg";
import user_2 from "../../../assets/user-2.jpg";
import user_3 from "../../../assets/user-3.png";
import user_4 from "../../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;

      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;

      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info gabriela">
                <img src={user_1} alt="" />
                <div>
                  <h3>Gabriela Oman</h3>
                  <span>Freedom Dance ,Las Vegas</span>
                </div>
              </div>
              <p>
                The instructors at Freedom Dance are amazing. I&apos;m so happy
                I found this company. Stevenson is very humble and patient. He
                encourages you to own your sexiness and motivates you to keep
                learning and coming back by always being so inclusive and
                friendly.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info  zagir">
                <img src={user_2} alt="" />
                <div>
                  <h3>Zagir</h3>
                  <span>Freedom Dance ,Las Vegas</span>
                </div>
              </div>
              <p>
                The instructors are super patient and professional, they
                constantly motivate and challenge you to continue learning in a
                positive, respectful way, on your time and free of pressure.
                They completely understand that we are all different and learn
                differently. In Freedom Dance I have found a family.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Wiliam Jackson</h3>
                  <span>Freedom Dance ,Las Vegas</span>
                </div>
              </div>
              <p>
                Chosing to pursue my style at Freedom dance was om of the best
                decision I&apos;ve ever made.The supportive
                community,state-of-the-art facilities,and commitment to the
                class excellence have truly exceeded my expecrtations
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Wiliam Jackson</h3>
                  <span>Freedom Dance ,Las Vegas</span>
                </div>
              </div>
              <p>
                Chosing to pursue my style at Freedom dance was om of the best
                decision I&apos;ve ever made.The supportive
                community,state-of-the-art facilities,and commitment to the
                class excellence have truly exceeded my expecrtations
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
