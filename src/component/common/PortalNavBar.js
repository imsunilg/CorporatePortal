import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Style/PortalNavBar.css";
import useDropdownDelay from "../hooks/dropdownDelay";

export default function PortalNavBar() {
  useDropdownDelay();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSections, setOpenSections] = useState({ product: false, risk: false, claims: false });
  const [openProducts, setOpenProducts] = useState({});

  const toggleDrawer = () => setDrawerOpen((v) => !v);
  const closeDrawer = () => setDrawerOpen(false);
  const toggleSection = (key) => setOpenSections((s) => ({ ...s, [key]: !s[key] }));
  const toggleProduct = (key) => setOpenProducts((s) => ({ ...s, [key]: !s[key] }));

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top shadow-sm">
        <div className="container">
          {/* Mobile toggle (left) */}
          <button
            className="navbar-toggler d-lg-none me-2"
            type="button"
            onClick={toggleDrawer}
            aria-controls="mobileMenu"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://corporate.icicilombard.com/assets/images/logo.svg"
              alt="ICICI Lombard"
              height="36"
            />
          </Link>

          {/* Desktop menu */}
          <div className="collapse navbar-collapse d-none d-lg-flex">
            <ul className="navbar-nav mx-auto main-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>

              {/* Product: submenu with child submenus */}
              <li className="nav-item dropdown dropdown-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>

                <ul className="dropdown-menu">
                  {[
                    { key: "property", text: "Property" },
                    { key: "marine", text: "Marine" },
                    { key: "liability", text: "Liability" },
                    { key: "health", text: "Health" },
                    { key: "engineering", text: "Engineering" },
                  ].map((x) => (
                    <li key={x.key} className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        {x.text}
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to={`/product/${x.key}/overview`}>
                            Overview
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={`/product/${x.key}/coverage`}>
                            Coverage
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={`/product/${x.key}/add-ons`}>
                            Add-ons
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={`/product/${x.key}/brochure`}>
                            Brochure
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={`/product/${x.key}/get-quote`}>
                            Get Quote
                          </Link>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Risk Management */}
              <li className="nav-item dropdown dropdown-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Risk Management
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/risk/property">
                      Property
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/risk/marine">
                      Marine
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/risk/liability">
                      Liability
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/risk/health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/risk/engineering">
                      Engineering
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Claims */}
              <li className="nav-item dropdown dropdown-hover">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Claims
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/claims/motor">
                      Motor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/claims/health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/claims/travel">
                      Travel
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/claims/status">
                      Track Status
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/claims/faq">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/digital">
                  Digital Solution
                </Link>
              </li>
            </ul>

            {/* Right buttons */}
            <div className="d-flex gap-2 align-items-center">
              <Link to="/Portal/ContactUs" className="btn btn-outline-orange contact-us-btn">
                ContactUS
              </Link>
              <Link to="/Portal/CPTLogin" className="btn btn-login">
                Login
              </Link>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer (custom, Bootstrap 4 compatible) */}
      <div className={`mobile-drawer d-lg-none ${drawerOpen ? "open" : ""}`} id="mobileMenu" aria-hidden={!drawerOpen}>
        <div className="mobile-drawer-header">
          <h5 className="mb-0">Menu</h5>
          <button type="button" className="btn-close" aria-label="Close" onClick={closeDrawer}></button>
        </div>
        <div className="mobile-drawer-body">
          <div className="list-group list-group-flush">
            <Link to="/" onClick={closeDrawer} className="list-group-item list-group-item-action">
              Home
            </Link>
            <Link to="/about-us" onClick={closeDrawer} className="list-group-item list-group-item-action">
              About Us
            </Link>

            {/* Product: collapsible + second-level */}
            <button className="list-group-item list-group-item-action" onClick={() => toggleSection("product")} aria-expanded={openSections.product}>
              Product
            </button>
            <div className={`drawer-collapse ${openSections.product ? "show" : ""}`}>
              {[
                { key: "property", text: "Property" },
                { key: "marine", text: "Marine" },
                { key: "liability", text: "Liability" },
                { key: "health", text: "Health" },
                { key: "engineering", text: "Engineering" },
              ].map((x) => (
                <div key={x.key} className="ps-2">
                  <button className="list-group-item list-group-item-action border-0" onClick={() => toggleProduct(x.key)} aria-expanded={!!openProducts[x.key]}>
                    {x.text}
                  </button>
                  <div className={`drawer-collapse ps-3 ${openProducts[x.key] ? "show" : ""}`}>
                    <Link className="list-group-item list-group-item-action border-0" to={`/product/${x.key}/overview`} onClick={closeDrawer}>
                      Overview
                    </Link>
                    <Link className="list-group-item list-group-item-action border-0" to={`/product/${x.key}/coverage`} onClick={closeDrawer}>
                      Coverage
                    </Link>
                    <Link className="list-group-item list-group-item-action border-0" to={`/product/${x.key}/add-ons`} onClick={closeDrawer}>
                      Add-ons
                    </Link>
                    <Link className="list-group-item list-group-item-action border-0" to={`/product/${x.key}/brochure`} onClick={closeDrawer}>
                      Brochure
                    </Link>
                    <Link className="list-group-item list-group-item-action border-0" to={`/product/${x.key}/get-quote`} onClick={closeDrawer}>
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Risk Management */}
            <button className="list-group-item list-group-item-action" onClick={() => toggleSection("risk")} aria-expanded={openSections.risk}>
              Risk Management
            </button>
            <div className={`drawer-collapse ${openSections.risk ? "show" : ""}`}>
              <Link className="list-group-item list-group-item-action border-0" to="/risk/property" onClick={closeDrawer}>
                Property
              </Link>
              <Link className="list-group-item list-group-item-action border-0" to="/risk/marine" onClick={closeDrawer}>
                Marine
              </Link>
              <Link className="list-group-item list-group-item-action border-0" to="/risk/liability" onClick={closeDrawer}>
                Liability
              </Link>
              <Link className="list-group-item list-group-item-action border-0" to="/risk/health" onClick={closeDrawer}>
                Health
              </Link>
              <Link className="list-group-item list-group-item-action border-0" to="/risk/engineering" onClick={closeDrawer}>
                Engineering
              </Link>
            </div>

            {/* Claims */}
            <button className="list-group-item list-group-item-action" onClick={() => toggleSection("claims")} aria-expanded={openSections.claims}>
              Claims
            </button>
            <div className={`drawer-collapse ${openSections.claims ? "show" : ""}`}>
              <Link className="list-group-item list-group-item-action border-0" to="/claims/motor" onClick={closeDrawer}>
                Motor
              </Link>
              <Link className="list-group-item list-group-item-action border-0" to="/claims/health" onClick={closeDrawer}>
                Health
              </Link>
              <Link className="list-group-item list-group-item-action border-0" to="/claims/travel" onClick={closeDrawer}>
                Travel
              </Link>
              <Link className="list-group-item list-group-item-action border-0" to="/claims/status" onClick={closeDrawer}>
                Track Status
              </Link>
              <Link className="list-group-item list-group-item-action border-0" to="/claims/faq" onClick={closeDrawer}>
                FAQs
              </Link>
            </div>

            <Link className="list-group-item list-group-item-action" to="/digital" onClick={closeDrawer}>
              Digital Solution
            </Link>

            <div className="d-grid gap-2 mt-3">
              <Link to="/Portal/ContactUs" className="btn btn-outline-orange" onClick={closeDrawer}>
                ContactUS
              </Link>
              <Link to="/Portal/CPTLogin" className="btn btn-login" onClick={closeDrawer}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className={`mobile-drawer-backdrop ${drawerOpen ? "show" : ""}`} onClick={closeDrawer}></div>
    </>
  );
}
