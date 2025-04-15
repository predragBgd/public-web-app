import React from "react";

const ContactEmail = () => {
  return (
    <section className="mt-12 text-center">
      <h2 className="text-2xl font-semibold">Contact Information</h2>
      <p className="mt-4 text-lg">Feel free to reach out to us at:</p>
      <p className="mt-2">
        <strong>Email:</strong>
        <a href="mailto:spublic@public.com" className="text-blue-500">
          public@public.com
        </a>
      </p>
    </section>
  );
};

export default ContactEmail;
