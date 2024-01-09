import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { portfolioArray } from '../../data'
import EmptyPortfolio from '../../components/EmptyPortfolio'
import './style.scss'

const PortfolioSingle = () => {
    const { id } = useParams()
    const [portfolio, setPortfolio] = useState(null)

    useEffect(() => {
        // Finds a portfolio matching the portfolio.id with the id from the props
        let portfolio = portfolioArray.find(portfolio => portfolio.id === id)
        // If matches, set the founded portfolio on the state
        if (portfolio) {
            setPortfolio(portfolio)
        }
    }, [id])

    return (
        <main className="portfolio-item">
            <div className="container">
                <div className="row">
                    <div className="col blog-wrapper">
                        <Link to='/catalogo' className='go-back'><i class="fas fa-arrow-left"></i> Volver al catálogo</Link>
                        {
                            portfolio ? (
                                <div className="row portfolio-item-body">
                                    <div className="col-lg-6">
                                        <h2>{portfolio.title}</h2>
                                        <h5>{portfolio.subtitle}</h5>
                                        <p className="portfolio-desc">{portfolio.description}</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={portfolio.bgImage} alt='Portfolio single' />
                                    </div>
                                </div>
                            ) : (
                                <EmptyPortfolio />
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PortfolioSingle