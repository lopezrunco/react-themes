import React from "react"

import { slides } from "../../config/slides"

export const Slider: React.FC = () => {
	const styles = `
		.slider {
		  height: 100vh;
		  background: url(${slides[0].imgSrc}) center;
		  background-size: cover;
		  font-weight: 700;
		  font-size: 72px;
		  line-height: 48px;
		  color: rgb(28, 29, 27);
		}

		.slider .position {
		  position: absolute;
		  top: 50%;
		  transform: translateY(-50%);
		}

		.slider h2,
		.slider p,
		.slider .btns {
		  width: 650px;
		  height: auto;
		}

		.slider p {
		  margin-bottom: 30px;
		  font-family: "Fira Sans";
		  line-height: 28px;
		  font-weight: 400;
		  font-size: 18px;
		  color: rgb(28 29 27 / 62%);
		}

		@media only screen and (max-width: 820px) {
		  .slider {
		    text-align: center;
		  }

		  .slider h2 {
		    font-size: 60px;
		  }

		  .slider h2,
		  .slider p,
		  .slider .btns {
		    width: 100%;
		    height: auto;
		  }
		}
	`

	return (
        <div className="slider">
        <style>{styles}</style>
	        <div className="content-wrap">
	            <div className="position">
	                <h2>{slides[0].title}</h2>
	                <p>{slides[0].content}</p>
	                <div className="btns">
	                	{slides[0].links.map((el, i) => (<a key={i} href={el.link} className={el.btnClassName}>{el.title}</a>))}
	                </div>
	            </div>
	        </div>
	    </div>
	)
}