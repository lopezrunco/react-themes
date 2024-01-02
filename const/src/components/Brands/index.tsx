import React from "react";

import { BrandI, brands } from "../../config/brands";

export const Brands: React.FC = () => {
  const brandsStyles = `
        @media (max-width: 380px) {
            #brands {
                display: none;
            }
        }
    `;

  return (
    <section id="brands" className="bg-light py-5">
      <style>{brandsStyles}</style>
      <article className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          {brands.map((item, i) => {
            return <Item key={i} imgSrc={item.imgSrc} link={item.link} />;
          })}
          <div className="col-sm-1"></div>
        </div>
      </article>
    </section>
  );
};

const Item: React.FC<BrandI> = ({ imgSrc, link }) => {
  return (
    <div className="col-md-2">
      <a href={link}>
        <img className="w-100 p-5 p-sm-3" src={imgSrc} />
      </a>
    </div>
  );
};
