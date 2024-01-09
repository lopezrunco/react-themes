import ContactInfoItem from "../ContactInfoItem"

function ContactInfo() {
    return (
        <div className="contact-info">
            <ContactInfoItem iconClassName="fas fa-mobile-alt" title="Teléfono" content="(+598) 91 123 456" />
            <ContactInfoItem iconClassName="fas fa-envelope" title="Email" content="info@rustica.com.uy" />
            <ContactInfoItem iconClassName="fas fa-map-marker-alt" title="Dirección" content="Ruta 5 km 143, Uruguay" />
        </div>
    )
}

export default ContactInfo