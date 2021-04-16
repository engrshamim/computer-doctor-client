import React from 'react';
import './Service.scss';
import { _arrayBufferToBase64 } from '../../../../functions/functions';
import { useHistory } from 'react-router-dom';
const Service = (props) => {
    const history = useHistory();
    
    const { serviceUrl, serviceTitle, serviceDescription } = props.service;
    // console.log(service)
    const img = serviceUrl;
    
    const handleOrder = (serviceTitle) => {
        history.push(`/customer/order/${serviceTitle}`)
    }
    return (
        <div className='col-md-4 service-card' onClick={() => handleOrder(serviceTitle)}>
            <div className="d-flex flex-column justify-content-center align-items-center py-4 my-2">
                <img src={img} alt={serviceTitle} width="300px"/>
                <h3 className='font-weight-bolder text-center mt-3 py-2'>{serviceTitle}</h3>
                <p className='text-muted text-center my-2'>{serviceDescription}</p>
            </div>
        </div>
    );
};

export default Service;