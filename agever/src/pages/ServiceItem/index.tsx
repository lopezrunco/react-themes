import React from "react"

import { Nav } from "../../components/Nav"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { ShareThis } from "../../components/ShareThis";
import { ServicesIcons } from "../../components/ServicesIcons";

interface ServiceI {
    text: string;
}

const serviceData: ServiceI[] = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit tortor, interdum sed cursus eu, sagittis ut nunc. Sed vitae tellus et arcu aliquet faucibus fermentum non lacus.' },
    { text: 'Praesent fringilla quis massa et placerat. Mauris eu dui eget urna pellentesque gravida vitae quis nibh. Ut at augue tortor. Pellentesque quis suscipit magna.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, dolorem?' },
    { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi porro dolorem repellendus laborum nisi aliquid vel earum. Laudantium eum atque nostrum laborum voluptatum aperiam velit veniam quod. Eos, nulla delectus.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit accusamus, suscipit nihil ipsa commodi nemo maiores quidem perferendis impedit? Fugiat.' },
    { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste.' },
    { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis dicta natus asperiores accusantium eos!' }
]

const quote: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolore a delectus unde ad dolorem accusantium? Quisquam soluta suscipit.'

export const ServiceItem: React.FC = () => {
    return (
        <React.Fragment>
            <header className="service-detail">
                <div className="overlay">
                    <div className="content-wrap">
                        <Nav />
                        <Breadcrumbs location="Service item" />
                    </div>
                </div>
            </header>
            <main role="main">
                <section id="content">
                    <article className="content-wrap">
                        <div className="row title">
                            <MainContent />
                            <div className="col-md-4">
                                <ShareThis />
                                <ServicesIcons />
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </React.Fragment>
    )
}

const MainContent: React.FC = () => {
    return (
        <div className="col-md-8 main-content">
            <h2>Special price only for you</h2>
            {serviceData.map((el, i) => <p key={i}>{el.text}</p>)}
            <blockquote>{quote}</blockquote>
        </div>
    )
}