import React from "react";
import "./contact-page.style.scss";
import ContactForm from "../../components/contact-form/ContactForm";
import ContactContent from "../../components/contact-content/ContactContent";

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <div className='content'>
        <ContactContent />
        <ContactForm />
      </div>
      <div className='image-backgound'></div>
    </div>
  );
};

export default ContactPage;
