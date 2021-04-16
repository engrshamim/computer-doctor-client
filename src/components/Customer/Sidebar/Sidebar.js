import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBag, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const {url} = useRouteMatch();
    return (
        <div className="col-md-3">
            <div className="side-nav">
                <li className="side--nav-item">
                    <Link to={`${url}/order`}><FontAwesomeIcon icon={faShoppingCart} className="mr-2"/>Order</Link>
                </li>
                <li className="side--nav-item">
                    <Link to={`${url}/services`}><FontAwesomeIcon icon={faShoppingBag} className="mr-2"/>Services</Link>
                </li>
                <li className="side--nav-item">
                    <Link to={`${url}/reviews`}><FontAwesomeIcon icon={faCommentDots} className="mr-2"/>Reviews</Link>
                </li>
            </div>
        </div>
         
    );
};

export default Sidebar;