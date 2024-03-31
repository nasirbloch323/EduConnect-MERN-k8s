// import './Navbar.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import NoteContext from "../../context/NoteContext";
import './style.css'
const Navbar = () => {
  const { uni } = useContext(NoteContext);
  return (
    <div className="header">

      <div id="h-logos">

        {/* <Link id="logo" to="/components/">
        AAiSH Tech
      </Link> */}
        <Link id="logo-uni" to="/cgpa/">
          {uni}
        </Link>
        {/* <div id="logo-uni"  >
        <span>||</span> {uni}
      </div> */}

      </div>

      <div className="nav">
        <Link to="/cgpa">Home</Link>
        <Link to="/cgpa/gpa-cal/:flag/:index">GPA</Link>
        <Link to="/cgpa/cgpa-cal">CGPA</Link>

      </div>


    </div>
  );
};

export default Navbar;
