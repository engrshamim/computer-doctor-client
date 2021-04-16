import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logos/computer-doctor-logo.png';
import { useAuth } from '../../../authentication/AuthContext';

const CustomerHeader = () => {
    const currentUser = useAuth();
    return (
        <div className="container navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={logo} alt="" width="180px"/>
                </Link>
            </div>
            <ul className="ml-auto">
                <div className="nav-item">
                    <img src={currentUser?.photoURL} className="rounded-circle mr-1" alt="" width="30px"/>{currentUser?.displayName}
                </div>
            </ul>
        </div>
    );
};

export default CustomerHeader;