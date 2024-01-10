import React from "react"

import { Nav } from "../../components/Nav"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { FeaturedServices } from "../../components/FeaturedServices";

interface PortfolioDataI {
    title: string;
    description: string;
    link: string;
    imgSrc: string;
}

const portfolioData: PortfolioDataI[] = [
    {
        title: 'Portfolio Item 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '/portfolio/item',
        imgSrc: 'img/portolio (1).jpg'
    },
    {
        title: 'Portfolio Item 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '/portfolio/item',
        imgSrc: 'img/portolio (2).jpg'
    },
    {
        title: 'Portfolio Item 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '/portfolio/item',
        imgSrc: 'img/portolio (3).jpg'
    },
    {
        title: 'Portfolio Item 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '/portfolio/item',
        imgSrc: 'img/portolio (4).jpg'
    },
    {
        title: 'Portfolio Item 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '/portfolio/item',
        imgSrc: 'img/portolio (5).jpg'
    },
    {
        title: 'Portfolio Item 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '/portfolio/item',
        imgSrc: 'img/portolio (6).jpg'
    },
]

export const Portfolio: React.FC = () => {
    return (
        <React.Fragment>
            <header className="portfolio-header">
                <div className="overlay">
                    <div className="content-wrap">
                        <Nav />
                        <Breadcrumbs location="Our portfolio" />
                    </div>
                </div>
            </header>
            <main role="main">
                <PortfolioGrid />
                <FeaturedServices />
            </main>
        </React.Fragment>
    )
}

const PortfolioGrid: React.FC = () => {
    return (
        <section id="portfolio-grid" className="dark-bg2-section">
            <article className="content-wrap">
                <div className="row title">
                    <div className="col">
                        <h2>Latest works</h2>
                    </div>
                </div>
                <div className="row">
                    {portfolioData.map((el, i) => (
                        <div key={i} className="col-sm-6 col-lg-4">
                            <div className="portfolio-item">
                                <h4>{el.title}</h4>
                                <p>{el.description}</p>
                                <div className="img-wrap">
                                    <a href={el.link}>
                                        <img src={el.imgSrc} alt={el.title} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}