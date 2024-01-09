import PageTitle from "../../components/PageTitle"
import TestimonialItem from "../../components/TestimonialItem"
import { testimonialsArray } from "../../data"

function Testimonios() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PageTitle title="Lo que dicen nuestros clientes" subtitle="Testimonios" />
                    </div>
                </div>
                <div className="row">
                    {testimonialsArray.map(({ quote, authorName, authorWork, id }) => (
                        <TestimonialItem
                            key={id}
                            quote={quote}
                            authorName={authorName}
                            authorWork={authorWork}
                        />
                    ))}

                </div>
            </div>
        </main>
    )
}

export default Testimonios