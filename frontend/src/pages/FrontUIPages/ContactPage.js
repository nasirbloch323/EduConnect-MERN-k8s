import React from 'react';
import Topbar from '../../components/FrontUIComponent/container/header/Topbar';
import Footer from '../../components/FrontUIComponent/container/footer/Footer';
import Contact from '../../components/FrontUIComponent/components/contact/Contact';
import Topnavbar from '../../components/FrontUIComponent/container/header/Topnavbar';

const ContactPage = () => {
    return (
        <>
        <Topnavbar/>
            <Topbar />
            <Contact />
            <Footer />
        </>
    );
};


export default ContactPage;
