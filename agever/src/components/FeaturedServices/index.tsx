import React from "react";

interface FeaturedServicesDataI {
    icon: string;
    title: string;
    description: string;
}

const featuredServicesData: FeaturedServicesDataI[] = [
    {
        icon: 'fas fa-globe',
        title: 'Global mode',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, earum.',
    },
    {
        icon: 'fas fa-shopping-cart',
        title: 'Shop in line',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto distinctio, nihil doloremque ipsum labore maiores.',
    },
    {
        icon: 'fas fa-mobile',
        title: 'Responsive design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur saepe repr ducimus?',
    },
];

export const FeaturedServices: React.FC = () => {
    return (
        <section id="services" className="dark-bg1-section content-light-styles">
            <article className="content-wrap">
                <div className="row">
                    {featuredServicesData.map((el, i) => (
                        <div className="col-sm-4" key={i}>
                            <i className={el.icon}></i>
                            <h4>{el.title}</h4>
                            <p>{el.description}</p>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}