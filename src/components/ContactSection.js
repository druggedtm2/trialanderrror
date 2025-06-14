import React from 'react';

function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted! (This is a placeholder for actual submission logic)");
    // In a real application, you would handle form data here (e.g., send to a backend or email service)
    // event.target.reset(); // Optionally reset form fields
  };

  return (
    <section className="contact-section main-section">
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

        <button type="submit">Send Message</button>
      </form>

      <div className="alternative-contact">
        <p>You can also reach me through the following channels:</p>
        <p><strong>Email:</strong> <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Your GitHub Profile</a></p>
      </div>
    </section>
  );
}

export default ContactSection;
