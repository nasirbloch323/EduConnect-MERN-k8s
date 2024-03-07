import React from "react";
import "./Gotop.css";
import { FaArrowUp } from "react-icons/fa";

function Gotop() {
  function gototop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="top-btn  d-flex justify-content-center sticky-bottom  rounded-circle bg-[#7A1CCB] position-fixed fs-1 w-8 h-8  text-[#fff]" onClick={gototop}>
      <FaArrowUp className="text-sm m-2 text-white" />
    </div>
  );
}

export default Gotop;
