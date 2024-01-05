import React from "react";

import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Brands } from "../../components/Brands";
import { ContactForm } from "../../components/ContactForm";

export const ContactPage: React.FC = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        imgSrc="./assets/slide-3.png"
        title="Contact"
        subtitle="Get free quote"
      />
      <ContactForm />
      <Brands />
    </React.Fragment>
  );
};
