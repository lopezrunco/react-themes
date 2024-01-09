import React from "react"

import { testimonials } from "../../config/testimonials"

export const SingleTestimonial: React.FC = () => {
    const { name, position, testimonial } = testimonials[0]

    const styles = `
        #aside .testimonial .quote {
            position: relative;
            border-top: 3px solid #213364;
            padding-top: 30px;
        }
        
        #aside .testimonial .quote p {
            position: relative;
            background: #eeeff2;
            margin: 0 0 23px;
            padding: 25px 30px 60px;
            font-size: 16px;
            line-height: 28px;
            font-weight: 300;
        }
        
        #aside .testimonial .quote i {
            position: absolute;
            bottom: 0px;
            right: 2px;
            font-size: 50px;
        }
        
        #aside .testimonial .quote p::after {
            content: '';
            position: absolute;
            bottom: -14px;
            left: 65px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 14px 14px 0 0;
            border-color: #eeeff2 transparent transparent;
        }
        
        #aside .testimonial .author img {
            display: block;
            float: left;
            margin-right: 10px;
            border-radius: 50%;
        }
        
        #aside .testimonial .author .info h6 {
            margin-top: 2px;
            margin-bottom: 5px;
            font-weight: 600;
            text-transform: none;
            font-family: 'Nunito', sans-serif;
            color: #1c1d1b;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0px;
        }
        
        #aside .testimonial .author .info span {
            font-size: 13px;
        }

        #aside .testimonial.download-files .quote {
            margin-top: 30px;
        }

        @media only screen and (max-width: 820px) {
            #aside .testimonial .quote {
                padding-top: 40px;
            }
        
            #aside .testimonial .author .info span {
                font-size: 8px;
                line-height: 8px;
            }
        }

        @media only screen and (max-width: 380px) {
            #aside .testimonial .author .info span {
                font-size: 16px;
                line-height: 16px;
            }
        }
    `

    return (
        <div className="col-12 testimonial">
            <style>{styles}</style>
            <div className="quote">
                <p>{testimonial}</p>
                <i className="fas fa-quote-left"></i>
            </div>
            <div className="author">
                <img src="../assets/staff_3-52x52.jpg" alt="" className="avatar" />
                <div className="info">
                    <h6>{name}</h6>
                    <span>{position}</span>
                </div>
            </div>
        </div>
    )
}