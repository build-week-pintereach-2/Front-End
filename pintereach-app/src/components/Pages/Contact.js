import React from 'react';
import useContactForm from '../CustomHooks';

const ContactForm = () => {
    const {inputs, handleInputChange, handleSubmit} = useContactForm();

    return (
            <form onSubmit={handleSubmit}>
                <div class="form">
                    <div class="form-info">
                        Name
                        <input type="text" 
                        name="name" 
                        onChange={handleInputChange} 
                        value={inputs.name} 
                        required />
                    </div>
                    <div class="form-info">
                        Email 
                        <input type="email" 
                        name="email" 
                        onChange={handleInputChange} 
                        value={inputs.email} 
                        required />
                    </div>
                    <div class="form-response">
                        Comments 
                        <input type="text" 
                        name="comments" 
                        onChange={handleInputChange} 
                        value={inputs.comments} 
                        required />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
    );
}

export default ContactForm;