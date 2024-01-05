import React from "react";

import { GetAQuoteForm } from "../GetAQuoteForm"

interface ProjectMainI {
  project: object;
}

export const ProjectMain: React.FC<ProjectMainI> = ({ project }) => {
  const { 
    title, 
    client, 
    area, 
    value, 
    location, 
    year, 
    architect, 
    imgSrc,
    link,
    content,
    list
  } = project;

  return (
    <div className="col-sm-9 mb-3 main-content">
      <div className="post-fields">
        <h2 className="project-title">{title}</h2>
        <div className="lists d-flex">
          <ul className="list-unstyled d-inline-block mr-5 pr-5 mb-5">
            <li>
              <strong>Client: </strong>
              {client}
            </li>
            <li>
              <strong>Surface area: </strong>
              {area}
            </li>
            <li>
              <strong>Value: </strong> {value}
            </li>
          </ul>
          <ul className="list-unstyled d-inline-block mr-5">
            <li>
              <strong>Location: </strong>
              {location}
            </li>
            <li>
              <strong>Year completed: </strong>
              {year}
            </li>
            <li>
              <strong>Architect: </strong>
              {architect}
            </li>
          </ul>
        </div>
      </div>

      <div className="project-detail-gallery mb-5 pb-4">
        <div className="project-detail-thumbnail mb-4">
          <img src={imgSrc} className="w-100" />
        </div>
      </div>

      <div className="project-detail-content mb-5">
        <p>{content}</p>
        <ul className="list-unstyled mt-4">
          {list.map((item, i) => {
            return <li key={i}>{item}</li>
          })}
        </ul>
      </div>

      <GetAQuoteForm />

      {/* social mobile */}
      <div className="row">
        <div className="d-sm-none col social-box-mobile">
          <ul className="social-top list-unstyled">
            <li className="d-inline-block mr-3">
              <a href="#">
                <i className="fa fa-facebook text-dark" aria-hidden="true"></i>
              </a>
            </li>
            <li className="d-inline-block mx-3">
              <a href="#">
                <i
                  className="fa fa-google-plus text-dark"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="d-inline-block mx-3">
              <a href="#">
                <i className="fa fa-twitter text-dark" aria-hidden="true"></i>
              </a>
            </li>
            <li className="d-inline-block ml-3">
              <a href="#">
                <i className="fa fa-linkedin text-dark" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* social desktop */}
      <div className="row d-none d-sm-block social-box">
        <div className="d-none d-sm-block col">
          <ul className="social-top-desk list-unstyled justify-content-end">
            <li className="d-inline-block mr-3 pr-4 border-dark border-right">
              <a href="#">
                <i className="mr-2 fa fa-facebook" aria-hidden="true"></i>
                Facebook
              </a>
            </li>
            <li className="d-inline-block mx-3 pr-4 border-dark border-right">
              <a href="#">
                <i className="mr-2 fa fa-google-plus" aria-hidden="true"></i>
                Google plus
              </a>
            </li>
            <li className="d-inline-block mx-3 pr-4 border-dark border-right">
              <a href="#">
                <i className="mr-2 fa fa-twitter" aria-hidden="true"></i>
                Twitter
              </a>
            </li>
            <li className="d-inline-block">
              <a href="#">
                <i className="mr-2 fa fa-linkedin" aria-hidden="true"></i>
                Linked in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
