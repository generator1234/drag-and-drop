import React, { useState, useRef, useEffect } from 'react';

const DraggableImage = ({ src, onDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        imgRef.current.style.left = `${e.clientX - 50}px`;
        imgRef.current.style.top = `${e.clientY - 50}px`;
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        const rect = imgRef.current.getBoundingClientRect();
        onDrop(src, rect.left, rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, src, onDrop]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <img
      ref={imgRef}
      src={src}
      alt=""
      onMouseDown={handleMouseDown}
      style={{
        position: 'relative',
        cursor: 'move',
        width: '100px',
        height: '100px',
      }}
      className="draggable-image"
    />
  );
};

export default DraggableImage;
