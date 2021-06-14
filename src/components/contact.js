import '../App.css';
// import { useState, useEffect } from 'react';

import ContactForm from '../components/form';              

// console.log(ContactForm)
const Contact = ( { mobileHg } ) => {

    const handleSubtmit = (val) => {
        // TODO: set up email API
        // console.log(val)
    }  
    
    return (
        <div className={`error-bar pb-3 hr-center`}  data-aos="fade-left">
            <ContactForm handleSubtmit={handleSubtmit} mobileHg={mobileHg}/>
        </div>
    );
}

export default Contact;
