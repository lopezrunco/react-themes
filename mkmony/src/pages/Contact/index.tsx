import React from "react"

import { Map } from "../../components/Map"

export const Contact: React.FC = () => {
	const styles = `
		#contact-form {
			margin: 70px 0;
		}

		#contact-form h2 {
			font-size: 44px;
			font-weight: 700;
			line-height: 44px;
			letter-spacing: -2.4px;
		}

		#contact-form input,
		#contact-form textarea {
			border: 1px solid #ccc;
			padding: 10px 15px;
			font-family: 'Fira Sans';
			font-weight: 300;
		}

		#contact-form input {
			margin: 0 10px 30px 10px;
			width: calc(50% - 20px);
			float: left;
		}

		#contact-form textarea {
			width: calc(100% - 20px);
			margin-left: 10px;
			margin-bottom: 30px;
			color: #757575;
		}

		#contact-form textarea:focus {
			outline: none;
		}

		#contact-form input[type="submit"] {
			width: auto;
			padding: 20px 40px;
			background: #1c1d1b;
			color: #fff;
			font-family: 'Fira Sans';
			font-size: 18px;
			font-weight: 600;
		}

		@media only screen and (max-width: 820px) {
			#contact-form input,
			#contact-form textarea {
			  width: 100%;
			  margin: 0 0 15px 0;
			  padding: 10px;
			}
		  
			#contact-form input[type="submit"] {
			  width: 100%;
			}
		}
	`

	return (
		<React.Fragment>
			<section id="contact-form">
				<style>{styles}</style>
				<article className="content-wrap">
					<div className="row">
						<div className="col">
							<h2>Free Consultation</h2>
							<form action="">
								<input type="text" name="name" id="name" placeholder="Name*" />
								<input type="email" name="email" id="email" placeholder="Email*" />
								<input type="tel" name="tel" id="tel" placeholder="Phone number" />
								<input className="list" list="shipments" placeholder="Choose the service" />
								<datalist id="shipments">
									<option value="Package Shipments" />
									<option value="Freight Shipments" />
									<option value="Return Shipments" />
								</datalist>
								<textarea name="message" id="message">Your message</textarea>
								<input type="submit" value="Send a request" src="message-sent.html"></input>
							</form>
						</div>
					</div>
				</article>
			</section>
			<Map />
		</React.Fragment>
	)
}