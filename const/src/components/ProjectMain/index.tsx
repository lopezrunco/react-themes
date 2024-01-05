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

  const projectMainStyles = `
    .post-fields {
      font-family: Poppins, san-serif;
    }
    .post-fields h2.project-title {
      margin: 0 0 35px;
      color: #494949;
      font-size: 1.4rem;
      font-weight: bold;
      text-transform: initial;
    }
    .post-fields ul {
      margin-bottom: 40px;
      padding: 0;
      padding-right: 80px;
    }
    .post-fields ul li {
      margin-bottom: 15px;
    }
    .post-fields ul li strong {
      margin-right: 10px;
    }
    .post-fields .lists {
      font-size: .9rem;
    }
    .project-detail-content {
      width: 85%;
      margin: 0 auto;
    }
    .project-detail-content ul {
      font-family: 'Poppins', san-serif;
      font-size: .9rem;
    }
    .project-detail-content ul li {
      margin-bottom: .8rem;
    }
    .project-detail-content ul li:before {
      content: '';
      background: #feb500;
      display: inline-block;
      width: 8px;
      height: 8px;
      margin-right: 15px;
    }
  `

  return (
    <div className="col-lg-9 mb-3 main-content">
      <style>{projectMainStyles}</style>
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
