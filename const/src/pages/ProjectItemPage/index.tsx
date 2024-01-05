import React from "react";

import { projects } from "../../config/projects";

import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SideBar } from "../../components/SideBar";
import { ProjectMain } from "../../components/ProjectMain";

export const ProjectItemPage: React.FC = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        imgSrc="../assets/slide-3.png"
        title={projects[0].title}
        subtitle={projects[0].subtitle}
      />
      <section className="container mt-5 pt-5">
        <article className="row">
          <ProjectMain project={projects[0]} />
          <SideBar />
        </article>
      </section>
    </React.Fragment>
  );
};
