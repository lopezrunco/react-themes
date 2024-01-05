import React from "react";

import {
  ProjectCategoriesI,
  projectCategories,
  projects,
} from "../../config/projects";
import { Title } from "../Title";
import { Pagination } from "../Pagination";

interface ProjectsPropsI {
  items: number;
}

interface ProjectItemProps {
  size: string;
  link: string;
  imgSrc: string;
}

export const Projects: React.FC<ProjectsPropsI> = ({ items }) => {
  const projectsStyles = `
        #our-projects ul li {
            display: inline-block;
        }
        #our-projects .items div {
            margin-bottom: 15px;
        }

        @media screen and (min-width: 576px) {
            #our-projects ul.list-unstyled li {
              display: block;
            }
            .btn-tag {
              margin: 5px 0;
              padding: 5px 0;
              background: none;
            }
            #our-projects .items .col-sm-4 {
              overflow: hidden;
              background: rgba(254, 181, 0, 0.8);
            }
            #our-projects .items img {
              width: 100%;
              transition: ease-in-out .25s;
              z-index: 1;
            }
            #our-projects .items img:hover {
              transform: scale(1.1);
              opacity: .3;
            }
        }
    `;

  return (
    <section id="our-projects" className="our-projects py-5">
      <style>{projectsStyles}</style>
      <article className="container py-5">
        <Title
          type="light"
          title="Our projects"
          subtitle="Construction Group of Industry"
        />

        <div className="row">
          <div className="col-sm-2 categories pb-4">
            <ul className="list-unstyled">
              {projectCategories.map((item, i) => {
                return (
                  <Tab key={i} isActive={item.isActive} text={item.text} />
                );
              })}
            </ul>
          </div>
          <div className="col-sm-10">
            <div className="row items text-white text-center">
              {projects.slice(0, items).map((item, i) => {
                return (
                  <ProjectItem
                    key={i}
                    size="col-sm-4"
                    link={item.link}
                    imgSrc={item.imgSrc}
                  />
                );
              })}
            </div>
          </div>

          <div className="col text-center pt-5">
            <a href="/contact" className="btn btn-primary">
              Get a free quote
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

const Tab: React.FC<ProjectCategoriesI> = ({ isActive, text }) => {
  return (
    <li>
      <a className={`btn-tag ${isActive ? "active" : ""}`}>{text}</a>
    </li>
  );
};

const ProjectItem: React.FC<ProjectItemProps> = ({ size, link, imgSrc }) => {
  return (
    <div className={`${size} p-0 m-0`}>
      <a href={link}>
        <img className="w-100" src={imgSrc} />
      </a>
    </div>
  );
};
