import { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please fill in all required fields.");
      return;
    }

    setStatus(
      "Form validation is working. Backend connection will be added next."
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-info">
          <div className="section-heading">
            <span>Contact Me</span>

            <h2>
              Have a project or website problem? Let's talk.
            </h2>
          </div>

          <p className="contact-description">
            I'm interested in web development projects, website maintenance,
            WordPress customization, React development, API integrations, and
            technical website troubleshooting.
          </p>

          <div className="contact-points">
            <div className="contact-point">
              <h3>Development</h3>
              <p>Responsive websites and React applications.</p>
            </div>

            <div className="contact-point">
              <h3>Website Support</h3>
              <p>WordPress, hosting, cPanel and website troubleshooting.</p>
            </div>

            <div className="contact-point">
              <h3>Integrations</h3>
              <p>Forms, REST APIs, CRM workflows and automation.</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Name *</label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project enquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;