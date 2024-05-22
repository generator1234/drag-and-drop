import React, { useState } from "react";

// Define a functional component named UploadAndDisplayImage
const DisplayImage = ( { setOverlay, type } ) => {
  // Define a state variable to store the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Return the JSX for rendering
  return (
    <div className="my-1 p-2 md:p-4 border-white border-4 rounded-lg">
      {/* Header */}
      <h1>Test {type}</h1>

      {/* Conditionally render the selected image if it exists */}
      {selectedImage && (
        <div>
          {/* Display the selected image */}
          <img
            alt="not found"
            width={"100px"}
            src={URL.createObjectURL(selectedImage)}
          />
          {/* Button to remove the selected image */}
          <button
            onClick={() => {
              setSelectedImage(null)
              setOverlay(null)
            }}
            className="bg-white p-2 border-black border-2 rounded-3xl"
          >Remove {type}
          </button>
        </div>
      )}

      <br />

      {/* Input element to select an image file */}
      <input
        type="file"
        name="myImage"
        // Event handler to capture file selection and update the state
        onChange={(event) => {
          //console.log(event.target.files[0]); // Log the selected file
          setSelectedImage(event.target.files[0]); // Update the state with the selected file
          setOverlay(URL.createObjectURL(event.target.files[0]));
        }}
      />
    </div>
  );
};

// Export the UploadAndDisplayImage component as default
export default DisplayImage;