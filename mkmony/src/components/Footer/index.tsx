import React from "react"

import { siteInfo } from "../../config/siteInfo"
import { about } from "../../config/about"
import { locations } from "../../config/contactInfo"
import { social } from "../../config/contactInfo"

export const Footer: React.FC = () => {
    const styles = `
        footer {
          padding: 70px 0px;
          background: #3d3d3d;
          line-height: 20px;
          font-size: 14px;
          font-weight: 400;
          font-family: 'Fira Sans';
          line-height: 20px;
          font-size: 14px;
          color: rgba(255, 255, 255, .5);
        }

        footer .footer-box {
          padding-right: 50px;
        }

        footer .footer-box:last-child {
          padding-right: 0px;
        }

        footer .footer-box img {
          margin-bottom: 20px;
        }

        footer h4 {
          margin-bottom: 10px;
          color: #fff;
          font-family: 'Nunito', sans-serif;
          font-weight: 600;
          font-size: 18px;
        }

        footer .footer-box a,
        footer .footer-box span {
          color: rgba(255, 255, 255, .5);
          font-size: 14px;
          font-weight: 300;
        }

        footer .footer-box i {
          margin-right: 20px;
        }

        footer .footer-box span {
          display: inline-block;
          transition: ease-in-out .25s;
        }

        footer .footer-box a:hover,
        footer .footer-box span:hover {
          color: #fff;
        }

        @media only screen and (max-width: 820px) {
          footer {
            padding-bottom: 0px;
          }

          footer,
          footer h4 {
            text-align: center;
          }

          footer .footer-box {
            padding: 0 20px 30px;
          }

          footer .footer-box:last-child {
            padding-right: 20px;
          }
        }
    `

	return (
        <footer id="footer">
            <style>{styles}</style>
            <div className="content-wrap">
                <div className="row">
                    <div className="footer-box col-lg-3">
                        <a href="index.html">
                            <img src="./assets/logo-footer.png" alt="" />
                        </a>
                        <p>© {new Date().getFullYear()}<br />{siteInfo.credits}<br />{siteInfo.copyright}</p>
                    </div>
                    <div className="footer-box col-lg-3">
                    	{locations.map((el, i) => (
                    		<div key={i}>
                                <h4>{el.title}</h4>
                                <p>{el.location}</p>                          
                    		</div>
                    	))}
                    </div>
                    <div className="footer-box col-lg-3">
                        <h4>Follow us</h4>
                        {social.map((el, i) => (
                            <div key={i}>                            
                                <a key={i} href={el.link}><i className={el.iconClass}></i><span>{el.title}</span></a><br />
                            </div>
                        ))}
                    </div>
                    <div className="footer-box col-lg-3">
                        <h4>About us</h4>
                        <p>{about[0].briefAboutUs}</p>
                    </div>
                </div>
            </div>
        </footer>
	)
}