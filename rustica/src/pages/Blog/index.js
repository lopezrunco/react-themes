import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { blogList } from "../../data"
import EmptyList from "../../components/EmptyList"
import './style.scss'

const Blog = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        // Finds a blog matching the blog.id with the id from the props
        let blog = blogList.find(blog => blog.id === parseInt(id))
        // If matches, set the founded blog on the state
        if (blog) {
            setBlog(blog)
        }
    }, [id])

    return (
        <main className="blog-item">
            <div className="container">
                <div className="row">
                    <div className="col blog-wrapper">
                        <Link to='/novedades' className='go-back'><i class="fas fa-arrow-left"></i> Volver a novedades</Link>
                        {
                            blog ? (
                                <div className="row blog-item-body">
                                    <div className="col-lg-6">
                                        <img src={blog.cover} alt='cover' />
                                    </div>
                                    <div className="col-lg-6">
                                        <h3>{blog.title}</h3>
                                        <div className="separator"></div>
                                        <p className="blog-desc">{blog.description}</p>
                                    </div>
                                </div>
                            ) : (
                                <EmptyList />
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Blog