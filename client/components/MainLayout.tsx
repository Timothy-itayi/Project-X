import React, { useState } from "react";

type Image = {
  name: string;
  url: string;
};

const MainLayout = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleClick = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Render your image components here */}
      <img
        src="https://google.com/"
        alt="Image 1"
        onClick={() =>
          handleClick({ name: "image01.JPG", url: "https://google.com/" })
        }
      />
      {/* <img
        src="https://example.com/image02.JPG"
        alt="Image 2"
        onClick={() =>
          handleClick({ name: "image02.JPG", url: "https://example.com/image02-large.jpg" })
        }
      /> */}

      {/* Conditionally render the popup/modal content */}
      {selectedImage && (
        <div className="popup">
          <div className="popup-content">
            <img src={selectedImage.url} alt={selectedImage.name} />
            {/* Render additional information about the selected image here */}
            <p>Some additional information about the image goes here</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MainLayout;
