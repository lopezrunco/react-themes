import PortfolioItem from '../PortfolioItem'

import portfolioOne from '../../assets/img/portfolio-1.jpg'
import portfolioTwo from '../../assets/img/portfolio-2.jpg'
import portfolioThree from '../../assets/img/portfolio-3.jpg'
import portfolioFour from '../../assets/img/portfolio-4.jpg'
import portfolioFive from '../../assets/img/portfolio-5.jpg'
import portfolioSix from '../../assets/img/portfolio-6.jpg'

function PortfolioGrid() {
    return (
        <div className="portfolio-grid">
            <div className="row">
                <PortfolioItem title="Mesa barbacoa de 3.5 metros" subtitle="Eucaliptus" bgImage={portfolioOne} />
                <PortfolioItem title="Mesa de 1.5 metros" subtitle="Caoba" bgImage={portfolioSix} />
                <PortfolioItem title="Mesa comedor de 2 metros" subtitle="Eucaliptus quemado" bgImage={portfolioFour} />
                <PortfolioItem title="Mesa ratona de 1 metro" subtitle="Blanquillo" bgImage={portfolioFive} />
                <PortfolioItem title="Mesa ratona de 1.5 metros" subtitle="Eucaliptus blanco" bgImage={portfolioTwo} />
                <PortfolioItem title="Mesa redonda de 1 metro" subtitle="Eucaliptus rojo" bgImage={portfolioThree} />
            </div>
        </div>
    )
}

export default PortfolioGrid