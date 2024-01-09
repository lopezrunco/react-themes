import PageTitle from "../../components/PageTitle"
import PortfolioGrid from "../../components/PortfolioGrid"

function Catalogo() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PageTitle title="Últimos trabajos que hemos realizado" subtitle="Catálogo" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <PortfolioGrid />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Catalogo