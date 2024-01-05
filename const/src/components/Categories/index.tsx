import React from "react";

export const Categories: React.FC = () => {
  return (
    <div className="widget categories-widget py-4">
      <h4 className="widget-title">Categories</h4>
      <div className="widget-menu">
        <ul className="list-unstyled">
          <li>
            <a href="#">
              <span>Experience</span>
              <span>22</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Planing</span>
              <span>04</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Solutions</span>
              <span>10</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Unlimited</span>
              <span>06</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Comunication</span>
              <span>20</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Responsive</span>
              <span>01</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
