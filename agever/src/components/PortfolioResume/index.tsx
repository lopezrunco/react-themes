import React from "react";

interface PortfolioItemProps {
    item: PortfolioItem;
}

interface PortfolioItem {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const portfolioItems: PortfolioItem[] = [
    {
        title: 'Work 1',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisic fugit.',
        imageUrl: 'img/work-1.jpg',
        link: '/portfolio/item'
    },
    {
        title: 'Work 2',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisic fugit.',
        imageUrl: 'img/work-2.jpg',
        link: '/portfolio/item'
    },
    {
        title: 'Work 3',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisic fugit.',
        imageUrl: 'img/work-3.jpg',
        link: '/portfolio/item'
    },
];

export const PortfolioResume: React.FC = () => {
    return (
        <section id="portfolio">
            <article className="content-wrap">
                <div className="row section-title">
                    <div className="col-lg-10">
                        <h2>Our Works</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam!</p>
                    </div>
                    <div className="col-lg-2">
                        <div className="btn btn-primary"><a href="/portfolio"><i className="fas fa-eye"></i> View more</a></div>
                    </div>
                </div>

                <div className="row portfolio-items">
                    {portfolioItems.map((el, i) => <PortfolioItem key={i} item={el} />)}
                </div>
            </article>
        </section>
    )
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
    const { title, description, imageUrl, link } = item
    return (
        <div className="col-md-4">
            <div className="portfolio-card">
                <h4>{title}</h4>
                <p>{description}</p>
                <a href={link}>
                    <img src={imageUrl} alt={title} />
                </a>
            </div>
        </div>
    )
}