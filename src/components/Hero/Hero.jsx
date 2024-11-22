import React from 'react';
import './Hero.css';
import portfolioPic from '../../assets/portfolio-pic.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Welcome to Toptutors</h1>
        <p>
        Struggling with Assignments? We've Got You Covered!
        </p>
        <p>
        We help students like you achieve better grades with expert assignment, quiz, and exam solutions. Fast, reliable, and stress-free – every time.

        </p>
        <p className="cta">Get Help Now and Ace Your Studies!
        💯</p>
      </div>
      <img src={portfolioPic} alt="Founders picture" className='portfolio-picture'/>
    </section>
  );
}

export default Hero;
