import React from "react";

import { about } from "../../config/about";
import { socialMediaItems } from "../../config/socialMediaItems";
import { projects } from "../../config/projects";
import { contactInfo } from "../../config/contactInfo";

export const Footer: React.FC = () => {
  const footerStyles = `
    footer {
        background: #202020;
        font-family: 'Poppins', san-serif;
        font-size: .9rem;
    }
    footer h3 {
        font-weight: 700;
        text-transform: capitalize;
    }
    footer p {
        color: #bbbbbb;
    }
    footer a {
        color: #fff;
    }
    footer .bottom-2,
    footer .bottom-3,
    footer .bottom-4 {
        font-size: 1.1rem;
        line-height: 3rem;
    }
    .bottom-2 li a,
    .bottom-3 li a {
        font-size: 1rem;
    }
    .bottom-2 li a:after {
        position: relative;
        float: right;
        bottom: -5px;
        content: "\f054";
        font-family: fontawesome;
        display: block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-left: 1px solid;
        text-align: center;
        font-size: 11px;
    }
    .bottom-3 ul li i,
    .contact-widget ul li i {
        margin-right: 30px;
        color: #feb500;
    }
    .bottom-4 a {
        color: #bbb;
        font-size: .9rem;
    }
    .bottom-4 ul li {
        line-height: 2rem;
    }
    .bottom-4 ul li i {
        margin-right: 10px;
    }

    @media (min-width: 576px) {
      .btn-primary:hover {
        color: #000 !important;
        background-color: #feb500;
        border: 1px solid #feb500;
      }
      .bottom-1 .btn-primary a:hover {
        color: #000;
      }
      .bottom-2 a:hover,
      .bottom-3 a:hover,
      .bottom-4 a:hover {
        color: #fff;
        text-decoration: none;
      }
      .bottom-2 li a:after {
        display: none;
      }
      .bottom-3 a,
      .bottom-3 span {
        font-size: 1rem;
      }
      .bottom-3 ul li i {
        margin-right: 15px;
      }
      .bottom-4 a:hover {
        color: #bbb;
      }
      .copyright {
        background: #000 !important;
        font-size: 1.1rem;
      }
      .copyright a {
        color: #feb500;
      }
      .copyright a:hover {
        text-decoration: none;
      }
    }
  `;

  return (
    <footer id="footer" className="text-white pt-5">
      <style>{footerStyles}</style>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 col-lg-3 pb-5 bottom-1">
            <h3 className="mb-4">About Information</h3>
            {about.aboutText.map((prg, i) => {
              return <p key={i}>{prg}</p>;
            })}
            <ul className="list-unstyled">
              {socialMediaItems.map((socialItem, i) => {
                return (
                  <li
                    key={i}
                    className="btn-social btn-primary d-inline-block mr-2"
                  >
                    <a href={socialItem.link}>
                      <i
                        className={socialItem.iconClass}
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 pb-5 bottom-2">
            <h3 className="mb-4">Our Projects</h3>
            <ul className="list-unstyled">
              {projects.slice(0, 5).map((project, i) => {
                return (
                  <li key={i}>
                    <a href={project.link}>{project.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 pb-5 bottom-3">
            <h3 className="mb-4">Contact Us</h3>
            <ul className="list-unstyled">
              {contactInfo.map((contactItem, i) => {
                return (
                  <li key={i}>
                    <a href={contactItem.link}>
                      <i className={contactItem.icon} aria-hidden="true"></i>
                      {contactItem.content}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="col-md-6 col-lg-3 pb-5 bottom-4">
            <h3 className="mb-4">Useful Links</h3>
            <ul className="list-unstyled">
              {about.relatedLinks.map((relatedLink, i) => {
                return (
                  <li key={i}>
                    <a href={relatedLink.link}>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      {relatedLink.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright text-white text-center bg-dark py-4">
        <div className="row">
          <div className="col">
            <small>
              {about.copyrightText} Developed by
              <a href={about.developer.link} target="_blank">
                {about.developer.title}
              </a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};
