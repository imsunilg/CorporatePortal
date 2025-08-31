import React from "react";
import "./Shimmer.css";

export function NavBarSkeleton() {
  return (
    <div className="bg-white border-bottom sticky-top">
      <div className="container py-2 d-flex align-items-center">
        <div className="skeleton sk-logo mr-3" />
        <div className="d-none d-lg-flex flex-grow-1 sk-gap-1">
          <div className="skeleton sk-pill" />
          <div className="skeleton sk-pill" />
          <div className="skeleton sk-pill" />
          <div className="skeleton sk-pill" />
        </div>
        <div className="d-none d-lg-flex ml-auto sk-gap-2">
          <div className="skeleton sk-btn" />
          <div className="skeleton sk-btn" />
        </div>
      </div>
    </div>
  );
}

export function FooterSkeleton() {
  return (
    <div className="bg-white border-top">
      <div className="container py-3">
        <div className="skeleton sk-footer-line w-75 mb-2" />
        <div className="skeleton sk-footer-line w-50" />
      </div>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="container py-4">
      <div className="skeleton sk-heading w-75 mb-3" />
      <div className="skeleton sk-subheading w-50 mb-4" />

      <div className="row">
        {[...Array(6)].map((_, i) => (
          <div className="col-12 col-md-6 col-lg-4 mb-3" key={i}>
            <div className="skeleton sk-card w-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Page-specific skeletons
export function HomeSkeleton() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-light border-bottom">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-3 mb-lg-0">
              <div className="skeleton sk-heading w-100 mb-3" />
              <div className="skeleton sk-subheading w-75 mb-2" />
              <div className="skeleton sk-subheading w-50 mb-3" />
              <div className="d-flex sk-gap-2">
                <div className="skeleton sk-btn" />
                <div className="skeleton sk-btn" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="skeleton w-100" style={{height: 200, borderRadius: 10}} />
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="container py-4">
        <div className="row">
          {[...Array(4)].map((_, i) => (
            <div className="col-12 col-md-6 col-lg-3 mb-3" key={i}>
              <div className="skeleton sk-card w-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="bg-white border-top border-bottom">
        <div className="container py-4">
          <div className="skeleton sk-heading w-50 mb-3" />
          <div className="row">
            {[...Array(6)].map((_, i) => (
              <div className="col-12 col-md-6 col-lg-4 mb-3" key={i}>
                <div className="skeleton sk-card w-100" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="container py-4">
        <div className="row">
          {[...Array(8)].map((_, i) => (
            <div className="col-6 col-md-3 col-lg-2 mb-3" key={i}>
              <div className="skeleton w-100" style={{height: 40, borderRadius: 6}} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LoginSkeleton() {
  return (
    <div className="auth-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">
            <div className="card auth-card shadow p-4">
              <div className="skeleton w-100 mb-3" style={{height: 28, borderRadius: 6}} />
              <div className="skeleton w-75 mb-4" style={{height: 18, borderRadius: 6}} />
              <div className="skeleton w-100 mb-3" style={{height: 48, borderRadius: 8}} />
              <div className="skeleton w-100 mb-3" style={{height: 48, borderRadius: 8}} />
              <div className="skeleton w-100" style={{height: 40, borderRadius: 8}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutSkeleton() {
  return (
    <div className="container py-5">
      <div className="skeleton sk-heading w-50 mb-3" />
      <div className="skeleton sk-subheading w-75 mb-4" />
      <div className="row">
        <div className="col-md-6 mb-3"><div className="skeleton sk-card w-100" /></div>
        <div className="col-md-6 mb-3"><div className="skeleton sk-card w-100" /></div>
      </div>
      <div className="d-flex sk-gap-2 mt-2">
        <div className="skeleton sk-btn" />
      </div>
    </div>
  );
}

export function ContactSkeleton() {
  return (
    <div className="container py-5">
      <div className="skeleton sk-heading w-50 mb-3" />
      <div className="row">
        <div className="col-md-7 mb-3">
          <div className="skeleton w-100 mb-3" style={{height: 48, borderRadius: 8}} />
          <div className="skeleton w-100 mb-3" style={{height: 48, borderRadius: 8}} />
          <div className="skeleton w-100 mb-3" style={{height: 48, borderRadius: 8}} />
          <div className="skeleton w-100 mb-3" style={{height: 120, borderRadius: 8}} />
          <div className="skeleton w-25" style={{height: 40, borderRadius: 8}} />
        </div>
        <div className="col-md-5 mb-3">
          <div className="skeleton sk-card w-100" />
        </div>
      </div>
    </div>
  );
}

export function DigitalSkeleton() {
  return (
    <div>
      <div className="bg-light border-bottom">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-3 mb-lg-0">
              <div className="skeleton sk-heading w-75 mb-3" />
              <div className="skeleton sk-subheading w-75 mb-3" />
              <div className="d-flex sk-gap-2">
                <div className="skeleton sk-btn" />
                <div className="skeleton sk-btn" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="skeleton w-100" style={{height: 200, borderRadius: 10}} />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          {[...Array(6)].map((_, i) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={i}>
              <div className="skeleton sk-card w-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="container py-4">
      <div className="skeleton sk-heading w-50 mb-3" />
      <div className="row">
        {[...Array(4)].map((_, i) => (
          <div className="col-12 col-md-6 mb-3" key={i}>
            <div className="skeleton sk-card w-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
