import React from "react"

import { services } from "../../config/services"
import { Title } from "../Title"

interface ServicesIntroProps {
	items: number
}

export const ServicesIntro: React.FC<ServicesIntroProps> = ({ items }) => {
	const styles = `
		#services {
		  background: url(./assets/services-bg.jpg) fixed;
		  background-size: cover;
		  text-align: center;
		}

		#services h6 {
		  text-align: center;
		}

		#services .service-box {
		  border: 1px solid rgba(28, 29, 27, .25);
		  padding: 40px 27px 25px;
		  cursor: pointer;
		}

		#services i {
		  margin-bottom: 20px;
		  color: #3f9f42;
		  font-size: 60px;
		}

		#services h5 {
		  margin-bottom: 20px;
		  color: #1c1d1b;
		  font-family: 'Nunito', sans-serif;
		  font-size: 24px !important;
		  letter-spacing: -1px;
		  font-weight: 700;
		  line-height: 24px;
		}

		#services p {
		  color: #999999;
		  font-family: 'Fira Sans';
		  line-height: 24px;
		}

		#services .service-box:hover,
		#services .service-box:hover i,
		#services .service-box:hover h5,
		#services .service-box:hover p {
		  background: #3f9f42;
		  color: #fff;
		}

		@media only screen and (max-width: 820px) {
		  #services {
		    padding-top: 80px;
		  }
		}
	`

	return (
	    <section id="services">
	    	<style>{styles}</style>
	        <article className="content-wrap">
	        	<Title subtitle="Our services" title="What we do?" />
	            <div className="row">
	            	{services.slice(0, items).map((el, i) => (
		                <div key={i} className="service-box col-md-4 col-xs-12">
		                    <i className={el.iconClassName}></i>
		                    <h5>{el.title}</h5>
		                    <p>{el.description}</p>
		                </div>
	            	))}
	            </div>
	        </article>
	    </section>
	)
}