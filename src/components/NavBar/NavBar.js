import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/computer-doctor-logo.png';
import { useAuth } from '../../authentication/AuthContext';
import './NavBar.css'

const NavBar = () => {
    const currentUser = useAuth()
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light py-3">
            <a className="navbar-brand" className='d-flex underline' href="/">
                <img src={logo} alt="" width="180px"/> <h4 className='logo-text'>Computer Doctor</h4>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white mr-3">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#portfolio" className="nav-link text-white mr-3">Our Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#our-team" className="nav-link text-white mr-3">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white mr-3">Contact Us</Link>
                    </li>
                    {
                        currentUser ? (<li className="nav-item">
                        <img src={currentUser?.photoURL} className="rounded-circle mr-1" alt="" width="30px"/>{currentUser?.displayName}
                    </li>) : (<li className="nav-item">
                        <Link to='/login' className="btn btn-danger">Login</Link>
                    </li>)
                    }
                    
                </ul>
                
            </div>
            </nav>
        </div>
        
    );
};

export default NavBar;