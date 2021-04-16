import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Because we have beautiful management system, skilled engineer and you will get three months warranty after servicing. "}
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const ourEngr = [
        {name: "Professional Software Engineer"},
        {name: "Professional Hardware Engineer"},
        {name: "24 Hour Monitoring system"}
    ]
    const services = [
        {name: "Software / Hardware Installation."},
        {name: "Memory Upgrades."},
        {name: "Windows / Operating System Installation / Upgrades."},
        {name: "Automated Back Up."}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Why Computer Doctor?"} menuItems={noNamed}/>
                    <FooterCol key={2} className='text-white' menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Our Engineer" menuItems={ourEngr}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com/dignified.bd"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+8801854-712722</button>
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