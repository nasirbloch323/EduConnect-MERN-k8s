import React from 'react';
import Topbar from '../../components/FrontUIComponent/container/header/Topbar';
import Topnavbar from '../../components/FrontUIComponent/container/header/Topnavbar';
import About from "../../components/FrontUIComponent/container/about/About";
import VideoPage from "../../components/FrontUIComponent/container/videoSection/VideoPage";
import Courses from "../../components/FrontUIComponent/container/courses/Courses";
import Message from "../../components/FrontUIComponent/container/Messages/Message";
import Slider from "../../components/FrontUIComponent/container/header/Slider";
import Footer from '../../components/FrontUIComponent/container/footer/Footer';
import Anoucment from '../../components/FrontUIComponent/container/Anoucment';
import LatestEvents from '../../components/FrontUIComponent/container/Messages/LatestEvents';
import Gotop from '../../components/FrontUIComponent/Gotop/Gotop';



const HomePage = () => {
    return (
        <>
            <Topnavbar />
            <Topbar />
            <Slider />
            <Anoucment />
            {/* <About /> */}
            <Message />
            <Courses />
            <VideoPage />
            <Footer />
            <Gotop/>
        </>
    );
};


export default HomePage;
