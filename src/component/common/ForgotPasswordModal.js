import React, { useState } from "react";

export default function ForgotPasswordModal({ open, onClose }) {
  const [mode, setMode] = useState("email"); // 'email' | 'mobile'

  if (!open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content-card shadow">
        <div className="modal-header d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Forgot Password</h6>
          <button className="btn-close" aria-label="Close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <p className="text-muted small mb-3">
            Choose how you want to reset your password and we will send a link/OTP.
          </p>

          <div className="btn-group mb-3" role="group" aria-label="reset method">
            <button
              type="button"
              className={`btn ${mode === "email" ? "btn-orange" : "btn-outline-orange"}`}
              onClick={() => setMode("email")}
            >
              By Email
            </button>
            <button
              type="button"
              className={`btn ${mode === "mobile" ? "btn-orange" : "btn-outline-orange"}`}
              onClick={() => setMode("mobile")}
            >
              By Mobile
            </button>
          </div>

          {mode === "email" ? (
            <div className="form-group">
              <label htmlFor="fp_email" className="small">Registered Email</label>
              <input id="fp_email" type="email" className="form-control" placeholder="you@example.com" />
            </div>
          ) : (
            <div className="form-group">
              <label htmlFor="fp_mobile" className="small">Registered Mobile</label>
              <input id="fp_mobile" type="tel" className="form-control" placeholder="Enter mobile number" />
            </div>
          )}
        </div>
        <div className="modal-footer d-flex justify-content-end gap-2">
          <button className="btn btn-outline-orange" onClick={onClose}>Cancel</button>
          <button className="btn btn-orange" onClick={onClose}>Send</button>
        </div>
      </div>
    </div>
  );
}

