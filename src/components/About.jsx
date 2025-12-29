import React from "react";



export default function About() {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <h1 className="fw-bold mb-3 border-bottom d-inline-block">
                About Us
              </h1>

              <p className="text-muted mt-3">
                We are a multi-award-winning digital consulting and engineering
                firm that provides end-to-end software solutions to enterprises.
              </p>

              <button className="btn btn-primary px-4 mt-2">
                Contact
              </button>
            </div>

            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src="/about-illustration-1.svg"
                alt="team"
                className="img-fluid"
              />
            </div>

          </div>
        </div>
      </section>

      {/* WHO ARE WE */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src="/about-illustration-2.svg"
                alt="development"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Who Are We?</h2>

              <p className="text-muted">
                We are highly passionate about Web and Mobile application
                Development Services.
              </p>

              <ul className="list-unstyled">
                <li className="d-flex mb-2">
                  <span className="text-primary fw-bold me-2">✔</span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li className="d-flex mb-2">
                  <span className="text-primary fw-bold me-2">✔</span>
                  Nullam posuere tortor ut risus posuere varius
                </li>
                <li className="d-flex mb-2">
                  <span className="text-primary fw-bold me-2">✔</span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li className="d-flex">
                  <span className="text-primary fw-bold me-2">✔</span>
                  Nullam posuere tortor ut risus posuere varius
                </li>
              </ul>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
