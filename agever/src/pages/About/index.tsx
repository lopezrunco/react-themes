import React from "react"

import { Nav } from "../../components/Nav"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { FunFacts } from "../../components/FunFacts";
import { CorporateVideo } from "../../components/CorporateVideo";
import { ServicesIcons } from "../../components/ServicesIcons";

interface AboutInfoI {
    text: string;
}

interface WhyUsListItemI {
    item: string;
}

const aboutInfo: AboutInfoI[] = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit tortor, interdum sed cursus eu, sagittis ut nunc. Sed vitae tellus et arcu aliquet faucibus fermentum non lacus.' },
    { text: 'Praesent fringilla quis massa et placerat. Mauris eu dui eget urna pellentesque gravida vitae quis nibh. Ut at augue tortor. Pellentesque quis suscipit magna.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, dolorem?' },
    { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi porro dolorem repellendus laborum nisi aliquid vel earum. Laudantium eum atque nostrum laborum voluptatum aperiam velit veniam quod. Eos, nulla delectus.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit accusamus, suscipit nihil ipsa commodi nemo maiores quidem perferendis impedit? Fugiat.' },
    { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste.' },
    { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis dicta natus asperiores accusantium eos!' }
]

const quote: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolore a delectus unde ad dolorem accusantium? Quisquam soluta suscipit.'

const whyUsListItems: WhyUsListItemI[] = [
    { item: 'Lorem ipsum dolor sit isicing elit iste.' },
    { item: 'Lorem ipsum dolor sit ametr adi.' },
    { item: 'Lorem ipsum dolo iste.' },
    { item: 'Lorem ior sit amet consectetu.' }
]

interface TeamMemberI {
    imageSrc: string;
    name: string;
    description: string;
    starCount: number;
}

const teamMembers: TeamMemberI[] = [
    {
        imageSrc: 'img/team-1.jpg',
        name: 'Jose Ignacio',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        starCount: 5
    },
];

export const About: React.FC = () => {
    return (
        <React.Fragment>
            <header className="about-header">
                <div className="overlay">
                    <div className="content-wrap">
                        <Nav />
                        <Breadcrumbs location="About us" />
                    </div>
                </div>
            </header>
            <main role="main">
                <section id="content">
                    <article className="content-wrap">
                        <div className="row title">
                            <MainContent />
                            <SecContent />
                        </div>
                    </article>
                </section>
                <FunFacts />
                <CorporateVideo />
            </main>
        </React.Fragment>
    )
}

const MainContent: React.FC = () => {
    return (
        <div className="col-md-8 main-content">
            <h2>Content</h2>
            {aboutInfo.map((el, i) => <p key={i}>{el.text}</p>)}
            <blockquote>{quote}</blockquote>
            <h4>Why choose us?</h4>
            <ul className="content-list">
                {whyUsListItems.map((el, i) => <li key={i}>{el.item}</li>)}
            </ul>
        </div>
    )
}

const SecContent: React.FC = () => {
    return (
        <div className="col-md-4 sec-content">
            <ServicesIcons />
            <div className="testimonial-card">
                {teamMembers.map((el, i) => (
                    <div className="card" key={i}>
                        <img src={el.imageSrc} />
                        <h4>{el.name}</h4>
                        <p>{el.description}</p>
                        <ul>
                            {Array.from({ length: el.starCount }).map((_, starIndex) => (
                                <li className="stars" key={starIndex}>
                                    <a><i className="far fa-star"></i></a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}