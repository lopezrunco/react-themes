import React from "react"

interface TitleProps {
	title: string
	subtitle: string
}

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => (
    <div className="row">
        <div className="col-12 title">
            <h6>{subtitle}</h6>
            <h2>{title}</h2>
        </div>
    </div>
)