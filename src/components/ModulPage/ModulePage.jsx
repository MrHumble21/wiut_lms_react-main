import React from "react";
import { Link } from "react-router-dom";
import "./ModulePage.css";
import {
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { IoIosLogIn } from "react-icons/io";
import { BsCalendar2Week, BsCardList, BsChatDots } from "react-icons/bs";
import { BiBookBookmark } from "react-icons/bi";
import Accordion from "../Module/Accordion";

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
        <div
          style={{ flexDirection: "column" }}
          className="container-fluid d-flex justify-content-evenly align-items-center"
        >
          <div className="avatar"></div>
          <h6 style={{ color: "#747483" }} className="text-center m-0">
            Malikov Abdulboriy
          </h6>
          <div className="linear-div my-2"></div>
          <p style={{ color: "#747483" }} className="text-center m-0">
            Semester One
          </p>{" "}
          <p style={{ color: "#747483" }} className="text-center m-0">
            3BUSS001C
          </p>{" "}
          <p style={{ color: "#747483" }} className="text-center mb-5">
            Quantitative Methods
          </p>
        </div>
        <div className="container-fluid p-0">
          <Link to="#">
            <button className="d-flex align-items-center btn w-100 nav-btn-color  p-2">
              <BsCardList />
              <h6 className="mt-1 mx-2">Lessons</h6>
            </button>
          </Link>
          <Link to="#">
            <button className="d-flex btn w-100 align-items-center nav-btn-color  p-2">
              <AiOutlineVideoCameraAdd />
              <h6 className="mt-1 mx-2">Webinars</h6>
            </button>
          </Link>
          <Link to="#">
            <button className="d-flex w-100 btn align-items-center nav-btn-color  p-2">
              <BsChatDots />
              <h6 className="mt-1 mx-2">Discussion </h6>
            </button>
          </Link>
          <Link to="#">
            <button className="d-flex w-100 btn align-items-center nav-btn-color  p-2">
              <BiBookBookmark />
              <h6 className="mt-1 mx-2">Coursework</h6>
            </button>
          </Link>
        </div>
      </div>

      <div className="d-flex container mt-2 justify-content-between">
        <div style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
          &#9776;
        </div>
        <div className="nav-container  w-50 d-flex justify-content-evenly align-items-center">
          <div className=" nav-icon-border ">
            <h2>
              <AiOutlineHome />
            </h2>
          </div>
          <div className="nav-icon-border">
            <h2>
              <BsCalendar2Week />
            </h2>
          </div>
          <div className="nav-icon-border">
            <h2>
              <IoIosLogIn />
            </h2>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <Accordion />
      </div>
    </>
    // F5FBFF
  );
}

export default ModulePage;
