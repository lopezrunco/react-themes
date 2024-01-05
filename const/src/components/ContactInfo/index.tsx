import React from "react";

import { contactInfo } from "../../config/contactInfo"

export const ContactInfo: React.FC = () => {
  const contactInfoStyles = `
    .contact-widget a:hover {
      color: initial;
    }
  `

  return (
    <div className="widget contact-widget py-4">
    <style>{contactInfoStyles}</style>
      <h4 className="widget-title">Contact Us</h4>
      <ul className="list-unstyled">
        {contactInfo.map((el, i) => {
          return (
            <li>
              <a href={el.link}>
                <i className={el.icon} aria-hidden="true"></i>{el.content}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
