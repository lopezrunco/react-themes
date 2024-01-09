import React from "react"

import { downloadLinks, projects, projectsI } from "../../config/projects"

import { SingleTestimonial } from "../../components/SingleTestimonial";
import { ServicesList } from "../../components/ServicesList";

interface MainContentProps {
    project: projectsI;
}

interface DetailsProps {
    project: projectsI;
}

interface ClientFeedBackProps {
    project: projectsI;
}

interface ClientFeedbackI {
    client: string;
    position: string;
    feedback: string;
    avatar: string;
}

export const PortfolioItem: React.FC = () => {
    const portfolioItemStyles = `
        #portfolio-detail {
            margin-top: 70px;
        }
        
        #portfolio-detail img {
            margin-bottom: 30px;
        }
        
        #portfolio-detail h3 {
            margin-bottom: 20px;
            font-family: 'Nunito', sans-serif;
            font-size: 36px;
            font-weight: 700;
            line-height: 40px;
            letter-spacing: -1px;
            color: #1c1d1b;
        }
        
        #portfolio-detail p {
            color: #1c1d1b;
            font-size: 15px;
            font-weight: 300;
            line-height: 24px;
        }
        
        #portfolio-detail .video-bg {
            background: url(./assets/case_9.jpg);
            background-size: cover;
        }
        
        #portfolio-detail .video-bg {
            height: 240px;
        }
        
        #portfolio-detail .video-bg i {
            font-size: 70px;
        }
        
        #portfolio-detail h4 {
            margin: 25px 0;
            font-size: 20px;
            text-transform: uppercase;
        }
        
        #portfolio-detail .project-details {
            position: relative;
            margin-bottom: 5px;
            border-left: 5px solid #1c1d1b;
            padding: 15px 30px;
            background: #f6f7f8;
            font-size: 15px;
            font-weight: 700;
            text-transform: uppercase;
        }
        
        #portfolio-detail .project-details .title {
            position: relative;
        
        }
        
        #portfolio-detail .project-details .desc {
            position: absolute;
            right: 30px;
            top: 15px;
            text-transform: capitalize;
            font-weight: 400;
        }
        
        #portfolio-detail .client-testimonial {
            position: relative;
        }
        
        #portfolio-detail .client-testimonial img {
            padding-right: 50px;
            border-right: 1px solid #ccc;
            width: 100%;
        }
        
        #portfolio-detail .client-testimonial h6,
        #portfolio-detail .client-testimonial span {
            text-align: center;
        }
        
        #portfolio-detail .client-testimonial h6 {
            margin-bottom: 0;
            font-size: 15px;
            font-weight: 700;
            letter-spacing: 0px;
            color: #515662 !important;
        }
        
        #portfolio-detail .client-testimonial span {
            font-size: 15px;
            font-weight: 500;
            line-height: 1.3;
            color: #888888;
        }
        
        #portfolio-detail .client-testimonial p {
            padding-left: 15px;
            padding-bottom: 0;
            padding-top: 70px;
            font-size: 18px;
            line-height: 36px;
            font-weight: 300;
            color: #1c1d1bb3;
        }
        
        #portfolio-detail .client-testimonial i {
            position: absolute;
            padding: 20px;
            left: 247px;
            bottom: 144px;
            font-size: 26px;
            background: #fff;
        }
        
        #portfolio-detail .challenge {
            margin: 50px 0;
        }
        
        #portfolio-detail .challenge .green-title {
            margin-bottom: 30px;
            padding: 10px 25px;
            text-transform: uppercase;
            background: #3f9f42;
            color: #fff;
            font-weight: 600;
            font-size: 13px;
            display: inline-block;
        }
        
        
        #portfolio-detail .challenge h4 {
            margin: 15px 0;
            font-size: 24px;
            text-transform: none;
        }

        @media only screen and (max-width: 820px) {
            #portfolio-detail .video-wrap {
                margin-bottom: 30px;
                padding: 0
            }

            #portfolio-detail .video-bg {
                box-shadow: none;
            }

            #portfolio-detail .client-testimonial {
                margin-top: 30px;
            }

            #portfolio-detail .client-testimonial img {
                margin-bottom: 10px;
                border-right: none;
                padding-right: 0;
            }

            #portfolio-detail .client-testimonial i {
                display: none;
            }

            #portfolio-detail .client-testimonial p {
                padding-left: 0;
                padding-top: 0;
                line-height: 32px;
                font-size: 18px;
            }

            #portfolio-detail .client-testimonial h6 {
                font-size: 12px;
            }

            #portfolio-detail .client-testimonial span {
                font-size: 12px;
            }

            #portfolio-detail .challenge {
                margin: 50px 0 0px;
            }

            #portfolio-detail .download-files {
                margin-top: 30px;
            }
        }
    `

    return (
        <div className="content-wrap">
            <style>{portfolioItemStyles}</style>
            <div className="row">
                <div className="col-lg-9 mb-5">
                    <main id="main">
                        <section id="portfolio-detail">
                            <article className="row">
                                <MainContent project={projects[0]} />
                                <Details project={projects[0]} />
                                <ClientFeedBack project={projects[0]} />
                            </article>
                        </section>
                    </main>
                </div>
                <div className="col-lg-3 mt-5">
                    <Aside />
                </div>
            </div>
        </div>
    )
}

