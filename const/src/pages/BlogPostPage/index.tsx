import React from "react";

import { Breadcrumbs } from "../../components/Breadcrumbs";

export const BlogPostPage: React.FC = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        imgSrc="../assets/slide-2.png"
        title="Blog post"
        subtitle="Lorem ipsum dolor sit"
      />
    </React.Fragment>
  );
};
