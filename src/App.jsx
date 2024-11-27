import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Guarantee from './components/Guarantee/Guarantee';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import WhatsappPopup from './components/WhatsappPopup/WhatsappPopup'
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Guarantee />
        <hr style={{ padding: '1rem', backgroundColor: '#c4c1c1' }}/>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsappPopup />
    </div>
  );
}

export default App;
