import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <div className="how-it-works-wrapper">
      <h2>How It Works </h2>

<ul>
<li>
  <h3>Submit Your Request</h3>
  <p>Share your assignment, quiz, or exam details with us</p>
  </li>
  <li>
  <h3>Get a Quote</h3>
  <p>Receive transparent, affordable price for our services.</p>
  </li>
  <li>
  <h3>Achieve Better Results</h3>
  <p>Review your completed work and ace your studies!</p>
  </li>
</ul>
      </div>

      <div className="vertical-line">
      </div>

      <div className="what-we-offer-wrapper">
      <h2>What We Offer </h2>
      <ul className='what-we-offer-ul'>
        <li>Assignment Assistance in All Subjects</li>
      <li>Quiz And Test Solutions</li>
      <li>Exam preparation help</li>
      <li>Plagiarism-free work</li>
      <li>Detailed Explanations For Better Understanding</li>
   
      </ul>
      </div>
      </section>
  );
}

export default Services;
