import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 font-weight-bold mb-3">
                Corporate Insurance Solutions for Modern Businesses
              </h1>
              <p className="lead text-muted mb-4">
                Protect your people, assets, and operations with comprehensive
                insurance programs tailored to your industry and risk profile.
              </p>
              <div className="d-flex gap-3">
                <Link to="/Portal/CPTLogin" className="btn btn-orange btn-lg">
                  Get Started
                </Link>
                <Link to="/contact-us" className="btn btn-outline-orange btn-lg">
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="embed-responsive embed-responsive-16by9 rounded shadow-sm bg-white">
                <div className="embed-responsive-item d-flex align-items-center justify-content-center">
                  <span className="text-muted">Your business, comprehensively protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container py-5">
        <div className="row g-4">
          {[
            {
              title: "Risk Advisory",
              text: "Proactive risk assessment and mitigation for your operations.",
            },
            {
              title: "Pan-India Service",
              text: "On-ground presence and responsive support when you need it.",
            },
            {
              title: "Claims Expertise",
              text: "Dedicated team to guide you across the claims lifecycle.",
            },
            {
              title: "Digital-first",
              text: "Self-service tools and integrations that scale with you.",
            },
          ].map((x) => (
            <div className="col-md-6 col-lg-3" key={x.title}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{x.title}</h5>
                  <p className="card-text text-muted mb-0">{x.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-5 border-top border-bottom">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="h3 mb-0">Solutions for Every Risk</h2>
            <Link to="/about-us" className="text-decoration-none">Learn more →</Link>
          </div>
          <div className="row g-4">
            {[
              { key: "property", title: "Property Insurance", text: "Protect premises, equipment, and stock from perils." },
              { key: "marine", title: "Marine Insurance", text: "Coverage across transit, logistics and supply chain." },
              { key: "liability", title: "Liability Insurance", text: "Safeguard against third-party and professional liabilities." },
              { key: "health", title: "Group Health", text: "Comprehensive benefits for employees and families." },
              { key: "engineering", title: "Engineering & Projects", text: "Coverage for project works, machinery and contractors." },
            ].map((p) => (
              <div className="col-md-6 col-lg-4" key={p.key}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title mb-1">{p.title}</h5>
                    <p className="text-muted mb-3">{p.text}</p>
                    <div className="d-flex gap-2">
                      <Link to={`/product/${p.key}/overview`} className="btn btn-sm btn-orange">Overview</Link>
                      <Link to={`/product/${p.key}/coverage`} className="btn btn-sm btn-outline-orange">Coverage</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="container py-5">
        <h2 className="h4 mb-4">Trusted by Leading Enterprises</h2>
        <div className="row align-items-center">
          {["adani.png","apollo-tyres.png","BSE.png","BPCL.png","eicher.png","nestle.png","persistent.png","titan.png"].map((logo) => (
            <div className="col-6 col-md-3 col-lg-2 text-center mb-3" key={logo}>
              <img src={`/assets/images/Web-logos/${logo}`} alt={logo} className="img-fluid" style={{maxHeight: 40, opacity: 0.75}} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-white">
        <div className="container d-flex flex-column flex-lg-row align-items-lg-center justify-content-between">
          <h3 className="mb-3 mb-lg-0">Ready to build a robust risk program?</h3>
          <div className="d-flex gap-3">
            <Link to="/Portal/CPTLogin" className="btn btn-orange">Sign in</Link>
            <Link to="/contact-us" className="btn btn-outline-orange">Talk to us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

