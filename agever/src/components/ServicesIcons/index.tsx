import React from "react";

interface ServicesI {
    icon: string;
    title: string;
    link: string;
}

const services: ServicesI[] = [
    { icon: 'fas fa-shield-alt', title: 'Service One', link: '/services/item' },
    { icon: 'fas fa-home', title: 'Service Two', link: '/services/item' },
    { icon: 'fas fa-briefcase', title: 'Service Three', link: '/services/item' },
    { icon: 'fas fa-kiwi-bird', title: 'Service Four', link: '/services/item' }
];

export const ServicesIcons: React.FC = () => {
    return (
        <div className="services-icons">
            <ul>
                {services.map((service, index) => (
                    <li key={index}>
                        <a href={service.link}>
                            <i className={service.icon}></i>
                            <h5><a href={service.link}>{service.title}</a></h5>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}