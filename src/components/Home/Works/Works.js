import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel'
import workImage1 from '../../../assets/images/service1.jpg';
import workImage2 from '../../../assets/images/service02.jpg';
import workImage3 from '../../../assets/images/service03.jpg';
import '../../../../node_modules/react-owl-carousel2/src/owl.carousel.css';
import '../../../../node_modules/react-owl-carousel2/src/owl.theme.default.css';


const Works = () => {
    const options = {
        items: 2,
        rewind: true,
        autoplay: true,
        center: true,
        lazyLoad:true,
        loop:true,
        margin: 20

    };
     
    
    return (
        <div className='works-bg bg-dark'>
            <section className="container py-5">
                <h1 className='text-center font-weight-bold py-5 mb-4 text-white'>Here are some of  <span className="text-secondary">our works</span></h1>
                <OwlCarousel options={options}>
                    <div><img src={workImage1} alt="" className="w-100"/></div>
                    <div><img src={workImage2} alt="" className="w-100"/></div>
                    <div><img src={workImage3} alt="" className="w-100"/></div>
                </OwlCarousel>
            </section>
        </div>
    );
};

export default Works;