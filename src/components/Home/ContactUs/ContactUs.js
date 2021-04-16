import React from 'react';
import './ContactUs.scss';
const ContactUs = () => {
    return (
        <div className="contactUs-bg bg-light">
            <section className="container py-5">
                <div className="row py-5 justify-content-between">
                    <div className="col-md-5">
                        <h1>Let us handle your <br></br>project, professionally.</h1>
                        <p className="mt-3">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <input type="email" name="email" id="email" placeholder="Your email address" className="form-control"/>
                            <input type="text" name="name" id="name" placeholder="Your name / Company's name" className="form-control"/>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message" className="form-control"></textarea>
                            <input type="submit" className="btn btn-primary px-5 mt-2"value="Send"/>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;