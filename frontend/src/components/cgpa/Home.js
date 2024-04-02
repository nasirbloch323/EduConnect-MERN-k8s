import './style.css'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import NoteContext from "../../context/NoteContext";
import Footer from '../FrontUIComponent/container/footer/Footer';
import Topnavbar from '../FrontUIComponent/container/header/Topnavbar';
import Topbar from '../FrontUIComponent/container/header/Topbar';

const Home = () => {
  const navigate = useNavigate();
  const { uni, setUni } = useContext(NoteContext);
  const flag = false;
  const index = 0;


  const handleUniChange = (event) => {
    setUni(event.target.value);
    localStorage.setItem('uni', uni);
  };

  return (

    <>
      <Topnavbar />
      <Topbar />
      <div className="basic-container home-body">

        <h1>Hey, Dude! Welcome Here!</h1>
        <h5>Select Your University/Department:</h5>
        <select id="uni-selector" value={uni} onChange={handleUniChange}>
          <option value="UO">UO</option>
          <option value="PUCIT">PUCIT</option>
          <option value="PU">PU</option>
          <option value="VU">VU</option>
          {/* <option value="UET">UET</option> */}
        </select>

        {/* <div className="btns"> */}
        <button className="border bg-[#552285] text-[#fff]" id="btn" onClick={() => navigate(`/cgpa/gpa-cal/${flag}/${index}`)}>
          GPA
        </button>
        <button className="border bg-[#552285] text-[#fff]" id="btn" onClick={() => navigate("/cgpa/cgpa-cal")}>CGPA</button>
        {/* </div> */}


      </div>
      <Footer />
    </>
  );
};

export default Home;
