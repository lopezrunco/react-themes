import React from "react"

import { menuItems } from "../../config/menuItems"
import { contactInfo } from "../../config/contactInfo"

export const Header: React.FC = () => {
	const styles = `
		.main-logo {
		  position: absolute;
		  top: 0;
		  left: 0;
		  display: inline-block;
		  text-indent: -9999em;
		}

		header {
		  -webkit-box-shadow: 0px 13px 24px 0px rgba(0, 0, 0, 0.09);
		  -moz-box-shadow: 0px 13px 24px 0px rgba(0, 0, 0, 0.09);
		  box-shadow: 0px 13px 24px 0px rgba(0, 0, 0, 0.09);
		}

		header .content-wrap {
		  height: 100px;
		}

		.img-logo {
		  width: 220px;
		  height: auto;
		}

		.nav-bar {
		  position: relative;
		  height: 130px;
		  padding: 20px;
		}

		.fa-bars {
		  display: none;
		}

		.nav-bar ul {
		  position: relative;
		}

		.main-nav {
		  position: absolute;
		  top: 0;
		  right: 0;
		  padding: 38px;
		}

		.main-nav li {
		  padding: 0 20px;
		  float: left;
		  -webkit-transition: ease-in-out .2s;
		  -moz-transition: ease-in-out .2s;
		  transition: ease-in-out .2s;
		}

		.main-nav li a {
		  padding-bottom: 10px;
		  letter-spacing: .8px;
		  font-weight: 700;
		  -webkit-transition: ease-in-out .1s;
		  -moz-transition: ease-in-out .1s;
		  transition: ease-in-out .1s;
		}

		.main-nav li a:hover {
		  color: rgb(28, 29, 27);
		  border-bottom: 3px solid #3f9f42;
		}

		.main-nav li a.tel:hover {
		  border-bottom: none;
		}

		.main-nav li i {
		  color: #3f9f42;
		}

		.active {
		  border-bottom: 3px solid #3f9f42;
		}

		@media only screen and (max-width: 820px) {
		  .img-logo img {
		    position: relative;
		    left: 50vw;
		    transform: translateX(-55%);
		  }

		  .main-nav {
		    display: none;
		  }

		  .fa-bars {
		    display: block;
		    padding: 35px 0;
		    font-size: 30px;
		    text-align: center;
		    color: #000;
		  }
		}
	`

	return (
        <header>
        	<style>{styles}</style>
            <div className="content-wrap">
                <h1 className="main-logo">Web title</h1>
                <div className="nav-bar">
                    <div className="img-logo">
                        <a href="/">
                            <img width="396" src="../assets/logo.png" alt="main logo" />
                        </a>
                    </div>
                    <nav className="main-nav">
                        <ul>
                        	{menuItems.map(el => (
                        		<li key={el.id}><a className={el.isActive ? 'active' : ''} href={el.link}>{el.label}</a></li>
                        	))}
                            <li><a className="tel" href={contactInfo[0].link}><i className="fa fa-phone"> </i> {contactInfo[0].content}</a></li>
                        </ul>
                    </nav>
                    <div className="menu-bar" id="btn-menu">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </header>
	)
}