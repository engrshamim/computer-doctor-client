import React, { useEffect, useState } from 'react';
import ServiceStatus from './ServiceStatus';
// import { DisappearedLoading } from 'react-loadingg';
const Service = () => {
    const [services, setServices] = useState([]);
    const api = 'http://localhost:5000/orderList'

    useEffect(()=>{
        fetch(api,{
            headers:{
                'authToken' : sessionStorage.getItem('authToken')
            }})
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(err => console.log(err))
    },[])
    return (
        <div className='row'>
            {
              services.map(service => <ServiceStatus key={service._id} service={service}></ServiceStatus>)
            }
            {
                services.length === 0 && <p>No Previous Orders</p>
            }
            
        </div>
    );
};

export default Service;