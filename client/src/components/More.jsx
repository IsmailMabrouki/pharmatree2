import React from "react";
import Container from "./Container";
import img from "../images/GOOD-HEALTH.jpg";
import "../styles/More.css";
import Icon6 from "../icons/Icon6";
import Icon7 from "../icons/Icon7";
import Icon8 from "../icons/Icon8";
const ListItem = (props) => {
  return (
    <li>
      {props.icon}
      {props.caption}
    </li>
  );
};
const More = () => {
  return (
    <Container>
      <div className="more-container">
        <div className="sub-container-more">
          <div className="column">
            <img src={img} alt="" />
          </div>
          <div className="column">
            <div className="content">
              <div>
                <h2>Clean and simple, delivered</h2>
                <p className="serif">Easy-to-start. Easy-to-cancel. Our team of pharmacists and doctors experts are on a mission to turn your Treatment and care plan into PharmaTree.</p>
              </div>
              <ul className="list serif">
                <ListItem icon={<Icon6 />} caption="Free delivery" />
                <ListItem icon={<Icon7 />} caption="Control your delivery date" />
                <ListItem icon={<Icon8 />} caption="Free and easy cancellation" />
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default More;
