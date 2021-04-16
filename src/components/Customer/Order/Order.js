import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {useAuth} from '../../../authentication/AuthContext';

const Order = () => {
    const {register, handleSubmit, errors, reset} = useForm();
    const currentUser = useAuth();

    const { title } = useParams();
    
    const onSubmit = data => {
        const api = 'http://localhost:5000/addOrder';
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if(response.ok){
                reset();
                alert('Order Placed Successfully');

            }
        })
        .catch(error => console.log(error))
    };
    return (
        <main>
            <form style={{maxWidth:'570px'}} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="name" placeholder="Your name/ Company name" className="form-control" defaultValue={currentUser.displayName} ref={register({required: true})}/>
                {errors.name && <span className="text-danger"><small>Name is required</small></span>}
                <input type="email" name="email" placeholder="Your email address" className="form-control" defaultValue={currentUser.email} ref={register({required: true})}/>
                {errors.email && <span className="text-danger"><small>Email is required</small></span>}
                <input type="text" name="service" placeholder="service name" className="form-control" defaultValue={title} ref={register({required: true})}/>
                {errors.service && <span className="text-danger"><small>Service is required</small></span>}
                <textarea name="projectDetails" placeholder="Project Details" cols="30" rows="10" className="form-control" ref={register({required: true})}></textarea>
                {errors.projectDetails && <span className="text-danger"><small>Details is required</small></span>}
                <div className="row">
                    <div className="col">
                        <input type="number" name="price" placeholder="Price" className="form-control" ref={register({required: true})}/>
                        {errors.price && <span className="text-danger"><small>Price is required</small></span>}
                    </div>
                </div>
                    <input type="submit" className="btn btn-primary px-4 py-2" value="Send"/>
            </form>
        </main>
    );
};

export default Order;