import React, { useEffect } from "react";
import "../styles/WhoWeAre.css";
import img from "../images/home-feat-dyson.jpg";
import Container from "./Container";
const WhoWeAre = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const circle = entry.target.querySelector(".content-link");

        if (entry.isIntersecting) {
          circle.classList.add("view");
          document.querySelector(".who-container").classList.add("animation");
          return;
        }
      });
    });

    observer.observe(document.querySelector(".who-container"));
  }, []);
  return (
    <Container>
      <div className="who-container">
        <div className="sub-container">
          <div className="column">
            <img src={img} alt="" />
          </div>
          <div className="column">
            <div className="content">
              <div>
                <h2>Medicines, the keys to health</h2>
                <p>PharmaTree provides quick and easy access to your medications, just a click away, with delivery directly to your door, We offer a catalog of many products from the largest laboratories.. </p>
              </div>
              <div className="content-link">
                <a className="link-underline" href="#home">
                  More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhoWeAre;
