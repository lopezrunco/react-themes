import React from "react"
import { Link } from "react-router-dom"
import './style.scss'

const BlogItem = ({
    // Deconstruct the prop into the content components
    blog: {
        description,
        title,
        cover,
        id
    },
}) => {
    return (
        <div className='col-lg-4 blog-item-wrapper'>
            <Link to={`/novedades/${id}`}>
                <div className="flex">
                    <img src={cover} alt='cover' />
                    <h5>{title}</h5>
                    <p className="blog-item-desc">{description}</p>
                </div>
            </Link>
        </div>
    )
}

export default BlogItem