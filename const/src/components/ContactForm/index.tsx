import React from "react";

import { Title } from "../Title";

export const ContactForm: React.FC = () => {
  const contactFormStyles = `
        .contact-section .header-title {
            padding: 60px 0 100px;
        }
        .contact-section#we-provide h2 {
            margin: 0 0 0px;
            font-size: 1.5rem !important;
        }
        .contact-section-title h4 {
            margin: 0;
            font-size: .8rem;
            font-weight: normal;
        }
    `;

  return (
    <section id="we-provide" className="pt-5 contact-section">
      <style>{contactFormStyles}</style>
      <article className="container">
        <div className="row pt-5">
          <div className="col get-quote text-white">
            <Title
              type="light"
              title="Get a free quote"
              subtitle="Construction Group of Industry"
            />

            <form>
              <div className="form-group">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-primary mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control p-4 rounded-0 font-italic"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Complete Name"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control p-4 rounded-0 font-italic"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-primary mb-2"
                >
                  Phone No.
                </label>
                <input
                  type="tel"
                  className="form-control p-4 rounded-0 font-italic"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter No"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputEmail1"
                  className="text-primary mb-2"
                >
                  How can we help ?
                </label>
                <input
                  type="text"
                  className="form-control p-4 rounded-0 font-italic"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Select option"
                />
              </div>
              <button
                type="submit"
                className="btn-rounded btn-primary-rounded my-3"
              >
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};
