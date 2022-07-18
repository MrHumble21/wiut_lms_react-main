import React from "react";
import { Link } from "react-router-dom";
import "./ModulePage.css";
function ModulePage() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <>
      <div id="mySidenav" className="sidenav">
        <Link to="#" className="closebtn" onClick={closeNav}>
          &times;
        </Link>
        <Link to="#">About</Link>
        <Link to="#">Services</Link>
        <Link to="#">Clients</Link>
        <Link to="#">Contact</Link>
      </div>

      <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
        &#9776; open
      </span>
    </>
  );
}

export default ModulePage;
