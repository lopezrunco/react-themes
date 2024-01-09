import './style.scss'
import logo from '../../assets/img/logo.svg'

import PlayVideo from '../PlayVideo'

function AboutInfo() {
    return (
        <div className="about-info">
            <span className="subtitle">Muebles</span>
            <img src={logo} alt="Madera Rustica Logo" className="logo" />
            <p>Importados desde Paraguay, vendemos muebles 100% de madera dura</p>
            <PlayVideo />
        </div>
    )
}

export default AboutInfo