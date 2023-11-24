import React from "react";
import Container from "./Container";
import "../styles/MakeYourSelf.css";
import img1 from "../images/medicine-doctor-analysis-PT.jpg";
import img2 from "../images/aide-medicale-etat-PT.jpg";
import img3 from "../images/ritual-image-1579909053449.jpeg";
import img4 from "../images/img-25.jpg";
const MakeYourSelf = () => {
  return (
    <Container>
      <div className="make-container">
        <div className="make-heading">
          <h2>PharmaTree Cures</h2>
          <p>
            Commit to yourself with <span>@PharmaTree</span>
          </p>
        </div>
        <div className="make-flex">
          <img src={img1} alt="make" />
          <img src={img2} alt="make" />
          <img src={img3} alt="make" />
          <img src={img4} alt="make" />
        </div>
      </div>
    </Container>
  );
};

export default MakeYourSelf;
