import React from 'react';

function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted! (This is a placeholder for actual submission logic)");
  };

  return (
    <section className="contact-section main-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="e.g., John Doe" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="e.g., john.doe@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="6" placeholder="Hi Tushar, I'd like to connect regarding..." required></textarea>
          </div>

          <button type="submit" className="btn-modern">Send Message</button>
        </form>

        <div className="alternative-contact">
          <p>You can also reach me through the following channels:</p>
          <p><strong>Email:</strong> <a href="mailto:7tm007@gmail.com">7tm007@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919162955828">+91 9162955828</a></p>
          <p><strong>LinkedIn:</strong> <a href="#" target="_blank" rel="noopener noreferrer">Tushar Kumar Singh on LinkedIn</a></p> {/* Updated placeholder text and kept # href for now */}
          <p><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Your GitHub Profile</a></p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
