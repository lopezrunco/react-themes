import React from "react"

import { Nav } from "../../components/Nav"
import { ServicesResume } from "../../components/ServicesResume";
import { CorporateVideo } from "../../components/CorporateVideo";
import { Plans } from "../../components/Plans";
import { PortfolioResume } from "../../components/PortfolioResume";
import { Brands } from "../../components/Brands";
import { QuickContactForm } from "../../components/QuickContactForm";

interface SlideConfig {
    title: string;
    btnLink: string;
    btnIcon: string;
    btnText: string;
}

const slideConfig: SlideConfig = {
    title: 'Lorem ipsum dolor sit samet',
    btnLink: '/contact',
    btnIcon: 'fas fa-pen',
    btnText: 'Contact us',
};

export const Home: React.FC = () => {
    return (
        <React.Fragment>
            <header className="home-header">
                <div className="overlay">
                    <div className="content-wrap">
                        <Nav />
                        <Slide />
                    </div>
                </div>
            </header>
            <main role="main">
                <ServicesResume />
                <CorporateVideo />
                <Plans />
                <PortfolioResume />
                <Brands />
                <QuickContactForm />
            </main>
        </React.Fragment>
    )
}

const Slide: React.FC = () => (
    <div className="slide-content">
        <h2 className="slidetext">{slideConfig.title}</h2>
        <a className="btn btn-primary" href={slideConfig.btnLink}><i className={slideConfig.btnIcon}></i> {slideConfig.btnText}</a>
    </div>
)