import React from "react";
import { TeamMemberI, team } from "../../config/team";

export const TeamList: React.FC = () => {
  const teamStyles = `
    .team-item {
      padding: 30px 20px;
      margin-bottom: 80px;
    }
    .thumbnail {
      display: block;
      position: absolute;
      width: 165px;
      height: 165px;
      border-radius: 50%;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      overflow: hidden;
      z-index: 9999;
    }
    .thumbnail img {
      transition: ease-in-out .30s;
    }
    .thumbnail img:hover {
      transform: scale(1.1);
    }
    .item-content {
      transform: translateY(50px);
      padding: 100px 30px 30px;
      background: #f9f9f9;
    }
    .item-content a {
      color: #444;
      font-size: 1.2rem;
      font-weight: 700;
      transition: ease-in-out .25s;
    }
    .item-content a:hover {
      text-decoration: none;
      color: #ff6a00;
    }
    .item-content .role {
      font-size: .9rem;
      color: #888888;
    }
    .item-content ul li {
      display: inline-block;
      margin: 0 5px 5px;
      width: 34px;
      height: 34px;
      line-height: 34px;
      border-radius: 50%;
      color: #767676;
      font-size: 15px;
      background: white;
    }
    .team-item ul li a {
      transition: ease-in-out .25s;
    }
    .team-item ul li a:hover {
      color: #ff6a00;
    }
    .pagination ul {
      position: relative;
      width: 85%;
      margin: 0 auto;
      text-align: center;
    }
    .pagination ul li {
      display: inline-block;
      margin: 2px 5px;
      padding: 15px 20px;
      background: #f7f7f7;
      text-transform: uppercase;
      border-radius: 30px;
      font-family: 'Montserrat', sans-serif;
      font-size: .9rem;
      font-weight: bold;
      text-align: center;
      background: #f7f7f7;
      -webkit-transition: 0.3s ease;
      transition: 0.3s ease;
    }
    .pagination ul li.active {
      background: #feb500;
    }
    .pagination ul li.prev-next.active {
      padding: 15px 40px;
    }
    .pagination ul li.page-navi-dots {
      background: none;
    }
    .pagination ul li a {
      color: #000;
    }

    @media (min-width: 576px) {
      .pagination ul li:hover {
        background: #feb500;
      }
      .pagination ul li.page-navi-dots:hover {
        background: none;
      }
      .pagination ul li a:hover {
        text-decoration: none;
      }
    }
  `;

  return (
    <section id="team">
      <style>{teamStyles}</style>
      <div className="container">
        <div className="row pt-5 mt-5 text-center">
          {team.map((member, i) => {
            return (
              <TeamMember
                key={i}
                imgSrc={member.imgSrc}
                name={member.name}
                role={member.role}
                social={member.social}
              />
            );
          })}
        </div>

        <div className="row pb-5 mb-5 pagination">
          <ul>
            <li className="prev-next active">
              <a href="#">Prev</a>
            </li>
            <li className="active">
              <a href="#">01</a>
            </li>
            <li>
              <a href="#">02</a>
            </li>
            <li className="page-navi-dots">
              <span>. . . . . .</span>
            </li>
            <li>
              <a href="#">6</a>
            </li>
            <li className="prev-next active">
              <a href="#">Next</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const TeamMember: React.FC<TeamMemberI> = ({ imgSrc, name, role, social }) => {
  return (
    <div className="col-sm-4">
      <div className="team-item">
        <div className="thumbnail">
          <img src={imgSrc} alt={name} />
        </div>

        <div className="item-content">
          <a className="text-uppercase">{name}</a>
          <p className="role">{role}</p>
          <div className="social">
            <ul>
              {social.map((socialLink, i) => (
                <li key={i}>
                  <a href={socialLink.link}>
                    <i className={socialLink.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
