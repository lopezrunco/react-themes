import React from "react";

import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Brands } from "../../components/Brands";
import { BlogList } from "../../components/BlogList";

export const BlogPage: React.FC = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        imgSrc="./assets/slide-1.png"
        title="Blog"
        subtitle="Construction news"
      />
      <BlogList items={9} viewMore={false} />
      <Brands />
    </React.Fragment>
  );
};
