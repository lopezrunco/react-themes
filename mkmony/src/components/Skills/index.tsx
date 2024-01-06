import React from "react"

import { skills } from "../../config/skills"

export const Skills: React.FC = () => {
	const styles = `
		#habilities i {
		  margin-bottom: 20px;
		  color: #3f9f42;
		  font-size: 60px;
		  transition: ease-in-out .25s;
		  cursor: pointer;
		}

		#habilities i:hover {
		  opacity: .8;
		}

		#habilities .box {
		  padding: 0px 20px;
		}

		#habilities .box h6 {
		  color: #1c1d1b;
		  font-weight: 700;
		}

		#habilities .box p {
		  font-size: 15px;
		  color: #999999;
		  line-height: 20px;
		}

		#habilities .box a {
		  border-bottom: 2px solid #3f9f4282;
		  padding-bottom: 5px;
		  transition: ease-in-out .25;
		}

		#habilities .box a:hover {
		  border-bottom: 2px solid #3f9f42;
		}

		@media only screen and (max-width: 820px){
		  #habilities,
		  #habilities h6 {
		    text-align: center;
		  }

		  #habilities .box {
		    padding: 0px 20px 50px;
		  }
		}
	`

	return (
        <section id="habilities">
        	<style>{styles}</style>
            <article className="content-wrap">
                <div className="row">
                	{skills.map((el, i) => (
	                    <div className="box col-md-3">
	                        <i className={el.iconClassName}></i>
	                        <h6>{el.title}</h6>
	                        <p>{el.description}</p>
	                        <a href={el.link}>Read more</a>
	                    </div>
                	))}
                </div>
            </article>
        </section>
	)
}