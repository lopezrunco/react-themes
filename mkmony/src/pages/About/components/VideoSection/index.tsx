import React from "react"

import { about } from "../../../../config/about"

export const VideoSection: React.FC = () => {
    const styles = `
        #about-1 h2 {
            font-family: 'Nunito', sans-serif;
            font-size: 34px;
            line-height: 40px;
            letter-spacing: -2.4px;
        }
        
        #about-1 p {
            font-family: 'Fira Sans';
            font-size: 15px;
            font-weight: 300;
            line-height: 28px;
            color: #1c1d1b;
        }

        @media only screen and (max-width: 820px) {
            #about-1 {
                padding: 0px 0px 50px;
                margin-top: 65px;
            }

            #about-1 .video-bg {
                box-shadow: none;
                background-position: -202px;
            }

            #about-1 .video-wrap {
                padding: 0px;
            }

            #about-1 .video-wrap {
                margin-bottom: 20px;
            }
        }
    `

    return (
        <section id="about-1">
            <style>{styles}</style>
            <article className="content-wrap">
                <div className="row">
                    <div className="video-wrap col-lg-6">
                        <a className="video-bg" href={about[0].aboutVideoSrc} target="_blank">
                            <i className="fas fa-play-circle"></i>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <h2>Our corporate video</h2>
                        {about[0].aboutVideoText.map((el, i) => <p key={i}>{el}</p>)}
                    </div>
                </div>
            </article>
        </section>
    )
}