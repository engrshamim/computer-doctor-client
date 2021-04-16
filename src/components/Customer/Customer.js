import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CustomerHeader from './CustomerHeader/CustomerHeader';
import './Customer.scss';
import Order from './Order/Order';
import Review from './Review/Review';
import Service from './Service/Service';
import Sidebar from './Sidebar/Sidebar';

const Customer = () => {
    const {path} = useRouteMatch();

    return (
        <div className="container">
            

            <div className="row">
                <CustomerHeader></CustomerHeader>
                <Sidebar></Sidebar>
                <div className="col-md-9">
                    <Switch>
                        <Route path={`${path}/services`}>
                            <Service></Service>
                        </Route>
                        <Route path={`${path}/reviews`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/order/:title`}>
                            <Order></Order>
                        </Route>
                        <Route path={`${path}`}>
                            <Order></Order>
                        </Route>
                    </Switch>
                </div>
            </div>
        
            
        </div>
    );
};

export default Customer;