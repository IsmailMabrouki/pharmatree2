import React from "react";
import Container from "./Container";
import "../styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <hr />
      <Container>
        <div className="footer">
          <div className="section news-section">
            <div className="section-item">
              <h3>Discover our valuable health advice, and more.</h3>
            </div>
            <div className="section-item">
              <div className="input">
                <input type="text" placeholder="Enter your email" />
                <a href="#home">Subscribe</a>
              </div>
              <div className="icons">
                <FacebookIcon />
                <InstagramIcon />
                <PinterestIcon />
                <TwitterIcon />
                <YouTubeIcon />
              </div>
            </div>
          </div>
          
          
          <hr id="btm" />
          <div className="section bottom-section">
            <div className="column">
              
              <div className="column-links">
                <div className="col-link">
                  <a href="#home">Privacy Policy</a>
                  <a href="#home">Terms of Service</a>
                 </div>
                <div className="copyright">© 2023 PharmaTree. All rights reserved.</div>
              </div>
            </div>
            <div className="column">
              <div className="box-content">
                <div className="box">* CONTACT CUSTOMER SERVICE : XX,XXX,XXX</div>
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
