import React from 'react';
import './Hero.css';
import portfolioPic from '../../assets/portfolio-pic.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Welcome to Toptutors</h1>
        <p style={{ fontWeight: '600' }}>
        Struggling with Assignments, Quizzes or Exams? We've Got You Covered!
        </p>
        <p>At TopTutors, we specialize in helping studnetslike you achieve better grades
          with expert assistance tailored to your needs. Whether it's assignments, quizzes,
          or exams, our team of experiencedcd professionals is here to make your academic journey
          fast, reliable, and stress-free every time.
        </p>
        <p className="cta">Get Help Now and Ace Your Studies!
        💯</p>
      </div>
      <img src={portfolioPic} alt="Founders picture" className='portfolio-picture'/>
    </section>
  );
}

export default Hero;
