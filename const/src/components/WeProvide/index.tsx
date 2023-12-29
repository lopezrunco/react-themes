import React from "react";

import { weProvide } from "../../config/weProvideList";

export const WeProvide: React.FC = () => {
  const weProvideStyles = `
    #we-provide h2 {
        margin: 0 0 25px;
        color: #444;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 2.8rem;
    }
    #we-provide h2 span {
        display: block;
        color: #feb500;
        font-weight: 400;
    }
    #we-provide ul {
        padding: 25px 0;
        margin: 0 0 20px;
        font-family: Poppins;
        font-size: .9rem;
        line-height: normal;
    }
    #we-provide ul li:before {
        content: '';
        background: #feb500;
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 15px;
    }
        
    @media screen and (min-width: 576px) {
        #we-provide h2 span {
            display: initial;
        }
        #we-provide ul li {
            margin-bottom: 8px;
        }
        #we-provide .img-box {
            text-align: center;
            transform: translateY(-100px);
        }
        #we-provide .img-box img {
            position: relative;
            z-index: 20;
        }
        #we-provide .behind-bg {
            max-width: 460px;
            height: 360px;
            position: absolute;
            left: 0;
            right: 0;
            top: 200px;
            background: white;
            margin: auto;
            z-index: 10;
            -webkit-box-shadow: 0px 0px 78px #d6d6d6;
            box-shadow: 0px 0px 78px #d6d6d6;
        }
    }
    `;

  return (
    <section id="we-provide" className="bg-light py-5">
      <style>{weProvideStyles}</style>
      <article className="container">
        <div className="row pt-5">
          <div className="col-lg-6">
            <h2 className="section-title">
              Lorem ipsum do consectetur <span>set amir</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur ili adipiscing elit. Donec
              nec eros eget pellentesque et non erat.
            </p>
            <ul className="list-unstyled">
              {weProvide.map((item) => {
                return <li key={item.id}>{item.text}</li>;
              })}
            </ul>
            <a href="#" className="btn btn-dark-rounded">
              View more
            </a>
          </div>

          <div className="col-6 d-none d-lg-block">
            <div className="img-box">
              <div className="behind-bg"></div>
              <img width="380" src="./assets/byindustry.png" alt="We provide" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
