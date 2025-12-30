import React from "react";
import AboutOne from "../assets/AboutOne.webp";
import AboutTwo from "../assets/AboutTwo.png";


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
                We are a movie streaming platform built to deliver high-quality
                entertainment without complexity. Our focus is simple: bring
                movies and series from different genres, languages, and creators
                into one seamless viewing experience.
              </p>

              <button className="btn btn-primary px-4 mt-2">Contact</button>
            </div>

            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src={AboutOne} alt="AboutOne"
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
                src={AboutTwo} alt="AboutTwo"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Who Are We?</h2>

              <p className="text-muted">
                We are highly passionate about delivering premium movie and
                series streaming experiences.
              </p>

              <ul className="list-unstyled">
                <li className="d-flex mb-2">
                  <span className="text-primary fw-bold me-2">✔</span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li className="d-flex mb-2">
                  <span className="text-primary fw-bold me-2">✔</span>A platform
                  built for seamless, high-quality on-demand streaming
                </li>
                <li className="d-flex mb-2">
                  <span className="text-primary fw-bold me-2">✔</span>
                  Curated movies and series across genres, languages, and
                  regions
                </li>
                <li className="d-flex">
                  <span className="text-primary fw-bold me-2">✔</span>
                  Optimized for fast playback, minimal buffering, and smooth
                  performance
                </li>
                 <li className="d-flex">
                  <span className="text-primary fw-bold me-2">✔</span>
                  Accessible anytime, anywhere, across all modern devices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
