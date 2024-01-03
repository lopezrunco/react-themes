import React from "react";

import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Brands } from "../../components/Brands";

export const Projects: React.FC = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        imgSrc="./assets/slide-3.png"
        title="Projects"
        subtitle="some things we've built"
      />

      <Brands />
    </React.Fragment>
  );
};
