import React from 'react';
import Footer from '../Footer/Footer';
import ContactUs from './ContactUs/ContactUs';
import Header from './Header/Header';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Works from './Works/Works';

const Home = () => {
    document.title = 'Computer Doctor | Home';
    return (
        <>
            <Header></Header>
            <Services></Services>
            <Works></Works>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    );
};

export default Home;