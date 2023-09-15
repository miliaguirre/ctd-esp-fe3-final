/* eslint-disable no-unused-vars */
import React from "react"
import { useState } from 'react';

const Form = () => {
    const initialState = {
        name: '',
        email: ''
    };

    const [formValues, setFormValues] = useState(initialState);
    const [validation, setValidation] = useState(undefined);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showThankMessage, setShowThankMessage] = useState(false);
    const [thankMessageName, setThankMessageName] = useState('');
    const { name, email } = formValues;

    const onChange = (event) => {
        const { name, value } = event.target;
        let updatedValue = value;    
        if (name === 'name') {
        updatedValue = value.charAt(0).toUpperCase() + value.slice(1);
        }    
        setFormValues({ ...formValues, [name]: updatedValue });
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (name.trim().length < 5 || !/\S+@\S+\.\S+/.test(email) || !email.includes('.')) {
        setValidation(false);
        setShowErrorMessage(true);
        setShowThankMessage(false);
        } else {
        setValidation(true);
        setShowErrorMessage(false);
        setShowThankMessage(true);
        setThankMessageName(name);
        setFormValues(initialState);
        document.getElementById('Formulario').reset();
        }
    };

    return (
        <div className="form">
            <div className="div-contact">
                <div>
                    <h1>Want to know more?</h1>
                    <h3>Send us your questions and we will contact you</h3>
                </div>
                <form onSubmit={onSubmit} id="Formulario">
                    <p>Complete the form:</p>
                    <input type="text" name="name" placeholder="Full name*" value={name} onChange={onChange} />
                    <input type="email" name="email" placeholder="Email*" value={email} onChange={onChange} />
                    <button type="submit">SEND FORM</button>
                </form>
                {validation === true && showThankMessage && <div className="thank-message">Thank you {thankMessageName}, we will contact you shortly by email.</div>}
                {validation === false && showErrorMessage && <div className="error-message">Please double check the information entered.</div>}
            </div>
        </div>
    );
};

export default Form;