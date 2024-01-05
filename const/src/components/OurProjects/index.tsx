import React from "react";

import { projects } from "../../config/projects"

interface OurProjectsPropsI {
  items: number;
}

export const OurProjects: React.FC<OurProjectsPropsI> = ({ items }) => {
  const ourProjectsStyles = `
    .projects-widget li {
      font-size: 1rem;
      font-weight: 600;
    }
    .projects-widget li a:after {
      position: absolute;
      right: 1rem;
      content: ">";
      display: block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      border-left: 1px solid;
      text-align: center;
      font-size: 11px;
      transform: translateY(-100%);
    }

    @media (min-width: 576px) {
      .projects-widget li {
        width: 85%;
      }
      .projects-widget li a:after {
        transform: translateY(-150%);
      }
    }
  `

  return (
    <div className="widget projects-widget py-4">
      <style>{ourProjectsStyles}</style>
      <h4 className="widget-title">Our Projects</h4>
      <ul className="list-unstyled">
        {projects.slice(0, items).map((el, i) => {
          return (
            <li key={i}>
              <a href={el.link}>{el.title}</a>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
