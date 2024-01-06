import React from "react"

import { numbers } from "../../config/numbers"
import { siteInfo } from "../../config/siteInfo"

export const Numbers: React.FC = () => {
	const styles = `
		#numbers {
		  border-radius: 4px;
		  padding: 60px 60px 80px;
		  background-image: url(./assets/services-bg.jpg);
		  background-size: cover;
		  color: #fff;
		  text-align: left;
		  transform: translateY(-50px);
		}

		#numbers.green-overlay {
		  width: 100%;
		  height: 100%;
		  background: rgba(0, 158, 5);
		}

		#numbers h6 {
		  color: #fff;
		  text-align: left;
		}

		#numbers .counter span {
		  color: #fff !important;
		  font-family: 'Fira Sans';
		}

		#numbers .counter span.number {
		  font-size: 48px;
		  font-weight: 700;
		  line-height: 1;
		}

		#numbers .counter .description {
		  margin-top: 3px;
		  color: rgba(255, 255, 255, .8) !important;
		  font-size: 15px;
		  line-height: 30px;
		}

		#numbers .wrapper a {
		  color: #fff;
		  font-size: 20px;
		  top: 50%;
		  position: absolute;
		  transform: translateY(-50%);
		}

		#numbers .wrapper i {
		  font-size: 135px;
		  color: #fff;
		  transition: ease-in-out .25s;
		}

		#numbers .wrapper i:hover {
		  text-shadow: 0px 1px 12px rgba(0, 0, 0, 0.64);
		}

		#numbers .wrapper a.text {
		  right: 80px;
		  position: absolute;
		}

		@media only screen and (max-width: 820px){
		  #numbers {
		    border-radius: 0;
		    padding: 60px 10px 80px;
		    text-align: center;
		  }

		  #numbers h6 {
		    margin-bottom: 0;
		    text-align: center;
		  }

		  #numbers h2 {
		    font-size: 30px;
		  }

		  #numbers .wrapper a {
		    position: relative;
		  }

		  #numbers .counter span.number {
		    font-size: 70px;
		  }

		  #numbers .counter .description {
		    margin-bottom: 30px;
		    font-size: 18px;
		  }

		  #numbers .wrapper {
		    margin-top: 30px;
		  }

		  #numbers .counter .fa-play-circle {
		    display: block;
		  }

		  #numbers .wrapper a.text {
		    display: block;
		    position: relative;
		    right: 0;
		    margin-top: 20px;
		  }
		}
	`

	return (
        <section>
        	<style>{styles}</style>
            <article id="numbers" className="green-overlay content-wrap-wide">
                <div className="row">
                    <div className="col-lg-8">
                        <h6 className="mb-2">Our experience</h6>
                        <h2>The numbers speak for us</h2>
                        <div className="counter row">
                        	{numbers.map((el, i) => (
	                            <div key={i} className="col-md-3">
	                                <span className="number number1">{el.num}</span>
	                                <span className="description">{el.description}</span>
	                            </div>
                        	))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="wrapper">
                            <a href={siteInfo.corporateVideoSrc} target="_blank"><i className="far fa-play-circle"></i></a>
                            <a className="text" href={siteInfo.corporateVideoSrc} target="_blank">Institutional video</a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
	)
}