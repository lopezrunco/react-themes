import React from "react"

import { Nav } from "../../components/Nav"
import { Breadcrumbs } from "../../components/Breadcrumbs"
import { ReplyForm } from "../../components/ReplyForm";
import { AuthorInfo } from "../../components/AuthorInfo";
import { PostInfo } from "../../components/PostInfo";
import { BlogCategories } from "../../components/BlogCategories";
import { BlogTags } from "../../components/BlogTags";
import { ShareThis } from "../../components/ShareThis";
import { AsideGallery } from "../../components/AsideGallery";
import { RecentPosts } from "../../components/RecentPosts";

interface BlogContentDataI {
    title: string;
    content: string[];
    quote: string;
    secondaryImg: string;
    list: string[];
    date: string;
    category: string;
}

const blogContentData: BlogContentDataI =
{
    title: 'Amazing blog post',
    content: [
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, facilis veniam aut sint voluptatem sunt atque voluptas soluta dolore, cumque accusamus tempora quibusdam doloribus unde nostrum quae mollitia? Accusantium, at!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, facilis veniam aut sint voluptatem sunt atque voluptas soluta dolore, cumque accusamus tempora quibusdam doloribus unde nostrum quae mollitia? Accusantium, at!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, facilis veniam aut sint voluptatem sunt atque voluptas soluta dolore, cumque accusamus tempora quibusdam doloribus unde nostrum quae mollitia? Accusantium, at!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, facilis veniam aut sint voluptatem sunt atque voluptas soluta dolore, cumque accusamus tempora quibusdam doloribus unde nostrum quae mollitia? Accusantium, at!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, facilis veniam aut sint voluptatem sunt atque voluptas soluta dolore, cumque accusamus tempora quibusdam doloribus unde nostrum quae mollitia? Accusantium, at!',
    ],
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique quae fugiat totam inventore repellat dolores explicabo, quasi est. Beatae.',
    secondaryImg: '../../img/news-3.jpg',
    list: [
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    ],
    date: 'January 28, 2021',
    category: 'Technology'
}

export const BlogItem: React.FC = () => {
    return (
        <React.Fragment>
            <header className="blog-item-header">
                <div className="overlay">
                    <div className="content-wrap">
                        <Nav />
                        <Breadcrumbs location="Blog Item" />
                    </div>
                </div>
            </header>
            <div className="blog-item-page">
                <div className="content-wrap">
                    <div className="row">
                        <div className="col-md-8">
                            <MainContent />
                        </div>
                        <div className="col-md-4">
                            <SecondaryContent />
                        </div>
                    </div>
                </div>
            </div>
            <RecentPosts />
        </React.Fragment>
    )
}

const MainContent: React.FC = () => {
    const { title, content, quote, secondaryImg, list, date } = blogContentData

    return (
        <section id="blog-item-main-content">
            <article>
                <h2>{title}</h2>
                {content.map((el, i) => <p key={i}>{el}</p>)}
                <blockquote>{quote}</blockquote>
                <div className="img-wrapper">
                    <img src={secondaryImg} />
                </div>
                <h4>Amazing features</h4>
                <ul className="content-list">
                    {list.map((el, i) => <li key={i}>{el}</li>)}
                </ul>
                <div className="post-date">
                    <span>Posted on <a>{date}</a></span>
                </div>
                <ReplyForm />
            </article>
        </section>
    )
}

const SecondaryContent: React.FC = () => {
    return (
        <section id="blog-item-secondary-content">
            <article>
                <AuthorInfo />
                <PostInfo category={blogContentData.category} date={blogContentData.date} />
                <BlogCategories />
                <BlogTags />
                <ShareThis />
                <AsideGallery />
            </article>
        </section>
    )
}