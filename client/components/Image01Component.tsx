import React from "react";

const Image01Component = ({ image = "default-image.jpg", index = 1}) => {
  if (!image) {
    return <div>Error: No image provided.</div>;
  }

  return (
    <div>
      <h1>Image {index}</h1>
      <img src={`/images/${image}`} alt={`Profile Image ${index}`} />
      {/* other details related to the image */}
    </div>
  );
};

export default Image01Component;
