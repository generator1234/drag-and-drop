import React, { useRef, useEffect } from 'react';

const Canvas = ({ baseImage, draggableImages }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const drawImages = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      if (baseImage) {
        const image = new Image();
        image.src = baseImage;
        image.onload = () => {
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          draggableImages.forEach(img => {
            const imgElement = new Image();
            imgElement.src = img.src;
            imgElement.onload = () => {
              context.drawImage(imgElement, img.x, img.y, 100, 100);
            };
          });
        };
      }
    };

    drawImages();
  }, [baseImage, draggableImages]);

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'canvas-image.png';
    link.click();
  };

  return (
    <div className="relative">
      <canvas ref={canvasRef} width={500} height={500} className="border border-gray-400" />
      <button onClick={saveCanvas} className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">Save Image</button>
    </div>
  );
};

export default Canvas;
