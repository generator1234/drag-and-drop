import React, { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import ImageUploader from './components/ImageUploader';
import DraggableImage from './components/DraggableImage';
import draggable1 from './images/draggable1.png';
import draggable2 from './images/draggable2.png';
import draggable3 from './images/draggable3.png';

function App() {
  const [baseImage, setBaseImage] = useState(null);
  const [draggableImages, setDraggableImages] = useState([]);

  const handleDrop = (src, x, y) => {
    setDraggableImages([...draggableImages, { src, x, y }]);
  };

  const imageSources = [
    draggable1, draggable2, draggable3
  ];

  return (
    <div className="container max-w-screen-2xl">
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
