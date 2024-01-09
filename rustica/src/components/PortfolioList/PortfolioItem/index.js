import React from "react"
import { Link } from "react-router-dom"
import './style.scss'

const PortfolioItem = ({
    // Deconstruct the prop into the content components
    portfolioObject: {
        title,
        description,
        subtitle,
        bgImage,
        id
    },
}) => {
    return (
        <div className='col-lg-4 blog-item-wrapper'>
            <Link to={`/catalogo/${id}`}>
                <img className='portfolio-item-cover' src={bgImage} alt='Portfolio item' />
                <h4>{title}</h4>
                <h6>{subtitle}</h6>

            </Link>
        </div>
    )
}

export default PortfolioItem