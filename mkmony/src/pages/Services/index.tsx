import React from "react"

import { ServicesI, services } from "../../config/services"
import { ServicesAside } from "../../components/ServicesAside"

interface ServiceItemProps {
	service: ServicesI;
}

export const Services: React.FC = () => {
	const styles = `
		#main.service-grid-title h3 {
			margin-top: 70px;
			font-family: 'Nunito', sans-serif;
			margin-bottom: 30px;
			line-height: 50px;
			font-size: 36px;
			font-weight: 700;
			letter-spacing: -1px;
		}
		
		#main.service-grid-title p.intro {
			margin-bottom: 30px;
			font-family: 'Fira Sans';
			color: #1c1d1b;
			font-size: 15px;
			font-weight: 400;
			line-height: 1.6em;
		}
		
		.service-wrapper {
			margin-bottom: 30px;
		}
		
		.services-grid .container {
			position: relative;
			padding: 0;
			box-shadow: none;
			overflow: hidden;
		}
		
		.services-grid .container a {
			transition: all .25s ease !important;
		}
		
		.services-grid .container a img {
			display: block;
			max-width: 100%;
			height: auto;
		}
		
		.services-grid .container .service-content {
			padding: 30px 30px 26px;
			position: absolute;
			width: 100%;
			overflow: hidden;
			transition: all .3s;
			background-color: rgba(51, 51, 51, .7);
			color: #fff;
			bottom: -135px;
		}
		
		.services-grid .container:hover .service-content {
			bottom: 0;
		}
		
		.services-grid .container .service-content a.title {
			display: block;
			margin-bottom: 25px;
			color: #fff;
			font-family: 'Nunito', sans-serif;
			font-size: 24px;
			font-weight: 700;
			line-height: 24px;
			letter-spacing: -.4px;
		}
		
		.services-grid .container .service-content a.title:hover {
			color: #3f9f42;
		}
		
		.services-grid .container .service-content p {
			line-height: 24px;
			font-size: 15px;
			font-weight: 400;
		}
		
		.services-grid .container .service-content a.link {
			color: #3f9f42;
			text-decoration: underline;
			font-size: 14px !important;
			letter-spacing: .4px;
			font-weight: 300;
			transition: ease-in-out .25s;
		}
		
		.services-grid .container .service-content .link:hover {
			color: #fff;
		}
		
		.services-grid .container .service-content::before {
			content: "";
			position: absolute;
			top: 0;
			left: 30px;
			width: 60px;
			height: 10px;
			background-color: #3f9f42 !important;
		}

		@media only screen and (max-width: 820px) {
			#main.service-grid-title h3 {
			  margin-bottom: 20px;
			}
		  
			.services-grid .container .service-content {
			  bottom: -190px;
			}
		  
			.services-grid .service-3 .container .service-content {
			  bottom: -170px;
			}
		}

		@media only screen and (max-width: 380px) {
			.services-grid .container .service-content {
				bottom: -135px;
			}

			.services-grid .service-3 .container .service-content {
				bottom: -140px;
			}
		}
	`

	return (
		<React.Fragment>
			<section className="container">
				<style>{styles}</style>
				<article className="row">
					<div className="col-md-9">
						<main id="main" className="service-grid-title">
							<h3>This are our awesome services</h3>
							<section>
								<article>
									<div className="row services-grid">
										{services.map((el, i) => <ServiceItem key={i} service={el} />)}
									</div>
								</article>
							</section>
						</main>
					</div>
					<div className="col-md-3">
						<ServicesAside />
					</div>
				</article>
			</section>
		</React.Fragment>
	)
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
	const { link, imgSrc, title, description } = service

	return (
		<div className="service-wrapper col-md-6">
			<div className="container">
				<a href={link}>
					<div className="image">
						<img src={imgSrc} />
					</div>
				</a>
				<div className="service-content">
					<a className="title" href="service-detail.html">{title}</a>
					<p>{description}</p>
					<a className="link" href={link}>Learn More</a>
				</div>
			</div>
		</div>
	)
}