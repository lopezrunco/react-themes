import React from "react";

import { about, mission } from "../../../../config/about";

export const MissionSection: React.FC = () => {
    const styles = `
        #about-3 h3 {
            margin-bottom: 40px;
            font-size: 26px;
            line-height: 30px;
            color: #1c1d1b;
            font-weight: 700;
            letter-spacing: -1px;
        }

        #about-3 .item .box-20 {
            width: 20%;
            position: relative;
            float: left;
        }

        #about-3 .item .box-80 {
            width: 80%;
            float: left;
        }

        #about-3 p {
            margin-bottom: 25px;
            font-size: 15px;
            line-height: 24px;
        }

        #about-3 i {
            color: #3f9f42;
            font-size: 70px;
        }

        #about-3 .item h5 {
            margin-bottom: 10px;
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
        }

        @media only screen and (max-width: 820px) {
            #about-3 {
                padding: 60px 0px;
                text-align: center;
            }

            #about-3 .item .box-20,
            #about-3 .item .box-80 {
                margin-bottom: 10px;
                width: 100%;
            }

            #about-3 h3 {
                margin-bottom: 30px;
            }

            #about-3 .why-we-exist {
                padding-top: 30px;
            }
        }
    `

    return (
        <section id="about-3">
            <style>{styles}</style>
            <article className="content-wrap">
                <div className="row">
                    <div className="col-lg-6">
                        <h3>Our mission</h3>
                        {mission.map((el, i) => (
                            <div key={i} className="item">
                                <div className="box-20">
                                    <i className={el.icon}></i>
                                </div>
                                <div className="box-80">
                                    <h5>{el.title}</h5>
                                    <p>{el.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="why-we-exist col-lg-6">
                        <h3>Why trust in us?</h3>
                        {about[0].whyUs.map((el, i) => <p key={i}>{el}</p>)}
                    </div>
                </div>
            </article>
        </section>
    )
}