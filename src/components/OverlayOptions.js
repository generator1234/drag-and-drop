import React, { useState } from 'react';
import '../css/OverlayOptions.css'; // Import CSS for styling
import Scrollbar from './Scrollbar';

// Import overlay images
import holding0 from '../images/holding0.png';
import holding1 from '../images/holding1.png';
import holding2 from '../images/holding2.png';
import holding3 from '../images/holding3.png';
import holding4 from '../images/holding4.png';
import holding5 from '../images/holding5.png';
import holding6 from '../images/holding6.png';
import holding7 from '../images/holding7.png';
import holding8 from '../images/holding8.png';
import hat0 from '../images/hat0.png';
import hat1 from '../images/hat1.png';
import hat2 from '../images/hat2.png';
import hat3 from '../images/hat3.png';
import hat4 from '../images/hat4.png';
import hat5 from '../images/hat5.png';
import background0 from '../images/background0.png';
import background1 from '../images/background1.png';
import background2 from '../images/background2.png';
import background3 from '../images/background3.png';
import background4 from '../images/background4.png';

const OverlayOptions = ({ setSelectedHolding, setSelectedHat, setSelectedBackground }) => {
  const holdingOptions = [holding0, holding1, holding2, holding3, holding4, holding5, holding6, holding7, holding8];
  const hatOptions = [hat0, hat1, hat2, hat3, hat4, hat5];
  const backgroundOptions = [background0, background1, background2, background3, background4];

  return (
    <div className="overlay-options-container max-w-full md:mt-10">
      <Scrollbar options={holdingOptions} setSelectedOverlay={setSelectedHolding} />
      <Scrollbar options={hatOptions} setSelectedOverlay={setSelectedHat} />
      <Scrollbar options={backgroundOptions} setSelectedOverlay={setSelectedBackground} />
    </div>
  );
};

export default OverlayOptions;
