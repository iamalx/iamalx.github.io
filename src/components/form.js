import '../App.css';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import TextField from './input-field';
import { useRef } from 'react';

import Button from 'react-bootstrap/Button';

const schema = yup.object({
    Name: yup.string().min(2).required(),
    Email: yup.string().email().required(), 
    Subject: yup.string().min(2).required(),
    Body: yup.string().min(2).required(),
});


const ContactForm = ({ handleSubtmit, mobileHg }) => {

    const inputRef = useRef(null)
    
    const saveUser = (data) => {
        handleSubtmit(data)
    } 
    // parent component of input 
    return (
        <Formik
            initialValues = {{
                Name: '', 
                Email: '',
                Subject: '',
                Body: '',
            }}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
                saveUser(values)
                resetForm()
            }}
        >
            {formik => (
                <div className={`white-font  ${mobileHg <= 768 ?  'width-100' : 'cl-width'}`}>
                    <h2 className='sub-font mb-4 pt-2'><u>Contact Me</u></h2>
                    <Form className='form-container'>
                        <TextField label='First Name'
                            isdirty={formik.dirty.toString()} 
                            name='Name' 
                            type='text'
                            ref={inputRef}
                        ></TextField>
                        <TextField label='Email'
                            isdirty={formik.dirty.toString()}
                            name='Email'
                            type='email'
                        ></TextField>
                        <TextField 
                            label='Subject'
                            isdirty={formik.dirty.toString()}
                            name='Subject'
                            type='text'
                        ></TextField>
                        <TextField label='Body' 
                            isdirty={formik.dirty.toString()}
                            name='Body'
                            type='text'
                        ></TextField>
                        
                        <Button variant="light"
                            type='submit' 
                            disabled={formik.isValid & formik.dirty ? false: true}
                            className='mt-3'
                            >Submit
                        </Button>

                    </Form>
                </div>
                )
            }            
        </Formik>
    );
}

export default ContactForm;