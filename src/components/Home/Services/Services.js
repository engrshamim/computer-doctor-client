import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const api = 'https://arcane-sea-25467.herokuapp.com/serviceList'
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(api)
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(err => console.log(err,'Error getting services'))
        .finally(() => setLoading(false))
    },[])
    return (
        <section className="container my-5">
            <h1 className='text-center font-weight-bold py-4 mb-4'>Provide awesome <span className="text-secondary">services</span></h1>
            <div className="row justify-content-center align-items-center">
                {
                    loading ? <div>Loading</div> : (
                    services ? (
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    ) : ( <div>No services</div> )
                    )
                }
            </div>
            
        </section>
    );
};

export default Services;