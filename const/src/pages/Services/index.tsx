import React from "react";

import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Brands } from "../../components/Brands";

export const Services: React.FC = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        imgSrc="./assets/slide-1.png"
        title="Services"
        subtitle="We do all kind of things"
      />

      <Brands />
    </React.Fragment>
  );
};
