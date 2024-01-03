import React from "react";

import { Breadcrumbs } from "../../components/Breadcrumbs";

export const ProjectItem: React.FC = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        imgSrc="../assets/slide-3.png"
        title="Project Item"
        subtitle="Lorem ipsum dolor sit"
      />
    </React.Fragment>
  );
};
