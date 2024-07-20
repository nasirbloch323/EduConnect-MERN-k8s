import React, { useState, useEffect } from "react";
// import './NotificationPopup.css'
import { FaArrowUp } from "react-icons/fa";

function NotificationPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function gototop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div
      className={`top-btn d-flex justify-content-center sticky-bottom rounded-circle bg-[#7A1CCB] position-fixed fs-1 w-8 h-8 text-[#fff] ${isVisible ? "visible" : "invisible"
        }`}
      onClick={gototop}
    >
      
      <FaArrowUp className="text-sm m-2 text-white" />
    </div>
  );
}

export default NotificationPopup;
