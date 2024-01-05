import React from "react";

import { blogArchives } from "../../config/blogPosts"

export const Archives: React.FC = () => {
  const archivesStyles = `
    .archives-widget li:before {
      content: ">";
      font-size: 10px;
      margin-right: 10px;
    }
    .archives-widget li {
      margin-bottom: 1rem;
      font-size: .9rem;
    }
  `

  return (
    <div className="widget archives-widget py-4">
    <style>{archivesStyles}</style>
      <h4 className="widget-title">Files</h4>
      <div className="widget-menu">
        <ul className="list-unstyled">
          {blogArchives.map((el, i) => {
            return (
              <li key={i}>
                <a href={el.link}>{el.date}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};
