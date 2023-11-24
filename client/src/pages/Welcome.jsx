import React from "react";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import WhoWeAre from "../components/WhoWeAre.jsx";
import Featured from "../components/Featured.jsx";
import More from "../components/More.jsx";
import MakeYourSelf from "../components/MakeYourSelf.jsx";
import Footer from "../components/Footer.jsx";


const Welcome = () => {
  return (
      <>
         <Navbar />
        <Header />
        <WhoWeAre />
        <Featured />
        <More />
        <MakeYourSelf />
        <Footer /> 
      </>
  );
};

export default Welcome;
