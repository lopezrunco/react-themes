import React from "react";

interface PartnerLogoI {
    imageUrl: string;
    link: string;
    title: string;
}

const partnerLogos: PartnerLogoI[] = [
    { imageUrl: 'img/logo-1.png', link: '#', title: 'Company 1' },
    { imageUrl: 'img/logo-2.png', link: '#', title: 'Company 2' },
    { imageUrl: 'img/logo-3.png', link: '#', title: 'Company 3' },
    { imageUrl: 'img/logo-4.png', link: '#', title: 'Company 4' },
    { imageUrl: 'img/logo-5.png', link: '#', title: 'Company 5' },
    { imageUrl: 'img/logo-6.png', link: '#', title: 'Company 6' },
];

export const Brands: React.FC = () => {
    return (
        <section id="partners">
            <article className="content-wrap">
                <div className="row">
                    {partnerLogos.map((el, i) => (
                        <div className="col-sm-4 col-lg-2" key={i}>
                            <a href={el.link}>
                                <img src={el.imageUrl} alt={el.title} />
                            </a>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}