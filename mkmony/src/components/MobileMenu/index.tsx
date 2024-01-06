import React from "react"

import { menuItems } from "../../config/menuItems"

export const MobileMenu: React.FC = () => {
	const styles = `
		#menu {
		  position: fixed;
		  top: 0;
		  width: 100%;
		  height: 100%;
		  background: #09180af3;
		  z-index: 9999;
		  text-transform: capitalize;
		  text-align: center;
		  font-size: 40px;
		}

		#menu ul {
		  height: 100%;
		  transform: translateY(20%);
		}

		#menu ul li {
		  padding: 15px;
		}

		#menu ul li a {
		  color: #fff;
		  font-size: 25px;
		}

		.fa-times {
		  position: absolute;
		  top: 20px;
		  right: 20px;
		  color: #fff;
		}
	`

	return (
		<div id="menu" className="hidden">
			<style>{styles}</style>
	        <ul>
	        	{menuItems.map(el => (<li key={el.id}><a href={el.link}>{el.label}</a></li>))}
	        </ul>
	        <i id="close" className="fas fa-times"></i>
	    </div>
	)
}