import React from "react";

interface BreadcrumbsPropsI {
  imgSrc: string;
  title: string;
  subtitle: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsPropsI> = ({
  imgSrc,
  title,
  subtitle,
}) => {
  const breadcrumbsStyles = `
        .header-section-img {
            height: 290px;
            background: url(${imgSrc}) center no-repeat;
            background-size: cover;
        }
        .header-title {
            padding: 120px 0 100px;
        }
        .header-section-img h2 {
            font-size: 3rem;
        }
        .header-section-img h4 {
            font-size: 1rem;
            font-weight: normal;
        }

        @media (min-width: 576px) {
            .page-header-breadcrumb:hover {
                background: #feb500;
            }
            .page-header-breadcrumb a:hover {
                text-decoration: none;
                color: #000;
            }
            #section-header .header-title h2 {
                width: 100%;
            }
        }
    `;

  return (
    <section id="section-header" className="header-section-img">
      <style>{breadcrumbsStyles}</style>
      <article className="container-fluid p-0 h-100">
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="row px-3 header-title">
                <h2 className="text-white text-uppercase">{title}</h2>
                <h4 className="text-white text-uppercase">{subtitle}</h4>
              </div>

              <div className="page-header-breadcrumb btn-rounded btn-primary-rounded">
                <a href="/">Home</a> - <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
