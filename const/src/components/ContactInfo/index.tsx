import React from "react";

export const ContactInfo: React.FC = () => {
  return (
    <div className="widget contact-widget py-4">
      <h4 className="widget-title">Contact Us</h4>
      <ul className="list-unstyled">
        <li>
          <a href="#">
            <i className="fa fa-phone" aria-hidden="true"></i>+(598) 0350 4579
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            info@domain.com
          </a>
        </li>
        <li>
          <span>
            <i className="fa fa-clock-o" aria-hidden="true"></i>Monday - Friday,
            9am - 6 pm
          </span>
        </li>
        <li>
          <span>
            <i className="fa fa-map-marker"></i>Sarandi Grande, Florida,
            Uruguay.
          </span>
        </li>
      </ul>
    </div>
  );
};
