import React, { useEffect, useState } from 'react';
// import { DisappearedLoading } from 'react-loadingg';
import ManageServicesRow from './ManageServicesRow'

const ManageService = () => {

    const [services, setServices] = useState([]);
    const [changedStatus, setChangedStatus] = useState({});
    console.log(changedStatus)
    
    
    useEffect(() => {
        fetch('https://arcane-sea-25467.herokuapp.com/serviceList')
       
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <table className="table table-borderless">
            <thead style={{ backgroundColor: '#F5F6FA' }}>
                <tr>
                    <th scope="col" className="rounded">Name</th>
                    <th scope="col">Service Details</th>
                    <th scope="col">Modification</th>
                </tr>
            </thead>
            <tbody>
                {
                    services.map(service => <ManageServicesRow key={service._id} setChangedStatus={setChangedStatus} service={service}></ManageServicesRow>)

                }


            </tbody>
        </table>
    );
};

export default ManageService;