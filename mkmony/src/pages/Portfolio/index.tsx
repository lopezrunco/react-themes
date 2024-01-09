import React from "react"
import { projects } from "../../config/projects"

export const Portfolio: React.FC = () => {
	const styles = `
		#portfolio {
			margin-top: 70px;
		}

		#portfolio ,
		#portfolio h6 {
		  	text-align: center;
		}

		#portfolio h6 {
			margin-bottom: 20px;
		}

		#portfolio .wrapper {
			border-radius: 5px !important;
		}
		
		#portfolio .title,
		#portfolio .title h4 {
			padding: 0 100px;
			text-align: center;
		}
		
		#portfolio .title h2 {
			margin-bottom: 30px !important;
			line-height: 50px;
			color: #1c1d1b;
			font-size: 44px;
			font-weight: 700;
			letter-spacing: -2.4px;
		}
		
		#portfolio .title h4 {
			font-size: 20px;
			color: #777777;
			line-height: 26px;
			font-weight: 400;
			letter-spacing: -.4px;
		}
		
		#portfolio .porfolio-grid {
			margin: 50px 0;
		}
		
		#portfolio .porfolio-grid .wrapper {
			margin-bottom: 20px;
		}
		
		#portfolio .case-box{
			width: 100%;
			height: 100%;
			border-radius: 5px;
			background-size: cover !important;
			color: #fff;
			cursor: pointer;
			transition: ease-in-out .25s;
		}

		/* move fx on hover */
		.case-box:hover,
		.case-box:hover,
		.case-box:hover {
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
		.opacity-fx span {
		  margin-bottom: 20px;
		  color: #3f9f42 !important;
		  font-size: 15px;
		  line-height: 1.6em;
		}

		.opacity-fx h4 {
		  margin-bottom: 20px;
		  text-align: center;
		  line-height: 30px;
		  font-weight: 600;
		  font-size: 24px;
		}

		.opacity-fx h4 p {
		  font-size: 15px;
		  font-weight: 400;
		  line-height: 1.6em;
		}

		@media only screen and (max-width: 820px) {
			#portfolio .title,
			#portfolio .title h4 {
			  padding: 0 5px;
			}
		}
	`

	return (
		<React.Fragment>
			<main role="main">
				<style>{styles}</style>
				<section id="portfolio">
					<article className="content-wrap">
						<div className="row">
							<div className="col-12 title">
								<h2>Our best projects.</h2>
								<h4>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, excepturi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, vitae!
								</h4>
							</div>
						</div>
						<div className="row porfolio-grid">
							{projects.map((el, i) => {
								// Convert the style into an objet to use it
								const bgImgStyle = { background: `url(${el.imgSrc})` };
								return (
									<div className="wrapper col-md-4" key={i}>
										<div className="case-box" style={bgImgStyle}>
											<div className="opacity-fx">
												<h4>{el.title}</h4>
												<a className="btn black-btn" href={el.link}>View more</a>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</article>
				</section>
			</main>
		</React.Fragment>
	)
}