import React from "react";

export default function ContactUs() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="mb-3">Contact Us</h1>
          <p className="text-muted mb-4">
            Have a question or need assistance? Send us a message and our team
            will get back to you soon.
          </p>

          <div className="row g-4">
            <div className="col-md-7">
              <div className="card shadow-sm">
                <div className="card-body">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" id="name" className="form-control" placeholder="Your name" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" id="email" className="form-control" placeholder="you@example.com" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input type="text" id="subject" className="form-control" placeholder="How can we help?" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea id="message" className="form-control" rows="5" placeholder="Write your message..." required />
                    </div>
                    <button type="submit" className="btn btn-orange">Send Message</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Get in touch</h5>
                  <p className="mb-2"><strong>Email:</strong> support@example.com</p>
                  <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p className="mb-0"><strong>Address:</strong> 123 Business Ave, Suite 100, City, Country</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
