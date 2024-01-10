import React from "react"

import { Nav } from "../../components/Nav"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { Newsletter } from "../../components/Newsletter";

interface BlogDataI {
    title: string;
    author: string;
    date: string;
    link: string;
    imgSrc: string;
}

const blogData: BlogDataI[] = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur.',
        author: 'Author Name',
        date: '10 days ago',
        link: '/blog/item',
        imgSrc: '../img/news-1-h.jpg'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur.',
        author: 'Author Name',
        date: '10 days ago',
        link: '/blog/item',
        imgSrc: '../img/news-2-h.jpg'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur.',
        author: 'Author Name',
        date: '10 days ago',
        link: '/blog/item',
        imgSrc: '../img/news-3-h.jpg'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur.',
        author: 'Author Name',
        date: '10 days ago',
        link: '/blog/item',
        imgSrc: '../img/news-4-h.jpg'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur.',
        author: 'Author Name',
        date: '10 days ago',
        link: '/blog/item',
        imgSrc: '../img/news-5-h.jpg'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur.',
        author: 'Author Name',
        date: '10 days ago',
        link: '/blog/item',
        imgSrc: '../img/news-6-h.jpg'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur.',
        author: 'Author Name',
        date: '10 days ago',
        link: '/blog/item',
        imgSrc: '../img/news-7-h.jpg'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur.',
        author: 'Author Name',
        date: '10 days ago',
        link: '/blog/item',
        imgSrc: '../img/news-8-h.jpg'
    },
]

export const Blog: React.FC = () => {
    return (
        <React.Fragment>
            <header className="blog-header">
                <div className="overlay">
                    <div className="content-wrap">
                        <Nav />
                        <Breadcrumbs location="Blog posts" />
                    </div>
                </div>
            </header>
            <main role="main">
                <section id="blog">
                    <article className="content-wrap-fluid">
                        <div className="row">
                            {blogData.map((el, i) => <BlogItem key={i} blog={el} />)}
                        </div>
                        <Pagination />
                    </article>
                </section>
                <Newsletter />
            </main>
        </React.Fragment>
    )
}

interface BlogItemProps {
    blog: BlogDataI;
}

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
    const { title, author, date, link, imgSrc } = blog

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

const Pagination: React.FC = () => {
    return (
        <div className="pagination">
            <div className="row">
                <div className="col-12">
                    <nav>
                        <ul>
                            <li><a href="#"><i className="fas fa-chevron-left"></i></a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#"><i className="fas fa-chevron-right"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}