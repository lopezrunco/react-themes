import './style.scss'

function ContactInfoItem(props) {
    return (
        <div className="contact-info-item mb-3">
            <div className="icon"><i class={props.iconClassName}></i></div>
            <div className="content">
                <h5>{props.title}</h5>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default ContactInfoItem