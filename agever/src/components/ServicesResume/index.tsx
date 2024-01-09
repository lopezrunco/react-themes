import React from "react";

interface servicesResumeDataI {
    iconClass: string;
    title: string;
    description: string;
}

const servicesResumeData: servicesResumeDataI[] = [
    {
        iconClass: 'fas fa-globe',
        title: 'Global mode',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, earum.',
    },
    {
        iconClass: 'fas fa-shopping-cart',
        title: 'Shop in line',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto distinctio, nihil doloremque ipsum labore maiores.',
    },
    {
        iconClass: 'fas fa-mobile',
        title: 'Responsive design',
        description: 'Lorem ipsum dolor sit amet consectet tenetur saepe reprehenderit velit itam ducimus?',
    },
];

export const ServicesResume: React.FC = () => {
    return (
        <section className="content-wrap">
            <article id="services" className="row">
                {servicesResumeData.map((el, i) => (
                    <div className="col-sm-4" key={i}>
                        <i className={el.iconClass}></i>
                        <h4>{el.title}</h4>
                        <p>{el.description}</p>
                    </div>
                ))}
            </article>
        </section>
    )
}