import React from "react"

import { Nav } from "../../components/Nav"
import { Breadcrumbs } from "../../components/Breadcrumbs"

interface PortfolioItemI {
    title: string;
    description: string;
    quote: string;
    imgSrc: string;
}

const portfolioItemData: PortfolioItemI[] = [
    {
        title: 'Gatos siameses',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ipsam labore nostrum! Sapiente ab dolorem quia corporis. Cum temporibus, architecto quam repudiandae obcaecati nesciunt non nobis accusantium exercitationem illo. Accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ipsam labore nostrum! Sapiente ab dolorem quia corporis. Cum temporibus, architecto quam repudiandae obcaecati nesciunt non nobis accusantium exercitationem illo. Accusamus.',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore sint sed perspiciatis dolore odio commodi iure vero unde explicabo!',
        imgSrc: "../img/portolio (9).jpg"
    },
    {
        title: 'Gatos amarillos',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ipsam labore nostrum! Sapiente ab dolorem quia corporis. Cum temporibus, architecto quam repudiandae obcaecati nesciunt non nobis accusantium exercitationem illo. Accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ipsam labore nostrum! Sapiente ab dolorem quia corporis. Cum temporibus, architecto quam repudiandae obcaecati nesciunt non nobis accusantium exercitationem illo. Accusamus.',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore sint sed perspiciatis dolore odio commodi iure vero unde explicabo!',
        imgSrc: "../img/portolio (3).jpg"
    },
    {
        title: 'Gatos negros',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ipsam labore nostrum! Sapiente ab dolorem quia corporis. Cum temporibus, architecto quam repudiandae obcaecati nesciunt non nobis accusantium exercitationem illo. Accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ipsam labore nostrum! Sapiente ab dolorem quia corporis. Cum temporibus, architecto quam repudiandae obcaecati nesciunt non nobis accusantium exercitationem illo. Accusamus.',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore sint sed perspiciatis dolore odio commodi iure vero unde explicabo!',
        imgSrc: "../img/portolio (2).jpg"
    },
]

export const PortfolioItem: React.FC = () => {
    return (
        <React.Fragment>
            <header className="portfolio-item-header">
                <div className="overlay">
                    <div className="content-wrap">
                        <Nav />
                        <Breadcrumbs location="Portfolio Item" />
                    </div>
                </div>
            </header>
            <main role="main">
                <TopContent content={portfolioItemData[0]} />
                <MiddleContent content={portfolioItemData[1]} />
                <BottomContent content={portfolioItemData[2]} />
            </main>
        </React.Fragment>
    )
}

interface ContentProps {
    content: PortfolioItemI;
}

const TopContent: React.FC<ContentProps> = ({ content }) => {
    return (
        <section id="portfolio-item" className="dark-bg2-section">
            <article className="content-wrap">
                <div className="row">
                    <Content content={content} />
                    <Image src={content.imgSrc} />
                </div>
            </article>
        </section>
    )
}

const MiddleContent: React.FC<ContentProps> = ({ content }) => {
    return (
        <section id="portfolio-item" className="dark-bg1-section">
            <article className="content-wrap">
                <div className="row">
                    <Image src={content.imgSrc} />
                    <Content content={content} />
                </div>
            </article>
        </section>
    )
}

const BottomContent: React.FC<ContentProps>  = ({ content }) => {
    return (
        <section id="portfolio-item" className="dark-bg2-section">
            <article className="content-wrap">
                <div className="row">
                    <Content content={content} />
                    <Image src={content.imgSrc} />
                </div>
            </article>
        </section>
    )
}

const Content: React.FC<ContentProps>  = ({ content }) => {
    const { title, description, quote } = content
    return (
        <div className="col-sm-6">
            <h2>{title}</h2>
            <p>{description}</p>
            <blockquote>{quote}</blockquote>
        </div>
    )
}

interface ImageProps {
    src: string;
}

const Image: React.FC<ImageProps> = ({ src }) => {
    return (
        <div className="col-sm-6">
            <div className="img-wrapper">
                <img src={src} alt="Description" />
            </div>
        </div>
    )
}