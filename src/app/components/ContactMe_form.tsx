'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ConForm(){
        const [state, handleSubmit] = useForm("xayryvyy");
    if (state.succeeded) {
        return <div className="contact-form d-flex">
                    <form onSubmit={handleSubmit}>
                        <div className="form mb-3">
                            <label className="label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={""}/>
                        </div>
                        <div className="form mb-3">
                            <label className="label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Name@example.com" value={""}/>
                        </div>
                        <div className="form mb-3">
                            <label className="label">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="3" placeholder="Message" value={""}></textarea>
                        </div>
                        <button type="submit" className='d-flex align-items-center justify-content-center button-submit' disabled={state.submitting}>
                                Submit
                        </button>
                        <div className='msg-sent'>Message sent successfully!</div>
                    </form>
                </div>;
    }
    return(
        <div className="contact-form d-flex">
            <form onSubmit={handleSubmit}>
                <div className="form mb-3">
                    <label className="label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name"/>
                </div>
                <div className="form mb-3">
                    <label className="label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Name@example.com"/>
                </div>
                <div className="form mb-3">
                    <label className="label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="3" placeholder="Message"></textarea>
                </div>
                <button type="submit" className='d-flex align-items-center justify-content-center button-submit' disabled={state.submitting}>
                        Submit
                </button>
            </form>
        </div>
    )
}