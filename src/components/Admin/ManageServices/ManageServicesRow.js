import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Event } from 'jquery';


const ManageServicesRow = (props) => {


    const {serviceTitle,serviceDescription, _id } = props.service;
    
    const deleteProduct =( events, id) => {
            // console.log(event.target.parentNode);
        fetch(`https://arcane-sea-25467.herokuapp.com/deleteProduct/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                events.target.parentNode.style.display="none"
            //    console.log('delete_success');
            }
        })
    }

    return (
        <tr>        
                <td>{serviceTitle}</td>
                <td>{serviceDescription}</td>
               
                <td>
                    
                <button  onClick={(events) => deleteProduct(events,_id)} className='btn delete-btn'>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                    
                </td>
        </tr>
    );
};

export default ManageServicesRow;