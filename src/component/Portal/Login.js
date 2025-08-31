import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Auth.css";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import ForgotPasswordModal from "../common/ForgotPasswordModal";
  

const Login = () => {
  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [otpMode, setOtpMode] = useState(false);
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [cooldown, setCooldown] = useState(0); // seconds until resend is enabled
  const [otpMethod, setOtpMethod] = useState("mobile"); // 'mobile' | 'email'
  const [forgotOpen, setForgotOpen] = useState(false);

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    // simulate login
    navigate("/dashboard");
  };

  const validMobile = /^\d{10}$/.test(mobile);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validOtp = /^\d{6}$/.test(otp);

  const sendOtp = (e) => {
    if (e) e.preventDefault();
    if (otpMethod === "mobile" && !validMobile) return;
    if (otpMethod === "email" && !validEmail) return;
    setOtpSent(true);
    setCooldown(30); // 30s cooldown
  };

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  return (
    <div className="auth-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">
            <div className="card auth-card shadow p-4 fade-in-up">
              {/* Logo */}
              <div className="text-center mb-3">
                <img
                  src="https://corporate.icicilombard.com/assets/images/logo.svg"
                  alt="ICICI Lombard"
                  className="img-fluid"
                  style={{ maxWidth: "200px" }}
                />
              </div>

              {/* Title */}
              <h5 className="text-center mb-4 font-weight-bold" style={{ color: "#003366", fontSize: "1.1rem" }}>
                Corporate Portal Login
              </h5>

              {/* Form */}
              {!otpMode ? (
                <form onSubmit={handleLogin}>
                  <div className="form-group mb-3">
                    <label htmlFor="username" className="font-weight-semibold small">User ID</label>
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><FaUser /></span>
                      </div>
                      <input type="text" id="username" className="form-control" placeholder="Enter User ID" required />
                    </div>
                  </div>

                  <div className="form-group mb-2">
                    <label htmlFor="password" className="font-weight-semibold small">Password</label>
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><FaLock /></span>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="form-control"
                        placeholder="Enter Password"
                        required
                      />
                      <div className="input-group-append">
                        <button type="button" className="btn btn-outline-orange" onClick={() => setShowPassword((v) => !v)}>
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3 auth-links">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="remember" />
                      <label className="custom-control-label" htmlFor="remember">Remember me</label>
                    </div>
                    <button type="button" className="btn btn-link p-0" onClick={() => setForgotOpen(true)}>
                      Forgot Password?
                    </button>
                  </div>

                  <button type="submit" className="btn btn-orange w-100 py-2 font-weight-bold">Login</button>
                </form>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (((otpMethod==="mobile" && validMobile) || (otpMethod==="email" && validEmail)) && validOtp) handleLogin(); }}>
                  {/* Method toggle */}
                  <div className="btn-group btn-group-sm mb-3" role="group" aria-label="OTP method">
                    <button type="button" className={`btn ${otpMethod==='mobile' ? 'btn-orange' : 'btn-outline-orange'}`} onClick={() => { setOtpMethod('mobile'); setOtpSent(false); setOtp(''); }}>
                      Mobile
                    </button>
                    <button type="button" className={`btn ${otpMethod==='email' ? 'btn-orange' : 'btn-outline-orange'}`} onClick={() => { setOtpMethod('email'); setOtpSent(false); setOtp(''); }}>
                      Email
                    </button>
                  </div>

                  {otpMethod === 'mobile' ? (
                    <div className="form-group mb-3">
                      <label htmlFor="mobile" className="font-weight-semibold small">Mobile Number</label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><FaMobileAlt /></span>
                        </div>
                        <input
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          id="mobile"
                          className="form-control"
                          placeholder="10-digit mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0,10))}
                          required
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="form-group mb-3">
                      <label htmlFor="email" className="font-weight-semibold small">Email Address</label>
                      <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><FaEnvelope /></span>
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  )}

                  {otpSent && (
                    <div className="form-group mb-2">
                      <label htmlFor="otp" className="font-weight-semibold small">Enter OTP</label>
                      <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        id="otp"
                        className="form-control form-control-lg text-center"
                        placeholder="6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0,6))}
                        required
                      />
                      <div className="d-flex justify-content-between small mt-1">
                        <span className="text-muted">
                          OTP sent to {otpMethod==='mobile'
                            ? mobile.replace(/(\d{2})(\d{4})(\d{4})/, '+91 $1*****$3')
                            : (()=>{ const [u,d] = email.split('@'); if(!u||!d) return email; const m=u.length>2?u[0]+"***"+u[u.length-1]:u[0]+"*"; return m+"@"+d; })()}
                        </span>
                        <button type="button" className="btn btn-link p-0" disabled={cooldown>0} onClick={sendOtp}>
                          Resend {cooldown>0 ? `in ${cooldown}s` : ''}
                        </button>
                      </div>
                    </div>
                  )}

                  {!otpSent ? (
                    <button className="btn btn-orange w-100 py-2 font-weight-bold" disabled={!(otpMethod==='mobile' ? validMobile : validEmail)} onClick={sendOtp}>
                      Send OTP
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-orange w-100 py-2 font-weight-bold" disabled={!validOtp}>
                      Verify & Login
                    </button>
                  )}

                  <div className="text-center mt-2">
                    <button type="button" className="btn btn-link p-0" onClick={() => { setOtpMode(false); setOtpSent(false); setOtp(''); }}>
                      Back to password login
                    </button>
                  </div>
                </form>
              )}

              {/* Alternate action */}
              {!otpMode && (
                <div className="text-center mt-3">
                  <div className="small text-muted mb-2">or</div>
                  <button className="btn btn-outline-orange w-100" onClick={() => setOtpMode(true)}>
                    <FaMobileAlt className="mr-2" /> Login with OTP
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ForgotPasswordModal open={forgotOpen} onClose={() => setForgotOpen(false)} />
    </div>
  );
};

export default Login;
