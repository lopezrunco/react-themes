import React from "react";

import { SlideProps } from "../../types";

const slidesImgs: string[] = [
  "./assets/slide-1.png",
  "./assets/slide-2.png",
  "./assets/slide-3.png",
];

export const Slider: React.FC = () => {
  const sliderStyles = `
    .carousel-control-prev,
    .carousel-control-next {
        top: 50%;
        height: 30px;
        width: 30px;
        background: rgba(0, 0, 0, .5);
        transform: translateY(-50%);
        opacity: 0;
        transition: ease-in-out .25s;
    }
    .carousel-control-prev:focus,
    .carousel-control-next:focus {
        opacity: 1;
    }
    .carousel-control-prev {
        left: 10px;
    }
    .carousel-control-next {
        right: 10px;
    }
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        width: 10px;
    }
    .carousel-caption p.lead {
        font-size: 10px;
        line-height: normal;
        font-weight: 300;
        color: #fff;
    }
    .carousel-caption h5 {
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 700;
        line-height: normal;
    }
    .carousel-caption p.subtitle {
        font-size: 7px;
        text-transform: uppercase;
        line-height: normal;
    }
    .carousel-caption p.lead,
    .carousel-caption h5,
    .carousel-caption p.subtitle {
        margin-bottom: 3px;
    }
    .carousel-caption p.subtitle {
        margin-bottom: 10px;
    }
    #slider .btn {
        padding: 8px 20px;
        font-size: 10px;
        font-weight: bold;
        border: none;
    }

    @media screen and (min-width: 576px) {
        #slider,
        #section-header {
          transform: translateY(-35px);
        }
        .carousel-caption {
          top: 50%;
          transform: translateY(-40%);
        }
        #slider .lead {
          padding-bottom: .4rem;
          font-size: 1.3rem;
        }
        #slider h5 {
          padding-bottom: .5rem;
          font-size: 3rem;
        }
        #slider .subtitle {
          font-size: 1.3rem;
        }
        #slider .btn {
          margin: 20px 0 0;
          padding: 10px 40px;
          font-size: .7rem;
        }
        .carousel-control-prev,
        .carousel-control-next {
          height: 50px;
          width: 50px;
        }
    }
    `;

  return (
    <section id="slider" className="mt-3 mt-lg-0">
      <style>{sliderStyles}</style>
      <article className="container-fluid p-0">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <Slide
              isActive={true}
              imgSrc={slidesImgs[0]}
              imgAlt={"First slide"}
              captionLead={"Lorem ipsum dolor sit amet."}
              captionTitle={"Construction web"}
              captionSubtitle={"Construction group of industry"}
              link={"/projects"}
              linkText={"View proyects"}
            />
            <Slide
              isActive={false}
              imgSrc={slidesImgs[1]}
              imgAlt={"Second slide"}
              captionLead={"Lorem ipsum dolor sit amet."}
              captionTitle={"Construction web"}
              captionSubtitle={"Construction group of industry"}
              link={"/projects"}
              linkText={"View proyects"}
            />
            <Slide
              isActive={false}
              imgSrc={slidesImgs[2]}
              imgAlt={"Third slide"}
              captionLead={"Lorem ipsum dolor sit amet."}
              captionTitle={"Construction web"}
              captionSubtitle={"Construction group of industry"}
              link={"/projects"}
              linkText={"View proyects"}
            />
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

const Slide: React.FC<SlideProps> = ({
  isActive,
  imgSrc,
  imgAlt,
  captionLead,
  captionTitle,
  captionSubtitle,
  link,
  linkText,
}) => {
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      <img className="d-block w-100" src={imgSrc} alt={imgAlt} />
      <div className="carousel-caption">
        <p className="lead">{captionLead}</p>
        <h5>{captionTitle}</h5>
        <p className="subtitle">{captionSubtitle}</p>
        <a href={link} className="btn btn-primary">
          {linkText}
        </a>
      </div>
    </div>
  );
};
