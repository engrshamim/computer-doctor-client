import React from 'react';
import NavBar from '../../NavBar/NavBar';
import headerImg from '../../../assets/images/logos/laptopSr.jpg';
import './Header.scss';
const Header = () => {
    return (
        <div className='header-bg'>
            <NavBar></NavBar>
            <section className="container">
                <div className="row pt-3 pb-5">
                    <div className="col-md-5 d-flex flex-column justify-content-center align-items-start order-1 order-md-0">
                        <h1 className="font-weight-bold py-3">Welcome to</h1><h4>Your Trusted Computer serviceing center.</h4><br/><br/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem repellendus similique, aliquam id aspernatur nostrum?</p>
                        <button className="btn btn-primary px-4">Get an Appointment</button>
                    </div>
                    <div className="col-md-7 d-flex align-items-center justify-content-center order-0 order-md-1">
                        <img src={headerImg} alt="" className="w-100"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;