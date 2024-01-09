import './style.scss'

function ServiceItem(props) {
    return (
        <div className="col-lg-4 mb-4">
            <div className="service-item">
                <div className="icon"><i class={props.iconClassName}></i></div>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default ServiceItem