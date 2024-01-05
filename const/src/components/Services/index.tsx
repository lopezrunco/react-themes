import React from "react";

import { services } from "../../config/services";
import { Title } from "../Title";
import { Pagination } from "../Pagination";

interface ServicesPropsI {
  items: number;
  viewMore: boolean;
}

interface ServiceItemProps {
  size: string;
  icon: string;
  categories: string;
  title: string;
  description: string;
  link: string;
}

export const Services: React.FC<ServicesPropsI> = ({ items, viewMore }) => {
  const servicesStyles = `
    #services .items div {
      width: 100%;
      height: 320px;
      margin: 0 15px 90px;
      padding: 20px;
      background: url(../images/construction-service-item.png) no-repeat center;
    }
    #services .items .fa-home,
    #services .items .fa-bolt,
    #services .items .fa-pencil {
      margin-bottom: 5px;
      font-size: 3.5rem;
      color: #feb500;
    }
    #services .items .item-desc {
      display: block;
      margin: 0 0 10px;
      color: #bbbbbb;
      font-size: .8rem;
      font-style: italic;
    }
    #services .items h3 {
      font-family: Poppins;
      font-size: 18px;
      text-transform: uppercase;
      font-weight: bold;
    }
    #services .btn-read-more {
      left: 60px;
      bottom: -20px;
    
    }

    @media screen and (min-width: 576px) {
      #services {
        padding: 60px 0 0;
      }
      .section-title h2 {
        font-size: 1.7rem;
      }
      .section-title h4:after {
        left: 250px;
        width: 120px;
      }
      #services .items div {
        padding: 80px;
        margin: 0;
        height: 100%;
        background: #f9f9f9;
        color: #000;
        cursor: pointer;
        transition: ease-in-out .20s;
      }
      #services .items div:hover {
        background: #000000d4;
        color: #fff;
      }
      .btn-read-more {
        background: #333;
        transition: ease-in-out .20s;
      }
      .btn-read-more:hover {
        background: #feb500;
        color: #fff;
      }
    }
  `;

  return (
    <section id="services" className="bg-light py-5">
      <style>{servicesStyles}</style>
      <article className="container">
        <Title
          type="light"
          title="Our services"
          subtitle="Construction Group of Industry"
        />
        <div className="row items text-white">
          {services.slice(0, items).map((item) => (
            <ServiceItem
              key={item.id}
              size={item.size}
              icon={item.icon}
              categories={item.categories}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>

        {viewMore && (
          <div className="row text-center pt-5 my-5">
            <div className="col">
              <a href="/services" className="btn-rounded btn-primary-rounded">
                View all services
              </a>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

const ServiceItem: React.FC<ServiceItemProps> = ({
  size,
  icon,
  categories,
  title,
  description,
  link,
}) => {
  return (
    <div className={size}>
      <i className={icon}></i>
      <span className="item-desc">{categories}</span>
      <h3>{title}</h3>
      <p className="d-none d-sm-block">{description}</p>
      <a href={link} className="btn-read-more">
        <i className="fa fa-angle-right"></i>
      </a>
    </div>
  );
};
