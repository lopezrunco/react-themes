import React from "react"
import PortfolioItem from './PortfolioItem'

// Recibes the data as prop
const PortfolioList = ({ portfolio }) => (
    <div className="row">
        {portfolio.map((portfolioObject) => (
                <PortfolioItem portfolioObject={portfolioObject} key={portfolioObject.id} />
        ))}
    </div>
)

export default PortfolioList