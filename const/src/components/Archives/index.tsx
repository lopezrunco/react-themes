import React from "react";

export const Archives: React.FC = () => {
  return (
    <div className="widget archives-widget py-4">
      <h4 className="widget-title">Files</h4>
      <div className="widget-menu">
        <ul className="list-unstyled">
          <li>
            <a href="#">January 2015</a>
          </li>
          <li>
            <a href="#">Septemeber 2015</a>
          </li>
          <li>
            <a href="#">August 2015</a>
          </li>
          <li>
            <a href="#">July 2015</a>
          </li>
          <li>
            <a href="#">June 2015</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
