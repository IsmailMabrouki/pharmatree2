import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { AiOutlineLogin } from "react-icons/ai";
import "../styles/Navbar.css";

const Navbar = () => {
  const navbar = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      if (window.pageYOffset === 0) {
        navbar.current.style.borderBottom = "none";
        navbar.current.style.borderTop = "4px solid var(--blue)";
      } else {
        navbar.current.style.borderTop = "4px solid white";
        navbar.current.style.borderBottom = "1px solid rgba(0,0,0,0.2)";
      }
    });
  }, []);

  return (
    <nav ref={navbar}>
      <div className="nav-items">
        <div className="nav-item">Menu</div>
        <div className="nav-item logo">PharmaTree</div>
        <div className="nav-item nav-item--icon">
          {/* Use Link to navigate to the login page */}
          <Link to="/login">
            <span>Login</span>
            <AiOutlineLogin />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

