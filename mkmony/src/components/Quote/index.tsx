import React from "react"

import { siteQuote } from "../../config/siteInfo"

export const Quote: React.FC = () => {
	const styles = `
		#quote {
		  padding: 70px 0px 50px;
		  background: #c41b79;
		  color: #fff;
		}

		#quote h3 {
		  margin-bottom: 20px;
		  font-family: 'Nunito', sans-serif;
		  font-size: 32px;
		  font-weight: 700;
		  line-height: 40px;
		}

		#quote p {
		  color: rgba(255, 255, 255, 0.8);
		}

		#quote a {
		  position: absolute;
		  top: 50%;
		  transform: translateY(-50%);
		}

		@media only screen and (max-width: 820px) {
			#quote a {
				position: relative;
			}
		}
	`

	return (
        <section id="quote">
        	<style>{styles}</style>
            <article className="content-wrap">
                <div className="row">
                    <div className="col-lg-10 col-md-9 col-xs-12">
                        <h3>{siteQuote.title}</h3>
                        <p>{siteQuote.quote}</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-xs-12">
                        <a href={siteQuote.link} className="btn white-btn">{siteQuote.linkText}</a>
                    </div>
                </div>
            </article>
        </section>
	)
}