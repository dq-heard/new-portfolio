import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaPhone } from "react-icons/fa6";

import { client } from "../../client";

import "./Contact.scss";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <span className="section-subtitle">Let's Keep in Touch!</span>

      <div className="contact-container container">
        <div className="contact-cards">
          <div className="contact-card">
            <FaEnvelope className="icon" />
            <a href="mailto:dq.heard@yahoo.com" className="link">
              dq.heard@yahoo.com
            </a>
          </div>
          <div className="contact-card">
            <FaPhone className="icon" />
            <a href="tel:+1 (615) 314-1461" className="link">
              +1 (615) 314-1461
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <div className="contact-form flex">
            <div className="contact-inputs">
              <div className="contact-content">
                <label htmlFor="name" className="contact-label">
                  Name:
                </label>
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  required
                  autoComplete="on"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="contact-content">
                <label htmlFor="email" className="contact-label">
                  E-mail:
                </label>
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  required
                  autoComplete="on"
                  onChange={handleChangeInput}
                />
              </div>
            </div>

            <div className="contact-content">
              <label htmlFor="message" className="contact-label">
                Message:
              </label>
              <textarea
                className="contact-input"
                value={message}
                name="message"
                id="message"
                required
                onChange={handleChangeInput}
              />
            </div>
            <button
              type="button"
              className="button button-flex"
              style={{ borderColor: "transparent" }}
              onClick={handleSubmit}
            >
              {!loading ? "Send Message" : "Sending..."}
              <FaPaperPlane className="button-icon" />
            </button>
          </div>
        ) : (
          <div>
            <h3>Thank you for reaching out!</h3>
          </div>
        )}
      </div>
    </section>
  );
};
