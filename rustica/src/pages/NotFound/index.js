import './style.scss'
import notFoundImg from '../../assets/img/404.png'

function NotFound() {
    return (
        <div>
            <main className="page-not-found">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 img-col">
                            <img src={notFoundImg} alt='Pagina no encontrada' />
                        </div>
                        <div className="col-md-6 text-col">
                            <h3>404!</h3>
                            <h2>Esta página ya no existe!</h2>
                            <p>
                                Lo sentimos, por alguna razón, no hemos podido encontrar la página que buscas.<br />
                                ¿Estás seguro que escribiste bien?
                            </p>
                            <a className="primary-button" href="/"><i class="fas fa-home"></i>Volver a Inicio</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default NotFound