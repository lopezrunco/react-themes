import React from "react";

interface BreadcrumbsI {
    location: string
}

export const Breadcrumbs: React.FC<BreadcrumbsI> = ({ location }) => (
    <div className="slide-content">
        <h2 className="slidetext lowercase">{location}</h2>
        <div className="breadcrumbs">
            <ul>
                <li><a href="/">Home / </a></li>
                <li><a href="" className="active">{location}</a></li>
            </ul>
        </div>
    </div>
)