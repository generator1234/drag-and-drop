import React, { useRef, useEffect, useState } from 'react';
import '../css/BaseImage.css';
import baseImage from '../images/white.png';
import persistentOverlay from '../images/persistent-overlay.png';
import backgroundOverlay from '../images/background-overlay.png';
import DisplayImage from "./DisplayImage";

const BaseImage = ({ holding, hat, background }) => {
  const canvasRef = useRef(null);
  const [test, setTest] = useState(null);
  const [testHolding, setTestHolding] = useState(null);
  const [testHat, setTestHat] = useState(null);
  const [testBackground, setTestBackground] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const baseImg = new Image();
    const overlayImg = new Image();
    const holdingImg = new Image();
    const hatImg = new Image();
    const backgroundImg = new Image();
    const backgroundOverlayImg = new Image();

    baseImg.src = baseImage;
    overlayImg.src = persistentOverlay;
    backgroundOverlayImg.src = backgroundOverlay;

    baseImg.onload = () => {
      context.drawImage(baseImg, 0, 0, canvas.width, canvas.height);
      if (testBackground) background = testBackground;
      if (background) {
        backgroundImg.src = background;
        backgroundImg.onload = () => {
          context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
          drawBackgroundOverlay();
        };
      } else {
        drawOtherImages();
      }
    };

    const drawBackgroundOverlay = () => {
      context.drawImage(backgroundOverlayImg, 0, 0, canvas.width, canvas.height);
      drawOtherImages();
    };

    const drawOtherImages = () => {
      if (testHat) hat = testHat;
      if (hat) {
        hatImg.src = hat;
        hatImg.onload = () => {
          context.drawImage(hatImg, 0, 0, canvas.width, canvas.height);
          drawHoldingAndOverlay();
        };
      } else {
        drawHoldingAndOverlay();
      }
    };

    const drawHoldingAndOverlay = () => {
      if (testHolding) holding = testHolding;
      if (holding) {
        holdingImg.src = holding;
        holdingImg.onload = () => {
          context.drawImage(holdingImg, 0, 0, canvas.width, canvas.height);
          drawOverlay();
        };
      } else {
        drawOverlay();
      }
    };

    const drawOverlay = () => {
      context.drawImage(overlayImg, 0, 0, canvas.width, canvas.height);
    };
  }, [holding, hat, background, testHolding, testHat, testBackground]);

  const saveImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'meme.png';
    link.click();
  };

  return (
    <div className="base-image-container flex flex-col justify-center items-center md:mt-10 mb-5 md:mb-10">
      <canvas ref={canvasRef} width={500} height={500} className="base-image-canvas max-w-full" />
      <button className="bg-white p-2 border-black border-2 rounded-3xl p-2 m-2" onClick={saveImage}>Save Image</button>
      <button
        onClick={() => {
          setTest(!test)
        }}
        className="bg-white p-2 border-black border-2 rounded-3xl"
      >
        Upload and test accessories
      </button>
      <div className={`${test ? '' : 'hidden'}`}>
        <DisplayImage setOverlay={setTestHolding} type={"holding"} />
        <DisplayImage setOverlay={setTestHat} type={"hat"} />
        <DisplayImage setOverlay={setTestBackground} type={"background"} />
      </div>
    </div>
  );
};

export default BaseImage;
