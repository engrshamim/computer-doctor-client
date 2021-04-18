import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Because we have beautiful management system, skilled doctors and you will get good service. "}
    ]
    const ourAddress = [
        {name: "Gulshan, Dhaka Bangladesh" , link: "//google.com/map"},
        {name: "Dhaka" , link: "//google.com/map"},
       
    ]
    const ourServiceHolder = [
        {name: "Professional Scene Doctors"},
        {name: "Best Automation machine"},
        {name: "24 Hour service system"}
    ]
    const services = [
        {name: "Hair Treatments."},
        {name: "Depilatory & Waxing Treatments"},
        {name: "Women's Hair Colour"},
        {name: "Permanent Hair Straightening"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Why Computer Doctor?"} menuItems={noNamed}/>
                    <FooterCol key={2} className='text-white' menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Our Service Holder" menuItems={ourServiceHolder}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com/dignified.bd"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+8801854-000000</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright 2021 All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;