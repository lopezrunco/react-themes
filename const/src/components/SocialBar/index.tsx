import React from "react"

import { socialMediaItems } from "../../config/socialMediaItems"

export const SocialBar: React.FC = () => {
	const socialBarStyles = `
		.social-box-mobile {
		  padding: 15px 0 5px;
		  margin: 30px 0;
		  background: #f8f8f8;
		  text-align: center;
		}
		.social-box {
		  padding: 5px 0;
		  margin: 40px 0;
		  background: #f8f8f8;
		  text-align: center;
		}
	`

	return (
		<React.Fragment>
		<style>{socialBarStyles}</style>
	      {/* social mobile */}
	      <div className="row">
	        <div className="d-sm-none col social-box-mobile">
	          <ul className="social-top list-unstyled">
		        socialMediaItems.map((el, i) => {
		          	return (
		            	<li className="d-inline-block mr-3">
			              <a href={el.link}>
			                <i className={el.iconClass} aria-hidden="true"></i>
			              </a>
			            </li>
		          	)
		        })}
	          </ul>
	        </div>
	      </div>
	
	      {/* social desktop */}
	      <div className="row d-none d-sm-block social-box">
	        <div className="d-none d-sm-block col">
	          <ul className="social-top-desk list-unstyled justify-content-end">
	      		{socialMediaItems.map((el, i) => {
		          	return (
			            <li className="d-inline-block mr-3 pr-4 border-dark border-right">
			              <a href={el.link}>
			                <i className={`mr-2 ${el.iconClass}`} aria-hidden="true"></i>
			                {el.name}
			              </a>
			            </li>
		          	)
		        })}
	          </ul>
	        </div>
	      </div>
		</React.Fragment>
	)
}