import React from 'react';
import Courses from '../../components/FrontUIComponent/container/courses/Courses';
import Topbar from '../../components/FrontUIComponent/container/header/Topbar';
import Footer from '../../components/FrontUIComponent/container/footer/Footer';

function CoursesPage() {
    return (
        <>
            <Topbar />
            <Courses />
            <Footer />
        </>
    );
};


export default CoursesPage;
