import React from "react"
import BlogItem from './BlogItem'

// Recibes the data as prop
const BlogList = ({ blogs }) => (
    <div className="row">
        {blogs.map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
        ))}

    </div>
)

export default BlogList