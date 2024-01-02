import React from "react";

import { Title } from "../Title";
import { HelpI, helpItems } from "../../config/help";

export const Help: React.FC = () => {
  const helpStyles = `
        #help-quote .item-help {
            display: flex;
            flex-direction: row;
            gap: 2rem;
            align-items: center;
        }
        #help-quote .item-help .fa {
            font-size: 1rem;
            color: #feb500;
        }
        #help-quote .get-quote h2 {
            color: #fff;
        }
        #help-quote label {
            font-family: 'Poppins', san-serif;
            font-size: .9rem;
        }

        @media (min-width: 576px) {
            #help-quote .help {
                padding-right: 2rem;
            }
            #help-quote .mask {
                overflow: hidden;
            }
            #help-quote .item-help img {
                width: 105px;
                padding: 0 30px 20px 0;
                cursor: pointer;
                transition: ease-in-out .30s;
            }
            #help-quote .item-help img:hover {
                transform: scale(1.1);
            }
            #help-quote .item-help h3 {
                padding-bottom: 0;
                margin-bottom: 0;
            }
            #help-quote .item-help h3:hover {
                color: #202020;
            }
            #help-quote .item-help p {
                line-height: 1.5rem;
            }
            #help-quote .bg-dark {
                background: rgba(0, 0, 0, 0.92) !important;
            }
            .get-quote {
                padding-left: 2rem;
            }
        }
    `;

  return (
    <section id="help-quote" className="bg-light">
      <style>{helpStyles}</style>
      <article className="container">
        <div className="row">
          <div className="col-lg-6 py-5 pr-5 help">
            <Title
              type="light"
              title="Do you need help?"
              subtitle="Lorem ipsum dolor sit amet."
            />
            {helpItems.map((item, i) => {
              return (
                <HelpItem
                  key={i}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              );
            })}
          </div>

          <div className="col-lg-6 p-5 get-quote bg-dark text-white">
            <Title
              type="dark"
              title="Get a free quote"
              subtitle="Construction Group of Industry"
            />
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-primary">
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
                <label htmlFor="exampleInputEmail1" className="text-primary">
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
                <label htmlFor="exampleInputEmail1" className="text-primary">
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
                <label htmlFor="exampleInputEmail1" className="text-primary">
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

const HelpItem: React.FC<HelpI> = ({ imgSrc, title, description, link }) => {
  return (
    <div className="item-help pb-3">
      <div className="mask">
        <img src={imgSrc} className="d-none d-sm-block" />
      </div>
      <div>
        <h3 className="text-capitalize">
          <i className="fa fa-search border-right border-dark py-2 pr-3 mr-2 mb-2"></i>
          <a href={link}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
