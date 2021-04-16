import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext, useAuth } from '../../../authentication/AuthContext'

const Review = () => {
    const {register, handleSubmit, errors, reset} = useForm();
    const currentUser = useAuth();
    const onSubmit = data => {
        const api = 'http://localhost:5000/addReviews'
        fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': sessionStorage.getItem('authToken')
            },
            body: JSON.stringify(data)
        }).then(res => {
            if(res.ok){
                alert('Successfully sent review');
                reset();
            }
        })
        .catch(err => console.log(err))
        console.log(data)
    };
    return (
        <div>
            <form style={{maxWidth:'570px'}} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="name" placeholder="Your name/ Company name" className="form-control" ref={register({required: true})}/>
                {errors.name && <span className="text-danger"><small>Name is required</small></span>}
                <input type="text" name="company" placeholder="Company's name / Designation" className="form-control" ref={register({required: true})}/>
                {errors.company && <span className="text-danger"><small>Company name / Designation is required</small></span>}
                <textarea name="review" placeholder="Review" cols="30" rows="10" className="form-control" ref={register({required: true})}></textarea>
                {errors.review && <span className="text-danger"><small>Review cannot be empty.</small></span>}
                <br></br>
                <input type="hidden" name="photoURL" ref={register} defaultValue={currentUser.photoURL}/>
                <input type="submit" className="btn btn-primary px-3 py-2"value="Submit"/>
            </form>
        </div>
    );
};

export default Review;