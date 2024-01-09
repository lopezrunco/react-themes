import './style.scss'

function TestimonialItem(props) {

    return (
        <div className="col-lg-6">
            <div className="testimonial-item">
                <blockquote>{props.quote}</blockquote>
                <div className="info">
                    <div className="author-info">
                        <div className="icon"><i class="fas fa-quote-left"></i></div>
                        <div className="author">
                            <h5>{props.authorName}</h5>
                            <span>{props.authorWork}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialItem