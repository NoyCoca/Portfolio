import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/core";
const SideBar2 = () => {
  const [isTrue, setIsTrue] = useState(false);
 
  function openNav() {
    setIsTrue(false);
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    setIsTrue(true);
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  return (
    <>
      <button className="openbtn" onClick={isTrue ? openNav : closeNav}>
        ☰
      </button>
      <div id="mySidebar" className="sidebar">
        <a href="#" className="closebtn" onClick={closeNav}>
          ×
        </a>
        <Link to="/" onClick={closeNav}>
          Home
        </Link>
        <Link to="/skills" onClick={closeNav}>
          Skills
        </Link>
        <Link to="/portfolio" onClick={closeNav}>
          Portfolio
        </Link>

        <Link to="/contact" onClick={closeNav}>
          Contact
        </Link>
      </div>
    </>
  );
};

export default SideBar2;
