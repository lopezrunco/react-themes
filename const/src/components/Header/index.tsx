import { contactInfo } from "../../config/contactInfo";
import { menuItems } from "../../config/menuItems";
import { socialMediaItems } from "../../config/socialMediaItems";
import { SocialMediaItem } from "../../types";

const logoImgUrl = "./assets/logo-construction.png";

export const Header: React.FC = () => {
  return (
    <header id="header">
      <h1 className="main-title">Construction web</h1>

      {/* <! navbar mobile */}
      <div className="container pt-1 pl-0 pb-2 py-sm-0">
        <nav className="d-sm-none navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="index.html">
            <img src={logoImgUrl} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse p-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              {menuItems.map((menuItem) => (
                <li className="nav-item" key={menuItem.id}>
                  <a className="nav-link" href={menuItem.link}>
                    {menuItem.label}
                    {menuItem.isActive && (
                      <span className="sr-only">(current)</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* <! header top */}
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 p-2 mb-2 mb-sm-0 border-top border-bottom select-lang">
              <select className="custom-select">
                <option selected>Language</option>
                <option value="1">English</option>
                <option value="2">Deutsch</option>
              </select>
            </div>

            <div className="d-none d-sm-block col-5"></div>

            {/* social mobile */}
            <div className="d-sm-none col">
              <ul className="social-top list-unstyled">
                {socialMediaItems.map((item: SocialMediaItem) => (
                  <li key={item.id} className="d-inline-block mr-3">
                    <a href={item.link}>
                      <i className={item.iconClass} aria-hidden="true"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* <! desktop mobile */}
            <div className="d-none d-sm-block col">
              <ul className="social-top-desk list-unstyled justify-content-end">
                {socialMediaItems.map((item: SocialMediaItem) => (
                  <li
                    key={item.id}
                    className="d-inline-block mr-3 pr-4 border-dark border-right"
                  >
                    <a href={item.link}>
                      <i
                        className={`mr-2 ${item.iconClass}`}
                        aria-hidden="true"
                      ></i>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="follow-us-btn d-none">
          <a href="#">Follow Us</a>
        </div>
      </div>

      {/* header main */}
      <div className="header-main">
        <div className="container d-none d-sm-block py-sm-4">
          <div className="row">
            <div className="col-5">
              <a href="index.html">
                <img src={logoImgUrl} className="main-logo" />
              </a>
            </div>

            {contactInfo.map((info) => (
              <div className="col-2" key={info.id}>
                <div className="row">
                  <div className="col-6">
                    <i className={info.icon}></i>
                  </div>
                  <div className={`col-6 ${info.name}`}>
                    <span className="title">{info.text}</span>
                    <span className="data">
                      <a href={info.link}>{info.content}</a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-2">
              <a href="#" className="btn btn-primary">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* navbar desktop */}
      <div className="container">
        <nav className="d-none d-sm-block navbar navbar-expand-lg navbar-light bg-light nav-custom">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {menuItems.map((menuItem) => (
                <li className="nav-item" key={menuItem.id}>
                  <a className="nav-link" href={menuItem.link}>
                    {menuItem.label}
                    {menuItem.isActive && (
                      <span className="sr-only">(current)</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <a id="menu-search" href="#">
              <i className="fa fa-search" aria-hidden="true"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
