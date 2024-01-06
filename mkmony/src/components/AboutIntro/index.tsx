import React from "react"

import { about } from "../../config/about"

export const AboutIntro: React.FC = () => {
	const styles = `
		#about .quote {
		  position: absolute;
		  left: 200px;
		  bottom: -57px;
		  width: 356px;
		  letter-spacing: 1.5px;
		  padding: 35px 50px 10px;
		  background-color: #3f9f42;
		  color: #fff;
		}

		#about .quote p {
		  font-size: 20px;
		  line-height: 36px;
		  letter-spacing: 0;
		  font-weight: 400;
		}

		#about .fa-quote-left {
		  font-size: 80px;
		  position: absolute;
		  top: 10px;
		  left: -50px;
		}

		#about .about {
		  padding-left: 80px;
		}

		.bor-bott {
		  border-bottom: 1px solid #f3f1f1;
		  margin-top: 37px;
		}

		@media only screen and (max-width: 820px) {
		  #about {
		    padding-bottom: 0px;
		  }

		  #about .about {
		    padding-left: 10px;
		  }

		  #about .image-quote img {
		    margin-bottom: 20px;
		  }

		  #about .quote {
		    display: none;
		  }
		}
	`

	return (
	    <section id="about">
	    	<style>{styles}</style>
	        <article className="content-wrap">
	            <div className="row">
	                <div className="image-quote col-lg-7 col-xs-12">
	                    <img src={about[0].aboutImgSrc} alt="About us" />
	                    <div className="quote">
	                        <p>{about[0].quote}</p>
	                        <i className="fas fa-quote-left"></i>
	                    </div>
	                </div>
	                <div className="about col-lg-5 col-xs-12">
	                    <h6>About us</h6>
	                    <h2>Who we are?</h2>
	                    <p className="mb-4"><span>{about[0].briefAboutUs}</span></p>
	                    {about[0].aboutUs.map((el, i) => <p key={i} className="mb-2">{el}</p>)}
	                </div>
	            </div>
	        </article>
	    </section>
	)
}