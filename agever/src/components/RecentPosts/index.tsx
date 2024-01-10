import React from "react"

interface BlogItemI {
    link: string
    title: string
    author: string
    date: string
    imgSrc: string
}

const blogItems: BlogItemI[] = [
    { link: '#', title: 'Lorem ipsum dolor sit amet consectetur.', author: 'Author Name', date: '2 days ago', imgSrc: '../img/news-1-h.jpg' },
    { link: '#', title: 'Lorem ipsum dolor sit amet consectetur.', author: 'Author Name', date: '6 days ago', imgSrc: '../img/news-2-h.jpg' },
    { link: '#', title: 'Lorem ipsum dolor sit amet consectetur.', author: 'Author Name', date: '8 days ago', imgSrc: '../img/news-3-h.jpg' },
    { link: '#', title: 'Lorem ipsum dolor sit amet consectetur.', author: 'Author Name', date: '10 days ago', imgSrc: '../img/news-4-h.jpg' },
]

interface BlogItemProps {
    blog: BlogItemI
}

export const RecentPosts: React.FC = () => {
    return (
        <section id="recent-posts">
            <article className="content-wrap-fluid">
                <div className="row title">
                    <h2>Latest news</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ad?</p>
                </div>
                <div className="row">
                    {blogItems.map((el, i) => <BlogItem key={i} blog={el} />)}
                </div>
                <ItemNavigation />
            </article>
        </section>
    )
}

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
    const { link, title, author, date, imgSrc } = blog

    const imgWrapperStyle = {
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="col-sm-6 col-lg-3">
            <div className="item-wrapper">
                <div className="img-wrapper" style={imgWrapperStyle}>
                    <div className="overlay">
                        <div className="item-info-group">
                            <div className="item-title">
                                <a href={link}>
                                    <h4>{title}</h4>
                                </a>
                            </div>
                            <div className="item-footer">
                                <i className="fa fa-user"></i>
                                <p>{author}</p>
                                <i className="fa fa-clock"></i>
                                <p>{date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ItemNavigation: React.FC = () => {
    return (
        <div className="row item-nav">
            <div className="col-12">
                {blogItems.map((_, i) => (
                    <span key={i} className={`nav-bullet ${i === 1 ? 'active' : ''}`}></span>
                ))}
            </div>
        </div>
    )
}