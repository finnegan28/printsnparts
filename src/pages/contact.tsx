// src/pages/contact.tsx
import React from 'react';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
return (
    <div className="container mx-auto p-4 flex justify-center items-center">
    <div>
        <ContactInfo email="info@printsnparts.com"/>
        
    </div>
    <div className="container mx-auto p-4 flex justify-center items-center">
        <ContactForm />
    </div>
    </div>
);
};

export default ContactPage;