import React from "react";
import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaRobot,
  FaChartBar,
  FaHeadset,
  FaShieldAlt,
  FaCloud,
  FaFileAlt,
  FaHeartbeat,
  FaExchangeAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function DigitalSolution() {
  const features = [
    {
      icon: <FaCloud className="mr-2" />,
      title: "Corporate Portal",
      text: "Self-service for policy management, endorsements, and renewals.",
    },
    {
      icon: <FaFileAlt className="mr-2" />,
      title: "Claims Intimation & Tracking",
      text: "Intimate claims online and track status end-to-end.",
    },
    {
      icon: <FaExchangeAlt className="mr-2" />,
      title: "APIs & ERP Integration",
      text: "Integrate with HRMS/ERP systems for seamless data flow.",
    },
    {
      icon: <FaMobileAlt className="mr-2" />,
      title: "Mobile App & E-Cards",
      text: "Digital health e-cards and access on the go.",
    },
    {
      icon: <FaHeartbeat className="mr-2" />,
      title: "Wellness & Health Stack",
      text: "Preventive programs, OPD, and health initiatives.",
    },
    {
      icon: <FaChartBar className="mr-2" />,
      title: "Analytics & MIS",
      text: "Dashboards, utilization reports, and actionable insights.",
    },
    {
      icon: <FaRobot className="mr-2" />,
      title: "Chatbot & Support",
      text: "24x7 assistance for common queries and requests.",
    },
    {
      icon: <FaShieldAlt className="mr-2" />,
      title: "Digital Payments & E-Docs",
      text: "Secure payments, e-policy, and paperless transactions.",
    },
  ];

  const benefits = [
    "Faster turnaround with reduced manual touchpoints",
    "Improved employee experience and transparency",
    "Stronger controls with audit trails and role-based access",
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-light py-5 border-bottom">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 font-weight-bold mb-3">Digital Solutions</h1>
              <p className="lead text-muted mb-4">
                Seamless, secure, and scalable digital experiences for corporate
                insurance - from onboarding to claims and analytics.
              </p>
              <div className="d-flex gap-3">
                <Link to="/Portal/CPTLogin" className="btn btn-orange btn-lg">
                  Sign in to Portal
                </Link>
                <Link to="/contact-us" className="btn btn-outline-orange btn-lg">
                  Talk to us
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="embed-responsive embed-responsive-16by9 rounded shadow-sm bg-white">
                <div className="embed-responsive-item d-flex align-items-center justify-content-center">
                  <span className="text-muted">Digital-first corporate insurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="container py-5">
        <h2 className="h4 mb-4">What you get</h2>
        <div className="row g-4">
          {features.map((f) => (
            <div className="col-md-6 col-lg-4" key={f.title}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex">
                  <div className="text-primary icon-lg" aria-hidden>
                    {f.icon}
                  </div>
                  <div>
                    <h5 className="card-title mb-1">{f.title}</h5>
                    <p className="card-text text-muted mb-0">{f.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white border-top border-bottom py-5">
        <div className="container">
          <h2 className="h4 mb-3">Why it matters</h2>
          <ul className="list-unstyled mb-0">
            {benefits.map((b) => (
              <li key={b} className="mb-2 d-flex align-items-start">
                <FaCheckCircle className="text-success mr-2 mt-1" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-white">
        <div className="container d-flex flex-column flex-lg-row align-items-lg-center justify-content-between">
          <h3 className="mb-3 mb-lg-0">Ready to digitize your program?</h3>
          <div className="d-flex gap-3">
            <Link to="/Portal/CPTLogin" className="btn btn-orange">
              Access Corporate Portal
            </Link>
            <Link to="/contact-us" className="btn btn-outline-orange">
              Request a demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
