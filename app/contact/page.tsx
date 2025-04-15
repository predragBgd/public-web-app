import React from "react";
import ContactEmail from "@/components/ContactEmail/ContactEmail";
import ContactForm from "@/components/ContactForm/ContactForm";
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <ContactEmail />
      <hr />
      <ContactForm />
    </div>
  );
};

export default Contact;
