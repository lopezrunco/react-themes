import React from 'react'
import notFoundImg from '../../assets/img/404.png'
import './style.scss'

const EmptyList = () => {
    return (
        <div className='empty-list'>
            <div className="row">
                <div className="col-md-6 img-col">
                    <img src={notFoundImg} alt='Artículo no encontrado' />
                </div>
                <div className="col-md-6 text-col">
                    <h2>Este artículo no existe!</h2>
                    <p>
                        Lo sentimos, por alguna razón, no hemos podido encontrar el artículo que buscas.<br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EmptyList
