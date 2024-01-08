import React from "react";

import { about } from "../../../../config/about";

export const FooterSection: React.FC = () => {
    const style = `
        #about-4 {
            padding: 0;
            background: url(${about[0].footerMesage});
            text-align: center;
            color: #fff;
        }

        #about-4 .overlay {
            padding: 100px 0;
            background: #00000070;
        }

        #about-4 h2 {
            margin-bottom: 0 !important;
            line-height: 60px;
            text-transform: uppercase;
            font-size: 44px;
            font-weight: 700;
            font-family: 'Nunito', sans-serif;
            letter-spacing: -2.4px;
        }

        @media only screen and (max-width: 820px) {
            #about-4 h2 {
                line-height: 50px;
                font-size: 30px;
            }
        }
    `

    return (
        <section id="about-4">
            <style>{style}</style>
            <article className="overlay">
                <div className="content-wrap">
                    <div className="row">
                        <div className="col">
                            <h2>{about[0].footerMesage}</h2>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}