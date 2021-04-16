import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../authentication/AuthContext';
import ServiceStatus from './ServiceStatus';
// import { DisappearedLoading } from 'react-loadingg';
const Service = () => {
    const [services, setServices] = useState([]);

    const currentUser = useAuth();
    const email = currentUser.email;
    
    const api = (`http://localhost:5000/orderList/${email}`)

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