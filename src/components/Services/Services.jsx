import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <h2>How It Works <span style={{ fontWeight: '400', fontStyle: 'italic' }}> - Simple, Fast, Effective</span></h2>

      <ul>
        <li>
        <h3>Send Us Your Instructions</h3>
        <p>Share the details of your assignment, quiz, or exam requirements with us from the contacts provided.</p>

        </li>

        <li>
        <h3>We Get To Work</h3>
        <p>Our expert team solves your task with precision and care.</p>

        </li>

        <li>
        <h3>Receive Your Solution</h3>
        <p>Sit back and relax while we deliver a high-quality, ready-to-submit solution.</p>

        </li>
      </ul>
    </section>
  );
}

export default Services;
