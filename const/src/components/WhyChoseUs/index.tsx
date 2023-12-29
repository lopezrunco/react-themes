import React from "react";

import { whyChoseUsItems } from "../../config/whyChoseUsItems";
import { Title } from "../Title";

interface ItemProps {
  size: string;
  imgSrc: string;
  link: string;
  title: string;
  description: string;
}

export const WhyChoseUs: React.FC = () => {
  const whyChoseUsStyles = `
    #why-chose-us h2 {
        color: #fff;
    }
    #why-chose-us .items div {
        padding-bottom: 80px;
    }
    #why-chose-us .items p {
        margin: 20px 0;
        color: #bbb;
        font-size: .9rem;
    }
    #why-chose-us .items a {
        color: #fff;
        font-size: .9rem;
        font-weight: 700;
        text-transform: uppercase;
        transition: ease-in-out .20s;
    }
    #why-chose-us .items .btn-read-more {
        display: inline-block;
        transform: scale(.7) translateX(15px) translateY(-13px);
    }
    #why-chose-us .items .fa {
        font-size: 12px;
    }

    @media (min-width: 576px) {
        #why-chose-us .items a:hover {
            color: #feb500;
            text-decoration: none;
        }
    }
    `;

  return (
    <section id="why-chose-us" className="bg-dark py-5 text-white">
      <article className="container py-5">
        <style>{whyChoseUsStyles}</style>
        <Title
          type="light"
          title="Why chose us?"
          subtitle="Construction Group of Industry"
        />
        <div className="row items">
          {whyChoseUsItems.map((item, i) => {
            return (
              <Item
                key={i}
                size="col-lg-4"
                imgSrc={item.imgSrc}
                link={item.link}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </article>
    </section>
  );
};

const Item: React.FC<ItemProps> = ({
  size,
  imgSrc,
  link,
  title,
  description,
}) => {
  return (
    <div className={size}>
      <img src={imgSrc} className="w-100 pb-4" />
      <a href={link}>
        <h3>{title}</h3>
      </a>
      <p>{description}</p>
      <a href={link}>
        Read more <i className="fa fa-chevron-right btn-read-more"></i>
      </a>
    </div>
  );
};
