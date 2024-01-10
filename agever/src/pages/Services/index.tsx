import React from "react"

import { Nav } from "../../components/Nav"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { OurSolutions } from "../../components/OurSolutions"
import { Brands } from "../../components/Brands"
import { Questions } from "../../components/Questions"

export const Services: React.FC = () => {
    return (
        <React.Fragment>
            <header className="services-header">
                <div className="overlay">
                    <div className="content-wrap">
                        <Nav />
                        <Breadcrumbs location="Services" />
                    </div>
                </div>
            </header>
            <main role="main">
                <OurSolutions />
                <Brands />
                <Questions />
            </main>
        </React.Fragment>
    )
}