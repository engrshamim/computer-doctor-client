import React from 'react';

const ServiceRow = (props) => {
    const {_id,name, email,service, projectDetails, status} = props.service;
    const setChangedStatus = props.setChangedStatus;
    
    const handleChange = (e) => {
        const changedValue = e.target.value;
        const newStatus = {
            _id,
            changedValue: changedValue
        }
        setChangedStatus(newStatus);
        
    }
    return (
        <tr>        
                <td>{name}</td>
                <td>{email}</td>
                <td>{service}</td>
                <td>{projectDetails}</td>
                <td>
                    <select name="status" id="status" className="px-2" defaultValue={status} onChange={
                        handleChange}
                    >
                        <option value="Pending">Pending</option>
                        <option value="On Going">On Going</option>
                        <option value="Complete">Complete</option>
                    </select>
                </td>
        </tr>
    );
};

export default ServiceRow;