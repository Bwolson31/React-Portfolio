import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Validate directly during the change if there's already an error
        if (errors[name]) {
            validateField(name, value);
        }
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let errorMsg = "";
        if (!value) {
            errorMsg = "This field is required";
        } else if (name === "email" && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMsg = "Please enter a valid email address";
            }
        }
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: errorMsg
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate all fields before submitting
        Object.keys(formData).forEach(key => validateField(key, formData[key]));
        const isFormValid = Object.values(errors).every(x => !x);
        if (isFormValid) {
            console.log(formData);
            alert("Thank you for your message!");
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    {errors.message && <p className="error">{errors.message}</p>}
                </label>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
