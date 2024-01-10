import React from "react"

import { Nav } from "../../components/Nav"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { Map } from "../../components/Map"

interface InfoCardI {
    icon: string;
    link: string;
    linkText: string;
    description: string;
}

const infoCards: InfoCardI[] = [
    { icon: 'fas fa-phone', link: 'tel:+59890123456', linkText: '+598 90 123 456', description: 'Lorem ipsum dolor sdit, amet consectetur adipisicing elit.' },
    { icon: 'fas fa-envelope', link: 'mailto:info@email.com', linkText: 'info@email.com', description: 'Lorem ipsum dolor sit, amet elit ipsum dolor sit.' },
    { icon: 'fas fa-map-marker-alt', link: '#', linkText: 'Montevideo, Uruguay', description: 'Ipsum dolor sit consect adipisicing ipsum dolor sit.' },
];

export const Contact: React.FC = () => {
    return (
        <React.Fragment>
            <header className="contact-header">
                <div className="overlay">
                    <div className="content-wrap">
                        <Nav />
                        <Breadcrumbs location="Contact" />
                    </div>
                </div>
            </header>
            <main role="main">
                <ContactInfo />
                <Map />
                <ContactForm />
            </main>
        </React.Fragment>
    )
}

const ContactInfo: React.FC = () => {
    return (
        <section id="contact-info">
            <article className="content-wrap">

                <div className="row title">
                    <div className="col-sm-8">
                        <h2>Contact info</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="row info">
                    {infoCards.map((el, i) => (
                        <div className="col-sm-4" key={i}>
                            <div className="info-card">
                                <i className={el.icon}></i>
                                <h4><a href={el.link}>{el.linkText}</a></h4>
                                <p>{el.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}

const ContactForm: React.FC = () => {
    return (
        <section id="contact-form">
            <article className="content-wrap">

                <div className="row">
                    <div className="col-sm-12">
                        <div className="row section-title">
                            <h2>Contact us</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, deleniti?</p>
                        </div>
                        <div className="row form">
                            <form action="post">
                                <input type="text" name="name" id="name" placeholder="Name" />
                                <input type="email" name="email" id="email" placeholder="Email" />
                                <input type="number" name="phone" id="phone" placeholder="Phone" />
                                <select name="budget" id="budget">
                                    <option selected disabled>Choose your plan</option>
                                    <option>I want a custom plan</option>
                                    <option>Plan 1</option>
                                    <option>Plan 2</option>
                                    <option>Plan 3</option>
                                </select>
                                <textarea name="message" id="message">Message</textarea>
                                <input type="button" value="Send now!" className="btn btn-primary uppercase" />
                            </form>
                        </div>
                    </div>
                </div>

            </article>
        </section>
    )
}