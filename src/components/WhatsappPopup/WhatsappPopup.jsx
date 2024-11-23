import React, { useEffect, useState } from 'react';
import './WhatsappPopup.css';
import { FaWhatsapp } from 'react-icons/fa'; // React Icons for WhatsApp logo

function WhatsAppPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const handleWhatsAppClick = () => {
    const userConfirmed = window.confirm(
      'Do you want to open WhatsApp to start a chat with us?'
    );
    if (userConfirmed) {
      window.open(
        'https://wa.me/254707919856?text=Hi,%20I%20need%20help%20with%20my%20assignment!',
        '_blank'
      );
    }
  };

  return (
    showPopup && (
      <div className="whatsapp-popup" onClick={handleWhatsAppClick}>
        <FaWhatsapp className="whatsapp-icon" />
        <p className="whatsapp-text">WhatsApp</p>
      </div>
    )
  );
}

export default WhatsAppPopup;
