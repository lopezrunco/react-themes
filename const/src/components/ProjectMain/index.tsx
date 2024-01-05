import React from "react";

import { GetAQuoteForm } from "../GetAQuoteForm"
import { SocialBar } from "../SocialBar"

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
      <SocialBar />
    </div>
  );
};
