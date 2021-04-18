import React from 'react';

const ServiceRow = (props) => {
    const {_id,name, email,service, projectDetails, status} = props.service;
    
    const handleChange = (e) => {
        const api = 'https://arcane-sea-25467.herokuapp.com/updateStatus'
        const changedValue = e.target.value;
        const newStatus = {
            _id,
            
            changedValue: changedValue
        }

        console.log('id', _id)

        fetch(api, {
            headers:{ 'content-type' : 'application/json' },
            method: 'PATCH',                                                              
            body: JSON.stringify(newStatus)
                                             
          })
          .then(res => {
              if(res.ok){
                  console.log(res)
        }})
        .catch(err => console.log(err))
        console.log(newStatus)   
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