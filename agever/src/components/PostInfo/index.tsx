import React from "react"

interface PostInfoProps {
    category: string
    date: string
}

export const PostInfo: React.FC<PostInfoProps> = ({ category, date }) => {
    return (
        <div className="item-blog-info">
            <div className="row">
                <div className="col-xs-6">
                    <i className="fa fa-clock"></i>
                    <p>{date}</p>
                </div>
                <div className="col-xs-6">
                    <a href="#" className="blog-category">{category}</a>
                </div>
            </div>
        </div>
    )
}