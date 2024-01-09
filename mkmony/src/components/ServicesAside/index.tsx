import React from "react";

import { ServicesList } from "../ServicesList";
import { SingleTestimonial } from "../SingleTestimonial";

export const ServicesAside: React.FC = () => {
    const styles = `
        #aside {
            margin: 70px 0 30px;
            border-top: 3px solid #213364;
            padding-top: 20px;
        }

        @media only screen and (max-width: 820px) {
            #aside {
                margin-top: 30px;
            }
        }
    `

    return (
        <aside id="aside">
            <style>{styles}</style>
            <div className="row">
                <ServicesList />
                <SingleTestimonial />
            </div>
        </aside>
    )
}