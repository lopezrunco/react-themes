import React from "react";

import { TestimonialsI, testimonials } from "../../config/testimonials";

export const Testimonials: React.FC = () => {
  const testimonialStyles = `
    @media (min-width: 576px) {
      #testimonials .row {
        width: 65%;
        margin: 0 auto;
      }
      #testimonials img {
        width: 130px;
      }
      #testimonials blockquote,
      #testimonials .blockquote-f {
        padding-left: 40px;
      }
      cite {
        display: inline-block;
      }
    }
  `;

  return (
    <section id="testimonials" className="bg-primary py-5 text-white">
      <style>{testimonialStyles}</style>
      {testimonials.map((item, i) => {
        return (
          <Item
            key={i}
            imgSrc={item.imgSrc}
            name={item.name}
            position={item.position}
            quote={item.quote}
          />
        );
      })}
    </section>
  );
};

const Item: React.FC<TestimonialsI> = ({ imgSrc, name, position, quote }) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-2 d-none d-sm-block">
          <img src={imgSrc} />
        </div>
        <div className="col-10 position-relative my-0 mx-auto">
          <blockquote className="blockquote font-italic">{quote}</blockquote>
          <span className="blockquote-f text-white">
            {name} <cite title="Source Title">{position}</cite>
          </span>
        </div>
      </div>
    </div>
  );
};
