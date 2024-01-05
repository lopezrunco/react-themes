import React from "react";

import { Title } from "../Title";
import { BlogPostI, blogPosts } from "../../config/blogPosts";
import { Pagination } from "../Pagination";

interface BlogListPropsI {
  items: number;
  viewMore: boolean;
}

export const BlogList: React.FC<BlogListPropsI> = ({ items, viewMore }) => {
  const BlogListStyles = `
        #blog-news h3 {
            font-size: 1rem;
        }
        #blog-news .categories a {
            display: inline-block;
            margin: 0 0 20px;
            color: #8c8c8c;
            font-style: italic;
            font-size: .9rem;
        }

        #blog-news p {
            font-size: .9rem;
        }
        #blog-news .author p {
            color: #8c8c8c;
            font-family: 'Poppins', san-serif;
            font-size: .8rem;
            line-height: normal;
        }
        #blog-news .author p span.date {
            display: block;
            color: #feb500;
            font-size: .9rem;
            text-transform: uppercase;
            font-weight: 700;
        }

        @media (min-width: 576px) {
            #blog-news .author .name {
                transform: translateX(-50px) translateY(10px);
            }
        }
    `;

  return (
    <section id="blog-news" className="py-5">
      <style>{BlogListStyles}</style>
      <article className="container">
        <Title
          type="light"
          title="Latest news"
          subtitle="Construction Group of Industry"
        />
        <div className="row items">
          {blogPosts.slice(0, items).map((item, i) => {
            return (
              <Item
                key={i}
                imgSrc={item.imgSrc}
                title={item.title}
                categories={item.categories}
                description={item.description}
                author={item.author}
                link={item.link}
              />
            );
          })}
        </div>
        {viewMore && (
          <div className="row text-center pt-sm-5">
            <div className="col">
              <a href="/blog" className="btn-rounded btn-primary-rounded">
                View more
              </a>
            </div>
          </div>
        )}
        <Pagination pages={4} />
      </article>
    </section>
  );
};

const Item: React.FC<BlogPostI> = ({
  imgSrc,
  title,
  categories,
  description,
  author,
  link,
}) => {
  return (
    <div className="col-lg-6 py-2">
      <div className="row">
        <div className="col-5">
          <a href={link}>
            <img src={imgSrc} className="w-100" />
          </a>
        </div>
        <div className="col-7">
          <h3>{title}</h3>
          <div className="categories">
            {categories.map((el, i) => (
              <a key={i}>{el}</a>
            ))}
          </div>
          <p>{description}</p>
          <div className="row author mt-4 mb-5">
            <div className="col-4">
              <img className="mr-3 mb-3" src={author.avatarSrc} />
            </div>
            <div className="col-8 name">
              <p>
                Posted by {author.name}
                <span className="date">{author.date}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
