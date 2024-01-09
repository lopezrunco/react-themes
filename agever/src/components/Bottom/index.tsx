import React from "react";

interface SocialLinkI {
    icon: string;
    link: string;
}

interface CompanyInfoI {
    name: string;
    description: string;
    socialLinks: SocialLinkI[];
}

const companyInfo: CompanyInfoI[] = [
    {
        name: 'Agever',
        description: `Lorem, ipsum dolor amet sit adelle camel amer dan for alle macal samat.`,
        socialLinks: [
            { icon: 'fab fa-instagram', link: '#' },
            { icon: 'fab fa-facebook-f', link: '#' },
            { icon: 'fab fa-linkedin-in', link: '#' },
            { icon: 'fab fa-twitter', link: '#' }
        ]
    }
];

interface ContactInfoI {
    link: string;
    iconClass: string;
    text: string;
}

const contactInfo: ContactInfoI[] = [
    {
        link: "tel:+1123987654321",
        iconClass: "fas fa-phone",
        text: "+598 0350 4579"
    },
    {
        link: "mailto:info@email.com",
        iconClass: "far fa-envelope",
        text: "info@email.com"
    },
    {
        link: "#",
        iconClass: "fas fa-map-marker-alt",
        text: "Montevideo, Uruguay"
    },
];

interface ServicesLinksI {
    title: string;
    link: string;
}

const servicesLinks: ServicesLinksI[] = [
    { title: 'Lorem ipsum dolor sit', link: '/services/item' },
    { title: 'Lorem ipsum dolor sit', link: '/services/item' },
    { title: 'Lorem ipsum dolor sit', link: '/services/item' },
    { title: 'Lorem ipsum dolor sit', link: '/services/item' },
    { title: 'Lorem ipsum dolor sit', link: '/services/item' },
]

interface PopularTagsI {
    title: string;
    link: string;
}

const popularTags: PopularTagsI[] = [
    { title: 'Mobile', link: '#' },
    { title: 'Development', link: '#' },
    { title: 'Technology', link: '#' },
    { title: 'App', link: '#' },
    { title: 'Industry', link: '#' },
    { title: 'Business', link: '#' },
    { title: 'Education', link: '#' },
    { title: 'Health', link: '#' },
]

export const Bottom: React.FC = () => {
    return (
        <section id="bottom">
            <article className="content-wrap">
                <div className="row">
                    <Bottom1 companyInfo={companyInfo[0]} />
                    <Bottom2 />
                    <Bottom3 />
                    <Bottom4 />
                </div>
            </article>
        </section>
    )
}

const Bottom1: React.FC<{ companyInfo: CompanyInfoI }> = ({ companyInfo }) => {
    const { name, description, socialLinks } = companyInfo
    return (
        <div className="col-lg-3 brand bottom-card">
            <a href="/" className="logo">{name}</a>
            <p>{description}</p>
            <ul className="social-list">
                {socialLinks.map((el, i) => (
                    <li key={i}>
                        <a href={el.link}><i className={el.icon}></i></a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Bottom2 = () => {
    return (
        <div className="col-lg-3 get-in-touch bottom-card">
            <h4>Get in Touch</h4>
            <ul>
                {contactInfo.map((el, i) => (
                    <li key={i}>
                        <a href={el.link}>
                            <i className={el.iconClass}></i> {el.text}
                        </a>
                    </li>
                ))}
                <li>
                    <a href="/contact" className="btn btn-secondary">
                        <i className="far fa-comment-alt"></i>Contact us!
                    </a>
                </li>
            </ul>
        </div>
    )
}

const Bottom3 = () => {
    return (
        <div className="col-lg-3 services bottom-card">
            <h4>Our services</h4>
            <ul>
                {servicesLinks.map((el, i) => (
                    <li key={i}>
                        <a href={el.link}>{el.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Bottom4 = () => {
    return (
        <div className="col-lg-3 tags bottom-card">
            <h4>Popular tags</h4>
            {popularTags.map((el, i) => <a key={i} href={el.link}>{el.title}</a>)}
        </div>
    )
}