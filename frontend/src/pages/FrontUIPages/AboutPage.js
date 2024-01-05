import React from 'react';
import AboutPage1 from '../../components/FrontUIComponent/container/about/AboutPage1';
import Topbar from '../../components/FrontUIComponent/container/header/Topbar';
import Footer from '../../components/FrontUIComponent/container/footer/Footer';

function AboutPage() {
    return (
        <>
            <Topbar />
            <AboutPage1 />
            <Footer />
        </>
    );
};


export default AboutPage;
