import { Title } from "../Title"

export const GetAQuoteForm: React.FC = () => {
  const getAQuoteFormStyles = `
    .form-box .section-title h2 {
      color: #fff;
    }
    .form-box form button {
      margin-left: 15px;
    }

    @media (min-width: 576px) {
      .form-box .get-quote {
        padding: 80px 50px;
      }
      .form-box .form-group {
        width: 100%;
      }
      .form-box form div {
        float: left;
      }
    }
  `

	return (
      <div className="row form-box my-5 pt-3">
        <div className="col py-5 get-quote bg-dark text-white">
          <div className="col-12">
            <Title type="dark" title="Get a free quote" subtitle="Construction Group of Industry" />
          </div>
          <form>
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-primary mb-3">
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
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-primary mb-3">
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
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-primary mb-3">
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
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-primary mb-3">
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
            <div className="col-12">
              <button
                type="submit"
                className="btn-rounded btn-primary-rounded my-3"
              >
                Request Quote
              </button>
            </div>
          </form>
        </div>
      </div>
	)
}