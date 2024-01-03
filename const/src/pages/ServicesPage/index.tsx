import React from "react";

import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Brands } from "../../components/Brands";
import { Services } from "../../components/Services";

export const ServicesPage: React.FC = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        imgSrc="./assets/slide-1.png"
        title="Services"
        subtitle="We do all kind of things"
      />
      <Services items={6} />
      <Brands />
    </React.Fragment>
  );
};
