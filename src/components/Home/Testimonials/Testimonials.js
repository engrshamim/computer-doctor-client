import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial/Testimonial';
// import { DisappearedLoading } from 'react-loadingg';

const Testimonials = () => {
    const api = 'https://arcane-sea-25467.herokuapp.com/reviewsList'
    const [testimonials, setTestimonials] = useState([]);
    useEffect(()=>{
        fetch(api)
        .then(res => res.json())
        .then(data => setTestimonials(data))
        .catch(err => console.log(err,'Error getting services'))
    },[])
    return (
        <section className="container py-5 mb-5">
            <h1 className='text-center font-weight-bold py-4 mb-4'>Clients <span className="text-secondary">Feedback</span></h1>
            <div className="row justify-content-between pt-4">
                {
                    testimonials.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>)
                    
                }
            </div>
        </section>
    );
};

export default Testimonials;