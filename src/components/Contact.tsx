import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Simulate form submission with timeout
    setTimeout(() => {
      setSubmitStatus("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);

      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(""), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Get In Touch</h2>
      <div className="contact__content">
        <div className="contact__info">
          <h3>Let's Work Together</h3>
          <p>
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question, want to discuss a project, or just want
            to say hello, I'd love to hear from you.
          </p>
          <div className="contact__item">
            <span>📧</span>
            <span>alex.johnson@email.com</span>
          </div>
          <div className="contact__item">
            <span>📞</span>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact__item">
            <span>📍</span>
            <span>San Francisco, CA</span>
          </div>
          <div className="contact__item">
            <span>💼</span>
            <span>Available for freelance</span>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-control"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            className="form-control"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn--primary btn--full-width"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {submitStatus && (
            <div className="status status--success">{submitStatus}</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
