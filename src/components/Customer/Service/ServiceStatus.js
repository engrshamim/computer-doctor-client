import React, {useEffect, useState } from 'react';
// import { _arrayBufferToBase64 } from '../../../functions/functions';
const ServiceStatus = (props) => {
    const {price, service, status,projectDetails} = props.service;
    const [serviceData, setServiceData] = useState([]);

    console.log(serviceData)

    // const [img , setImg] = useState([]);
    // console.log(img)

    useEffect(()=>{


        fetch('http://localhost:5000/serviceList')
        .then(res => res.json())
        .then(data => {
            setServiceData(data);
        })
        .catch(err => console.log(err))
    },[]);

    useEffect(()=>{
        const filtered = serviceData.filter(el => el.serviceTitle === service)
        if(filtered.length > 0){
            
        }
    },[serviceData])
    
    
    
    return (
        <div className="col-md-4 border rounded p-3 mb-3 mr-1">
            <div className="d-flex justify-content-between align-items-center mb-3">
                {/* {
                   <img src={img} alt="..." width="60px"/>
                } */}
                <span className="badge badge-success">{status}</span>
            </div>
            <p><small className="muted">${price}</small></p>
            <h4 className="font-weight-bolder">{service}</h4>
            <p className="text-muted">{projectDetails}</p>
        </div>
    );
};

export default ServiceStatus;