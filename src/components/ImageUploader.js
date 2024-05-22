import React from 'react';

const ImageUploader = ({ setBaseImage }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBaseImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-4">
      <input type="file" onChange={handleImageUpload} className="mb-2" />
    </div>
  );
};

export default ImageUploader;
