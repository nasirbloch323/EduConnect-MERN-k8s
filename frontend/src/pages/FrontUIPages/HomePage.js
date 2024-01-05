import React from 'react';
import Topbar from '../../components/FrontUIComponent/container/header/Topbar';
import About from "../../components/FrontUIComponent/container/about/About";
import VideoPage from "../../components/FrontUIComponent/container/videoSection/VideoPage";
import Courses from "../../components/FrontUIComponent/container/courses/Courses";
import Message from "../../components/FrontUIComponent/container/Messages/Message";
import Slider from "../../components/FrontUIComponent/container/header/Slider";
import Footer from '../../components/FrontUIComponent/container/footer/Footer';



const HomePage = () => {
    return (
        <>
            <Topbar />
            <Slider />
            <About />
            <Message />
            <VideoPage />
            <Courses />
            <Footer />
        </>
    );
};


export default HomePage;
