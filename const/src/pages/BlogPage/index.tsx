import React from "react";

import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Brands } from "../../components/Brands";

export const BlogPage: React.FC = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        imgSrc="./assets/slide-1.png"
        title="Blog"
        subtitle="Construction news"
      />

      <Brands />
    </React.Fragment>
  );
};
