import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const api = 'http://localhost:5000/addService';

        const imageUpload = (e) => {
            console.log(e.target.files[0]);

            const imageData = new FormData();
                imageData.set('key', '9fe16537edd0e47349049f45f2ffb26a');
                imageData.append('image', e.target.files[0]);

                axios.post('https://api.imgbb.com/1/upload',imageData)
                .then(function (response){
                    setImageURL(response.data.data.display_url);
                })
                .catch(function (error){
                    console.log(error);
                });
        }

    const onSubmit = data => {
        
        const serviceData = {
            serviceTitle :data.serviceTitle,
            serviceDescription :data.serviceDescription,
            serviceUrl : imageURL
        }  
    
        fetch(api, {
            method: 'POST',
            headers: { 'content-type' : 'application/json' },
            body: JSON.stringify(serviceData)
        })
        .then(res => res.json())
        .then(response => {
            if(response.ok){
                reset();
                alert('Successfully added service.');
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '570px' }} encType="multipart/form-data">

                <label htmlFor="serviceTitle">Service Title</label>
                <input type="text" placeholder="Enter title" name="serviceTitle" id="serviceTitle" className="form-control" ref={register({ required: true })} />
                {errors.serviceTitle && <span className="text-danger"><small>Service Title is required</small></span>}

                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" onChange={imageUpload} name="file" ref={register({ required: true })} />
                    <label className="custom-file-label" htmlFor="customFile">Upload an Image</label>
                </div>
                {errors.serviceImage && <span className="text-danger"><small>Service Thumbnail is required</small></span>}
                <br></br>
                <label htmlFor="serviceDescription">Service Description</label>
                <textarea name="serviceDescription" id="serviceDescription" cols="30" rows="10" ref={register({ required: true })} className="form-control" placeholder="Enter Description"></textarea>
                {errors.serviceDescription && <span className="text-danger"><small>Short description is required</small></span>}
                <br></br>
                <input type="submit" className="btn btn-success px-3 py-2" value="Submit" />
            </form>
        </div>
    );
};

export default AddService;