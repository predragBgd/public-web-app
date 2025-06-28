import React from "react";
import Heading from "../Heading/Heading";

const ContactEmail = () => {
  return (
    <section className="mt-12 text-center">
      <Heading
        titleClassName="text-2xl font-semibold"
        title="Contact Information"
        subtitleClassName="mt-4 text-lg"
        subtitle="Feel free to reach out to us at:"
        level="h2"
      />
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
