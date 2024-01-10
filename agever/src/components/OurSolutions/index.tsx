import React from "react";

interface SolutionI {
    icon: string;
    title: string;
    description: string;
    link: string;
}

const solutions: SolutionI[] = [
    {
        icon: 'fas fa-anchor',
        title: 'Service One',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ex placeat, explicabo mollitia nesciunt beatae pariatur cupiditate quod facilis minima?',
        link: '/services/item'
    },
    {
        icon: 'fas fa-anchor',
        title: 'Service Two',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ex placeat, explicabo mollitia nesciunt beatae pariatur cupiditate quod facilis minima?',
        link: '/services/item'
    },
    {
        icon: 'fab fa-android',
        title: 'Service Three',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ex placeat, explicabo mollitia nesciunt beatae pariatur cupiditate quod facilis minima?',
        link: '/services/item'
    },
    {
        icon: 'fab fa-app-store',
        title: 'Service Four',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ex placeat, explicabo mollitia nesciunt beatae pariatur cupiditate quod facilis minima?',
        link: '/services/item'
    },
    {
        icon: 'fas fa-archive',
        title: 'Service Five',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ex placeat, explicabo mollitia nesciunt beatae pariatur cupiditate quod facilis minima?',
        link: '/services/item'
    },
    {
        icon: 'fas fa-at',
        title: 'Service Six',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ex placeat, explicabo mollitia nesciunt beatae pariatur cupiditate quod facilis minima?',
        link: '/services/item'
    },
];

export const OurSolutions: React.FC = () => {
    return (
        <section id="our-solutions">
            <article className="content-wrap">
                <div className="row title">
                    <div className="col-sm-9">
                        <h2>Our Solutions</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-sm-3">
                        <a href="/contact" className="btn btn-primary uppercase"><i className="fas fa-pen"></i> Contact us</a>
                    </div>
                </div>
                <div className="row content">
                    {solutions.map((el, i) => <Solution key={i} item={el} />)}
                </div>
            </article>
        </section>
    )
}

const Solution: React.FC<{ item: SolutionI }> = ({ item }) => {
    const { icon, title, description, link } = item
    return (
        <div className="col-sm-6">
            <div className="card">
                <i className={icon}></i>
                <h4>{title}</h4>
                <p>{description}</p>
                <a href={link}>
                    <i className="fas fa-arrow-circle-right"></i>
                </a>
            </div>
        </div>
    )
}