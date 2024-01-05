import React from "react";
import { TeamMemberI, team } from "../../config/team";
import { Pagination } from "../Pagination";

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
        <Pagination pages={3} />
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
