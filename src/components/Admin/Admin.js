import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useAuth } from '../../authentication/AuthContext';
import './admin.css'
import CustomerHeader from '../Customer/CustomerHeader/CustomerHeader';
import AddService from './AddService/AddService';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageService from './ManageServices/ManageService';
import ServiceList from './ServiceList/ServiceList';

const Admin = () => {
    const {path} = useRouteMatch();

    const currentUser = useAuth();
    const [isAdmin , setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://arcane-sea-25467.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: currentUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    },[])

    return (
        <div className="container">
            <div >
                <CustomerHeader></CustomerHeader>
            { isAdmin ?  
            <div className="row">
                <AdminSidebar></AdminSidebar>
            <div className="col-md-9">
                    <Switch>
                        <Route path={`${path}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/add-service`}>
                            <AddService></AddService>
                        </Route>
                        <Route path={`${path}/manageService`}>
                            <ManageService></ManageService>
                        </Route>
                        <Route path={`${path}`}>
                            <ServiceList></ServiceList>
                        </Route>
                    </Switch>
                </div>
                </div>
                : <h1 className="customerFeadback">Sorry to say, You are not Admin. <br/>This page only use for Admin.</h1>}
            </div>
        
            
        </div>
    );
};

export default Admin;