import React, { useState } from "react"
import { blogList } from '../../data'
import BlogList from '../../components/BlogList'
import EmptyList from '../../components/EmptyList'
import PageTitle from "../../components/PageTitle"

const BlogHome = () => {
    const [blogs, setBlogs] = useState(blogList)

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PageTitle title="Últimas noticias del rubro" subtitle="Novedades" />
                    </div>
                </div>
                <div className="row">
                    {!blogs.length ?
                        <EmptyList /> :
                        <BlogList blogs={blogs} />
                    }
                </div>
            </div>
        </main>
    )
}

export default BlogHome