const MainContent: React.FC<MainContentProps> = ({ project }) => {
    const { imgSrc, title, description, videoSrc } = project
    return (
        <React.Fragment>
            <div className="col-12">
                <img src={imgSrc} />
            </div>
            <div className="col-lg-12">
                <h3>{title}</h3>
            </div>
            <div className="col-lg-6">
                <p>{description}</p>
            </div>
            <div className="video-wrap col-lg-6">
                <a className="video-bg" href={videoSrc} target="_blank">
                    <i className="fas fa-play-circle"></i>
                </a>
            </div>
        </React.Fragment>
    )
}

const Details: React.FC<DetailsProps> = ({ project }) => {
    const { details } = project
    const { client, location, started, completed, value, category } = details[0]

    return (
        <div className="col-12">
            <h4>Details</h4>
            <div className="project-details">
                <div className="title">Client name:</div>
                <div className="desc">{client}</div>
            </div>
            <div className="project-details">
                <div className="title">Location:</div>
                <div className="desc">{location}</div>
            </div>
            <div className="project-details">
                <div className="title">Started:</div>
                <div className="desc">{started}</div>
            </div>
            <div className="project-details">
                <div className="title">Completed:</div>
                <div className="desc">{completed}</div>
            </div>
            <div className="project-details">
                <div className="title">Value:</div>
                <div className="desc">{value}</div>
            </div>
            <div className="project-details">
                <div className="title">Category:</div>
                <div className="desc">{category}</div>
            </div>
        </div>
    )
}

const ClientFeedBack: React.FC<ClientFeedBackProps> = ({ project }) => {
    const { clientFeedback } = project
    const { client, position, feedback, avatar } = clientFeedback as ClientFeedbackI

    return (
        <div className="client-testimonial col-lg-12">
            <h4>Testimonial</h4>
            <div className="row">
                <div className="col-4">
                    <img src={avatar} />
                    <h6>{client}</h6>
                    <span>{position}</span>
                    <i className="fas fa-quote-right"></i>
                </div>
                <div className="col-8">
                    <p>{feedback}</p>
                </div>
            </div>
        </div>
    )
}

const Aside: React.FC = () => {
    const asideStyles = `
        #aside .featured-cases h5 {
            margin-bottom: 25px !important;
            font-weight: 700;
        }

        #aside .featured-cases .case-item {
            border-bottom: 1px solid #ccc;
            padding-bottom: 15px;
            margin-bottom: 15px;
        }

        #aside .featured-cases .case-item:last-child {
            border-bottom: none;
        }

        #aside .featured-cases .case-item img {
            float: left;
            margin-right: 15px;
        }

        #aside .featured-cases .case-item h4 {
            font-size: 12px;
            line-height: 18px;
            text-transform: uppercase;
        }

        #aside .featured-cases .case-item span {
            margin-top: 8px;
            font-size: 12px;
            line-height: 16px;
            font-weight: 300;
            font-family: 'Fira Sans';
        }

        #aside .download-item {
            margin-bottom: 10px;
            padding: 15px;
            text-transform: uppercase;
            font-size: 16px;
            background: #000;
        }

        #aside .download-item span {
            color: #fff;
        }

        #aside .download-item i {
            float: left;
            color: #fff;
            font-size: 28px;
            padding-right: 15px;
            border-right: 3px solid #fff;
            margin-right: 15px;
        }
    `

    return (
        <aside id="aside" className="aside-portfolio-detail">
            <style>{asideStyles}</style>
            <div className="row">
                <div className="col-12 testimonial download-files">
                    {downloadLinks.map((el, i) => (
                        <div className="download-item" key={i}>
                            <a href={el.link}>
                                <i className={el.icon}></i>
                                <span>{el.text}</span>
                            </a>
                        </div>
                    ))}
                    <SingleTestimonial />
                    <div className="mt-5">
                        <ServicesList />
                    </div>
                </div>
            </div>
        </aside>
    )
}