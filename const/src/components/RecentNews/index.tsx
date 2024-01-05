import React from "react";

import { BlogPostI, blogPosts } from "../../config/blogPosts";

interface RecentNewsPropsI {
  items: number;
}

export const RecentNews: React.FC<RecentNewsPropsI> = ({ items }) => {
  return (
    <div className="widget news-widget py-4">
      <h4 className="widget-title">Recent News</h4>
      <div className="widget-blog-posts">
      {blogPosts.slice(0, items).map((blog, i) => {
        return (
          <BlogItem 
            link={blog.link} 
            imgSrc={blog.imgSrc} 
            author={blog.author} 
            title={blog.title}
          />
        )
      })}
      </div>
    </div>
  );
};

const BlogItem: React.FC<BlogPostI> = ({link, imgSrc, author, title}) => {
  const widgetPostItemStyles = `
    .widget-post-item {
      margin-bottom: 30px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      align-items: self-start;
    }
    .widget-post-item .post-thumbnail {
      grid-column: 1/3;
      overflow: hidden;
    }
    .widget-post-item .post-thumbnail img {
      width: 100%;
      max-height: 100px;
      object-fit: cover;
    }
    .widget-post-item .post-date {
      grid-column: 3/5;
      font-size: .8rem;
      text-transform: uppercase;
      line-height: 2rem;
      color: #feb500;
    }
    .widget-post-item .post-date a p {
      text-transform: initial;
      line-height: 1.3rem;
    }

    @media (min-width: 576px) {
      .widget-post-item .post-date a p {
        font-size: .9rem;
      }
    }
  `

  return (
    <div className="widget-post-item">
    <style>{widgetPostItemStyles}</style>
      <div className="post-thumbnail">
        <a href={link}>
          <img src={imgSrc} />
        </a>
      </div>
      <div className="post-date">
        <i className="fa fa-calendar"></i> {author.date}
        <a href={link}>
          <p className="post-title">{title}</p>
        </a>
      </div>
    </div>
  )
}