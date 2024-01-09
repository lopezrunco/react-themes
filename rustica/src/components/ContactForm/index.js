import './style.scss'

function ContactForm() {
    return (
        <div className="contact-form">
            <form>
                <div className="row">
                    <div className="col-md-6"><input type="text" placeholder="Su nombre" required /></div>
                    <div className="col-md-6"><input type="email" placeholder="Su email" required /></div>
                    <div className="col-md-6"><input type="tel" placeholder="Su teléfono" /></div>
                    <div className="col-md-6"><input type="text" placeholder="Asunto" required /></div>
                    <div className="col-md-12"><textarea placeholder="Mensaje" rows="5"></textarea></div>
                    <div className="col-md-12"><input type="submit" value="Enviar" className="primary-button" /></div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm