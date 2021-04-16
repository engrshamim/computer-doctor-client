import { faCrown, faPlus, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const AdminSidebar = () => {
    const {url} = useRouteMatch();
    return (
        <div className="col-md-3">
            <div className="side-nav">
                <li className="side--nav-item">
                    <Link to={`${url}/service-list`}><FontAwesomeIcon icon={faShoppingBag} className="mr-2"/>Service List</Link>
                </li>
                <li className="side--nav-item">
                    <Link to={`${url}/add-service`}><FontAwesomeIcon icon={faPlus} className="mr-2"/>Add Service</Link>
                </li>
                <li className="side--nav-item">
                    <Link to={`${url}/make-admin`}><FontAwesomeIcon icon={faCrown} className="mr-2"/>Make Admin</Link>
                </li>
            </div>
        </div>
         
    );
};

export default AdminSidebar;