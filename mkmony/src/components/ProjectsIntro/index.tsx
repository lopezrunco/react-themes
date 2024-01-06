import React from "react"

import { projects } from "../../config/projects"
import { Title } from "../Title"

interface ProjectsIntroProps {
	items: number
}

export const ProjectsIntro: React.FC<ProjectsIntroProps> = ({ items }) => {
	const styles = `
		#cases,
		#cases h6 {
		  text-align: center;
		}

		#cases h6 {
		  margin-bottom: 20px;
		}

		#cases .wrapper {
		  border-radius: 5px !important;
		}

		#cases .case-box,
		#cases .case-box,
		#cases .case-box {
		  width: 100%;
		  height: 100%;
		  color: #fff;
		  cursor: pointer;
		  border-radius: 5px;
		  transition: ease-in-out .25s;
		}

		/* move fx on hover */
		#cases .case-box:hover,
		#cases .case-box:hover,
		#cases .case-box:hover {
		  transform: translateY(-20px);
		  box-shadow: 0 10px 35px 0 rgba(53, 82, 99, .3);
		}

		/* move fx on hover */
		/* opacity fx on hover */
		.opacity-fx {
		  display: block;
		  padding: 70px 30px;
		  width: 100%;
		  height: 100%;
		  background: #00000096;
		  opacity: 0;
		  transition: ease-in-out .25s;
		}
		.opacity-fx:hover {
		  opacity: 1;
		}

		/* opacity fx on hover */
		#cases .opacity-fx span {
		  margin-bottom: 20px;
		  color: #3f9f42 !important;
		  font-size: 15px;
		  line-height: 1.6em;
		}

		#cases .opacity-fx h4 {
		  margin-bottom: 20px;
		  text-align: center;
		  line-height: 30px;
		  font-weight: 600;
		  font-size: 24px;
		}

		#cases .opacity-fx h4 p {
		  font-size: 15px;
		  font-weight: 400;
		  line-height: 1.6em;
		}

		@media only screen and (max-width: 820px) {
			#cases .wrapper {
				margin-bottom: 10px;
			}
		}
	`

	return (
		<section id="cases">
			<style>{styles}</style>
	        <article className="content-wrap">
            	<Title title="Completed projects" subtitle="Projects" />
	            <div className="row">
	            	{projects.slice(0, items).map((el, i) => {
	            		// Convert the style into an objet to use it
					    const bgImgStyle = {background: `url(${el.imgSrc})`};
	            		
	            		return (
			                <div className="wrapper col-md-4">
			                    <div className="case-box" style={bgImgStyle}>
			                        <div className="opacity-fx">
			                            <span>{el.category}</span>
			                            <h4>{el.title}</h4>
			                            <p>{el.description}</p>
			                        </div>
			                    </div>
			                </div>
	            		)
	            	})}
	            </div>
	        </article>
	    </section>
	)
}