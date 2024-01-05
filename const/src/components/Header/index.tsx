import { contactInfo } from "../../config/contactInfo";
import { menuItems } from "../../config/menuItems";
import {
  SocialMediaItemI,
  socialMediaItems,
} from "../../config/socialMediaItems";

const logoImgUrl = "../assets/logo-construction.png";

export const Header: React.FC = () => {
  const headerStyles = `
    .navbar-light .navbar-nav .nav-link {
      color: #444;
    }
    .custom-select {
      position: relative;
      width: 100%;
      padding: 0 15px;
      font-family: 'Poppins', san-serif;
      font-size: 13px;
      border: none;
      border-radius: 0;
    }
    .custom-select:focus {
      border: none;
      outline: 0;
      box-shadow: none;
    }
    .social-top li a {
      font-size: 12px;
    }

    @media (min-width: 996px) {
      .header-top {
        background: #fafafa;
      }
      .select-lang {
        border: none !important;
      }
      .custom-select {
        border-radius: 10px;
      }
      .social-top-desk {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
      .social-top-desk a {
        color: #000;
        font-family: 'Poppins', san-serif;
        font-size: .7rem;
      }
      .social-top-desk a:hover {
        text-decoration: none;
      }
      .header-main .fa {
        color: #feb500;
        font-size: 2.5rem;
      }
      .header-main .email,
      .header-main .phone {
        font-size: .9rem;
      }
      .header-main .email {
        transform: translateX(-40%);
      }
      .header-main .phone {
        transform: translateX(-70%);
      }
      .header-main .title {
        display: block;
        text-transform: uppercase;
        font-weight: 700;
      }
      .header-main .data a {
        color: #101010;
      }
      .header-main .data a:hover {
        text-decoration: none;
      }
      .nav-custom {
        padding: 0 !important;
        margin: 0 !important;
        background: #000 !important;
        text-transform: uppercase;
        font-weight: 700;
        font-size: .9rem;
        z-index: 1000;
      }
      .nav-custom li {
        padding: 15px 30px 15px 30px;
        transition: ease-in-out .30s;
      }
      .nav-custom li a {
        color: #fff !important;
        transition: ease-in-out .30s;
      }
      .nav-custom li:hover {
        background: #feb500;
      }
      .nav-custom li a:hover {
        color: #000 !important;
      }
      .nav-custom #menu-search {
        padding: 23px 25px;
        background: #1f1f1f;
        color: #fff;
        transition: ease-in-out .30s;
      }
      .nav-custom #menu-search:hover {
        background: #feb500;
      }
    }

    @media (min-width: 1400px) {
      .follow-us-btn {
        display: block !important;
        position: absolute;
        right: 0;
        top: 0;
        font-family: 'Poppins', san-serif;
      }
      .follow-us-btn:after {
        content: '';
        display: block;
        width: 18px;
        height: 18px;
        border: 9px solid transparent;
        border-right-color: #1f1f1f;
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;
        margin: auto;
        -webkit-transition: .3s;
        transition: .3s;
        cursor: pointer;
      }
      .follow-us-btn a {
        padding: 14px 48px;
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
        line-height: 20px;
        text-align: center;
        background-color: #101010;
        color: white;
        -webkit-transition: .3s;
        transition: .3s;
      }
      .follow-us-btn a:hover {
        background-color: #ff6a00;
        text-decoration: none;
      }
    }
  `;

  return (
    <header id="header">
      <style>{headerStyles}</style>
      <h1 className="main-title">Construction web</h1>

      {/* <! navbar mobile */}
      <div className="container pt-1 pl-0 pb-2 py-sm-0">
        <nav className="d-lg-none navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
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

            <div className="d-none d-lg-block col-5"></div>

            {/* social mobile */}
            <div className="d-sm-none col">
              <ul className="social-top list-unstyled">
                {socialMediaItems.map((item: SocialMediaItemI) => (
                  <li key={item.id} className="d-inline-block mr-3">
                    <a href={item.link}>
                      <i className={item.iconClass} aria-hidden="true"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* <! desktop mobile */}
            <div className="d-none d-xl-block col">
              <ul className="social-top-desk list-unstyled justify-content-end">
                {socialMediaItems.map((item: SocialMediaItemI) => (
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
        <div className="container d-none d-lg-block py-sm-4">
          <div className="row">
            <div className="col-5">
              <a href="/">
                <img src={logoImgUrl} className="main-logo" />
              </a>
            </div>

            {contactInfo.slice(0, 2).map((info) => (
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
        <nav className="d-none d-lg-block navbar navbar-expand-lg navbar-light bg-light nav-custom">
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
