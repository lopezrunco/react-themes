import React from "react";

import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Brands } from "../../components/Brands";
import { Projects } from "../../components/Projects";

export const ProjectsPage: React.FC = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        imgSrc="./assets/slide-3.png"
        title="Projects"
        subtitle="some things we've built"
      />
      <Projects items={12} />
      <Brands />
    </React.Fragment>
  );
};
