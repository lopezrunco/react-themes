import './style.scss'

function PortfolioItem(props) {

    const imageStyle = {
        backgroundImage: `url(${props.bgImage})`
    }

    return (
        <a className="col-lg-4 mb-4 portfolio-item" href="/">
            <div className="image-bg" style={imageStyle}>
                <div className="hover-effect">
                    <div className="text-container">
                        <span className="item-subtitle">{props.subtitle}</span>
                        <h4 className="title">{props.title}</h4>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default PortfolioItem