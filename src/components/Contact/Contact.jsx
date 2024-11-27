import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        Take the stress out of your studies. Contact TopTutors now and let us help you achieve the grades you deserve.
        <br />
        Don't wait- your academic success is just a click away!
      </p>
      <div className="contact-details">
        {/* Email */}
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:lordjimlee@gmail.com" target='_blank' className="contact-link">
            lordjimlee@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+254707919856" target='_blank' className="contact-link">
            +254 707 919 856
          </a>
        </div>

        {/* WhatsApp */}
        <div className="contact-item">
          <FaWhatsapp className="contact-icon whatsapp-icon" />
          <a
            href="https://wa.me/254707919856?text=Hi,%20I%20need%20help%20with%20my%20assignment!"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Linkedin */}
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />

          <a href="https://www.linkedin.com/in/james-njue-491a2818b/" target='_blank' className="contact-link">
            James Njue
          </a>
        </div>

        {/* Address */}
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <p className="contact-text">
            1083, Embu, Nairobi, 60100, Kenya
          </p>
        </div>
      </div>

     
    </section>
  );
}

export default Contact;
