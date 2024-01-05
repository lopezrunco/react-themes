import React from "react";

import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SocialBar } from "../../components/SocialBar"
import { SideBar } from "../../components/SideBar"
import { BlogPostMain } from "../../components/BlogPostMain"
import { blogPosts } from "../../config/blogPosts"

export const BlogPostPage: React.FC = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        imgSrc="../assets/slide-2.png"
        title={blogPosts[0].title}
        subtitle="Lorem ipsum dolor sit"
      />
      <section className="container mt-5 pt-5">
        <article className="row">
          <BlogPostMain post={blogPosts[0]} />
          <SideBar />
        </article>
      </section>
    </React.Fragment>
  );
};
