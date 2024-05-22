import React from 'react';
import persistentOverlay from '../images/persistent-overlay.png'; // Import persistent overlay image

const PersistentOverlay = () => {
  return (
    <img
      src={persistentOverlay}
      alt="Persistent Overlay"
      className="persistent-overlay"
    />
  );
};

export default PersistentOverlay;
