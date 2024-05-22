import React, { useState } from 'react';
import BaseImage from './components/BaseImage';
import OverlayOptions from './components/OverlayOptions';
import './App.css';
import Canvas from './components/Canvas';
import ImageUploader from './components/ImageUploader';
import DraggableImage from './components/DraggableImage';
import draggable1 from './images/draggable1.png';
import draggable2 from './images/draggable1.png';
import draggable3 from './images/draggable1.png';

function App() {
  const [selectedHolding, setSelectedHolding] = useState(null);
  const [selectedHat, setSelectedHat] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(null);

  const [baseImage, setBaseImage] = useState(null);
  const [draggableImages, setDraggableImages] = useState([]);

  const handleDrop = (src, x, y) => {
    setDraggableImages([...draggableImages, { src, x, y }]);
  };

  /*const imageSources = [
    'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Vegetables-PNG/Tomato_Transparent_PNG_Clip_Art_Image.png?m=1629833746',
    'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Vegetables-PNG/Tomato_Transparent_PNG_Clip_Art_Image.png?m=1629833746',
    'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Vegetables-PNG/Tomato_Transparent_PNG_Clip_Art_Image.png?m=1629833746',
  ];*/

  const imageSources = [
    draggable1, draggable2, draggable3
  ];

  return (
    <div className="container max-w-screen-2xl">
      <div className="flex flex-col lg:flex-row justify-evenly p-5 md:p-0">
        <BaseImage holding={selectedHolding} hat={selectedHat} background={selectedBackground} />
        <OverlayOptions
          setSelectedHolding={setSelectedHolding}
          setSelectedHat={setSelectedHat}
          setSelectedBackground={setSelectedBackground}
        />
      </div>
      <div className="flex flex-row justify-center items-start space-x-8 p-8">
        <div>
          <ImageUploader setBaseImage={setBaseImage} />
          <Canvas baseImage={baseImage} draggableImages={draggableImages} />
        </div>
        <div className="space-y-4">
          {imageSources.map((src, index) => (
            <DraggableImage key={index} src={src} onDrop={handleDrop} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
