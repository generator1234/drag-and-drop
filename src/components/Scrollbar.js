import React, { useState } from 'react';
//import '../css/OverlayOptions.css'; // Import CSS for styling
import white from '../images/white.png';

const Scrollbar = ({ options, setSelectedOverlay }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (overlay) => {
    setSelectedOption(overlay);
    setSelectedOverlay(overlay);
  };

  return (
    <div className="overlay-options flex my-2 p-3 md:p-4 border-white border-4 rounded-lg">
      <div
          className={`overlay-option ${selectedOption === null ? 'outline outline-white outline-4 rounded' : ''} empty min-w-16 md:min-w-28`}
          onClick={() => handleOptionClick(null)}
        >
          <img
            src={white}
            alt="Holding"
            draggable="false"
            className="option-image"
          />
      </div>
      {options.map((option) => {
        return (
          <div
            className={`overlay-option ${selectedOption === option ? 'outline outline-white outline-4 rounded' : ''} ml-3 md:ml-5 min-w-16 md:min-w-28`}
            onClick={() => handleOptionClick(option)}
          >
            <img
              src={option}
              alt="Holding"
              draggable="false"
              className="option-image"
            />
          </div>
        )
      })
      }
      </div>
  );
};

export default Scrollbar;