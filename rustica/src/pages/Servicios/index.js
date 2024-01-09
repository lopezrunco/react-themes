import PageTitle from "../../components/PageTitle"
import ServicesGrid from "../../components/ServicesGrid"

function Servicios() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PageTitle title="Nuestro compromiso con la calidad" subtitle="Servicios" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ServicesGrid />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Servicios