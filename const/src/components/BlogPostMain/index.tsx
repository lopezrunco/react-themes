import React from "react"

import { helpItems } from "../../config/help"
import { Title } from "../Title"
import { SocialBar } from "../SocialBar"
import { HelpItem } from "../Help"

interface BlogPostMainPropsI {
	post: object
}

export const BlogPostMain: React.FC = ({ post }) => {
	const { title, categories, author, content } = post

    const blogPostMain = `
        .blog-post-detail .help {
          width: 90% !important;
          max-width: 90% !important;
        }
        .blog-post-detail .mask {
          float: left;
          padding-right: 30px;
        }
        .blog-post-thumb img {
          width: 100%;
          margin-bottom: 20px;
        }

        @media (min-width: 576px) {
            .blog-post-header .categories a {
                color: #feb500
            }
        }
    `

	return (
      <div className="col-lg-9 mb-3 main-content">
        <div className="blog-post-detail">
            <div className="blog-post-header">
                <div className="blog-post-thumb">
                    <img src="../assets/construction-blog-post-detail-thumb.jpg" />
                </div>
                <div className="row">
                    <div className="col-auto mr-auto">
                        <h2 className="post-title">
                            {title}
                        </h2>
                        <div className="categories">
                        	{categories.map((category, i) => (
								<a key={i}>{category}, </a>
                        	))}
                        </div>
                    </div>
                    <div className="col-auto mr-auto">
                        <div className="row author mt-4 mb-5">
                            <div className="col-4">
                                <img className="mr-3 mb-3" src="../assets/construction-blog-post-avatar.png" />
                            </div>
                            <div className="col-8 name">
                                <p>Posted by {author.name} at
                                  <span className="date"> {author.date}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-detail-content">
            	{content.map((el, i) => (<p key={i}>{el}</p>))}
            </div>
            <div className="col-sm-6 py-5 help">
				<Title type="light" title="Need some help?" subtitle="Lorem ipsum dolor sit amet." />            	
	                {helpItems.map((item, i) => {
	              return (
	                <HelpItem
	                  key={i}
	                  imgSrc={item.imgSrc}
	                  title={item.title}
	                  description={item.description}
	                  link={item.link}
	                />
	              );
	            })}
            </div>
        </div>
        <SocialBar />
      </div>
	)
}