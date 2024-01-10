import React from "react"

interface NumberI {
    value: number
    label: string
}

const numbers: NumberI[] = [
    {
        value: 436,
        label: 'Finished projects'
    },
    {
        value: 140,
        label: 'Innovations'
    },
    {
        value: 987,
        label: 'Cups of coffee'
    },
    {
        value: 430,
        label: 'Unpaid projects'
    }
]

export const FunFacts: React.FC = () => {
    return (
        <section id="fun-facts">
            <article className="content-wrap">
                <div className="row">
                    <div className="col">
                        <h2>Fun facts</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, laudantium commodi eius
                            asperiores quaerat perferendis facere, ad officia cupiditate velit minim.</p>
                    </div>
                </div>
                <div className="row numbers-list">
                    {numbers.map((el, i) => (
                        <div className="col-sm-6 col-lg-3 numbers" key={i}>
                            <span>{el.value}</span>
                            <h4>{el.label}</h4>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}