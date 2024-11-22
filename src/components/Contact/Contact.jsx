import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <p>
          <strong>Name:</strong> James Njue
        </p>
        <p>
          <strong>Email:</strong> <br />
          <a href="mailto:lordjimlee@gmail.com" className="contact-link">
            lordjimlee@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong> <br />
          <a
            href="https://wa.me/254707919856?text=Hi,%20I%20need%20help%20with%20my%20assignment!"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link whatsapp-link"
          >
            +254 707 919 856
          </a>
        </p>
        <p>
          <strong>Address:</strong> 
          <p>
            1083, Embu, Nairobi, 60100, Kenya
          </p>
        </p>
      </div>
      <p style={{ marginTop: '1rem' }}>Reach out today, and let’s get started on your success journey!</p>
    </section>
  );
}

export default Contact;
