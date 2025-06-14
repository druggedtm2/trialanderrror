import React from 'react';

function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted! (This is a placeholder for actual submission logic)");
  };

  return (
    <section className="contact-section main-section"> {/* main-section might be reviewed in Phase 2 */}
      <div className="container"> {/* Added container for width constraint */}
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="e.g., John Doe" required />
          </div>

          <div>
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="e.g., john.doe@example.com" required />
          </div>

          <div>
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="6" placeholder="Hi John, I'd like to connect regarding..." required></textarea>
          </div>

          <button type="submit" className="btn-modern">Send Message</button>
        </form>

        <div className="alternative-contact">
          <p>You can also reach me through the following channels:</p>
          <p><strong>Email:</strong> <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Your GitHub Profile</a></p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
