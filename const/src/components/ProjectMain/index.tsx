import React from "react";

interface ProjectMainI {
  project: object;
}

export const ProjectMain: React.FC<ProjectMainI> = ({ project }) => {
  const { title, client, area, value, location, year, architect } = project;

  return (
    <div className="col-sm-9 mb-3 main-content">
      <div className="post-fields">
        <h2 className="project-title">{title}</h2>
        <div className="lists d-flex">
          <ul className="list-unstyled d-inline-block mr-5 pr-5 mb-5">
            <li>
              <strong>Client: </strong>
              {client}
            </li>
            <li>
              <strong>Surface area: </strong>
              {area}
            </li>
            <li>
              <strong>Value: </strong> {value}
            </li>
          </ul>
          <ul className="list-unstyled d-inline-block mr-5">
            <li>
              <strong>Location: </strong>
              {location}
            </li>
            <li>
              <strong>Year completed: </strong>
              {year}
            </li>
            <li>
              <strong>Architect: </strong>
              {architect}
            </li>
          </ul>
        </div>
      </div>

      <div className="project-detail-gallery mb-5 pb-4">
        <div className="project-detail-thumbnail mb-4">
          <img
            src="../assets/construction-project-detail-thumb.png"
            className="w-100"
          />
        </div>
        <div className="row project-detail-carousel">
          <div className="col-6 col-sm-5">
            <a href="#" className="hover-zoom">
              <i className="fa fa-2x fa-search"></i>
              <img
                src="../assets/project-detail-carousel-1.png"
                className="w-100"
              />
            </a>
          </div>
          <div className="col-6 col-sm-5">
            <a href="#" className="hover-zoom">
              <i className="fa fa-2x fa-search"></i>
              <img
                src="../assets/project-detail-carousel-2.png"
                className="w-100"
              />
            </a>
          </div>
          <div className="col-sm-5 d-none d-sm-block">
            <a href="#" className="hover-zoom">
              <i className="fa fa-2x fa-search"></i>
              <img
                src="../assets/project-detail-carousel-3.png"
                className="w-100"
              />
            </a>
          </div>
          <div className="col-sm-5 d-none d-sm-block">
            <a href="#" className="hover-zoom">
              <i className="fa fa-2x fa-search"></i>
              <img
                src="../assets/project-detail-carousel-4.png"
                className="w-100"
              />
            </a>
          </div>
          <div className="col-sm-5 d-none d-sm-block">
            <a href="#" className="hover-zoom">
              <i className="fa fa-2x fa-search"></i>
              <img
                src="../assets/project-detail-carousel-5.png"
                className="w-100"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="project-detail-content mb-5">
        <p>
          Lorem ipsum dolor sit amet, conse nil adipiscing Donec nec eros trist
          ms pellentesqu no liues il Ut et con gue augue Maecenas feec eros
          tristiq nsllla pellent Ut et co augue Maecenas fermentum vel ante a
          aliqi. Etiam vivas sapien. vel ante a aliq tristiq eget Lorem ipsum
          dolor sit amet, conse n pellentesqu no liues il Ut et congue augue
          Maecenas feec eros tristiq nsl lla pellent Ut et co augue Maecenas
          fermentum vel Maecenas fermentum vel anteante....
        </p>
        <p>
          Lorem ipsum dolor sit amet, conse nil adipiscing Donec nec eros
          tristiq ms pellente squ no liues il Ut et co ngue augue Maecenas feec
          eros tristiq nsl
        </p>
        <ul className="list-unstyled mt-4">
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>

      <div className="row form-box my-5 pt-3">
        <div className="col py-5 get-quote bg-dark text-white">
          <div className="row section-title">
            <div className="col">
              <h2>Get a free quote</h2>
              <h4>Construction Group of Industry</h4>
            </div>
          </div>

          <form>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-primary">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control p-4 rounded-0 font-italic"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Complete Name"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-primary">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control p-4 rounded-0 font-italic"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-primary">
                  Phone No.
                </label>
                <input
                  type="tel"
                  className="form-control p-4 rounded-0 font-italic"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter No"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-primary">
                  How can we help ?
                </label>
                <input
                  type="text"
                  className="form-control p-4 rounded-0 font-italic"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Select option"
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn-rounded btn-primary-rounded my-3"
            >
              Request Quote
            </button>
          </form>
        </div>
      </div>

      <div className="project-detail-content mb-5">
        <p>
          Gue augue Maecenas feec eros tristiq nsllla pellent Ut et co augue
          Maecenas fermentum vel ante a aliqi. Etiam vivas sapien. vel ante a
          aliq tristiq eget Lorem ipsum dolor sit amet, conse n pellentesqu no
          liues il Ut et congue augue Maecenas feec eros tristiq nsl lla pellent
          Ut et co augue Maecenas fermentum vel Maecenas fermentum vel
          anteante...
        </p>
      </div>

      {/* social mobile */}
      <div className="row">
        <div className="d-sm-none col social-box-mobile">
          <ul className="social-top list-unstyled">
            <li className="d-inline-block mr-3">
              <a href="#">
                <i className="fa fa-facebook text-dark" aria-hidden="true"></i>
              </a>
            </li>
            <li className="d-inline-block mx-3">
              <a href="#">
                <i
                  className="fa fa-google-plus text-dark"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li className="d-inline-block mx-3">
              <a href="#">
                <i className="fa fa-twitter text-dark" aria-hidden="true"></i>
              </a>
            </li>
            <li className="d-inline-block ml-3">
              <a href="#">
                <i className="fa fa-linkedin text-dark" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* social desktop */}
      <div className="row d-none d-sm-block social-box">
        <div className="d-none d-sm-block col">
          <ul className="social-top-desk list-unstyled justify-content-end">
            <li className="d-inline-block mr-3 pr-4 border-dark border-right">
              <a href="#">
                <i className="mr-2 fa fa-facebook" aria-hidden="true"></i>
                Facebook
              </a>
            </li>
            <li className="d-inline-block mx-3 pr-4 border-dark border-right">
              <a href="#">
                <i className="mr-2 fa fa-google-plus" aria-hidden="true"></i>
                Google plus
              </a>
            </li>
            <li className="d-inline-block mx-3 pr-4 border-dark border-right">
              <a href="#">
                <i className="mr-2 fa fa-twitter" aria-hidden="true"></i>
                Twitter
              </a>
            </li>
            <li className="d-inline-block">
              <a href="#">
                <i className="mr-2 fa fa-linkedin" aria-hidden="true"></i>
                Linked in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
