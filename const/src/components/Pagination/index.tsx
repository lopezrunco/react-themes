import React from "react";

interface PaginationPropsI {
  pages: number;
}

export const Pagination: React.FC<PaginationPropsI> = ({ pages }) => {
  const paginationStyles = `
    .pagination {
      margin: 50px 0;
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

  const pageItems = [];

  for (let i = 1; i <= pages; i++) {
    const isActive = i === 1 ? "active" : "";
    pageItems.push(
      <li key={i} className={isActive}>
        <a href="#">{i}</a>
      </li>
    );
  }

  return (
    <div className="row pb-5 mb-5 pagination">
      <style>{paginationStyles}</style>
      <ul>
        <li className="prev-next active">
          <a href="#">Prev</a>
        </li>
        {pageItems}
        <li className="page-navi-dots">
          <span>. . . . . .</span>
        </li>
        <li className="prev-next active">
          <a href="#">Next</a>
        </li>
      </ul>
    </div>
  );
};
