import React from "react";

import { about } from "../../../../config/about";

export const QuoteSection: React.FC = () => {
    const styles = `
        #about-2 {
            padding: 0;
        }
        
        #about-2 .black-bg {
            background: #1c1d1b;
            color: #fff;
        }
        
        #about-2 .image-bg {
            background: url(${about[0].quotegImgSrc});
        }
        
        #about-2 .content-wrap {
            padding: 15%;
        }
        
        #about-2 h4 {
            margin-bottom: 40px;
            font-size: 26px;
            line-height: 35px;
            font-weight: 700;
            letter-spacing: -.4px;
        }
        
        #about-2 p {
            line-height: 28px;
            font-family: 'Fira Sans';
            font-size: 15px;
            font-weight: 300;
        }

        @media only screen and (max-width: 820px) {
            #about-2 .image-bg {
                display: none;
            }
        }
    `

    return (
        <section id="about-2">
            <style>{styles}</style>
            <article className="content-fluid">
                <div className="row">
                    <div className="black-bg col-lg-6">
                        <div className="content-wrap">
                            <h4>{about[0].quote}</h4>
                            <p>{about[0].briefAboutUs}</p>
                        </div>
                    </div>
                    <div className="image-bg col-lg-6">
                        <div className="content-wrap"></div>
                    </div>
                </div>
            </article>
    </section>
    )
}