import React from 'react';

const Testimonial = (props) => {
    const {name, company, review, photoURL} = props.testimonial;
    return (
        <div className='col-md-4 border p-4 mb-3' style={{maxWidth:'370px'}}>
            
             <div className="d-flex justify-content-start align-items-center mb-4">
             <img src={photoURL} alt="" className="rounded-circle mr-3" width="60px"/>
                <div>
                    <h5 className="font-weight-bolder">{name}</h5 >
                    <h6> <span className='text-danger'>Organization: </span>{company}</h6>
                </div>
             </div>
             <div className="text-muted">
                {review}
             </div>
            
        </div>
    );
};

export default Testimonial;