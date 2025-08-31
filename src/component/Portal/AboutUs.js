import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="mb-3">About Us</h1>
          <p className="text-muted mb-4">
            We are committed to delivering reliable insurance solutions backed by
            strong expertise, responsive service, and a customer-first mindset.
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Our Mission</h5>
                  <p className="card-text">
                    Empower businesses and individuals with protection that is
                    simple, transparent, and effective, so they can focus on
                    what matters most.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Our Values</h5>
                  <ul className="mb-0">
                    <li>Customer obsession</li>
                    <li>Integrity and transparency</li>
                    <li>Reliability at scale</li>
                    <li>Continuous improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h5>Contact</h5>
            <p className="mb-1">Have questions? We're here to help.</p>
            <Link className="btn btn-orange" to="/Portal/ContactUs">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
