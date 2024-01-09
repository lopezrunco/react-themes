import React, { useState } from "react"
import { portfolioArray } from "../../data"
import PortfolioList from '../../components/PortfolioList'
import EmptyPortfolio from "../../components/EmptyPortfolio"
import PageTitle from '../../components/PageTitle'

const PortfolioHome = () => {
    const [portfolio, setPortfolio] = useState(portfolioArray)

    return (

        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PageTitle title="Últimos trabajos que hemos realizado" subtitle="Catálogo" />
                    </div>
                </div>
                <div className="row">
                    {!portfolio.length ?
                        <EmptyPortfolio /> :
                        <PortfolioList portfolio={portfolio} />
                    }
                </div>
            </div>
        </main>
    )
}

export default PortfolioHome