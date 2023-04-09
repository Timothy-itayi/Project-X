import React, { useState } from "react";
import MainLayout from "./MainLayout";
import Image01Component from "./Image01Component";
import Image02Component from "./Image02Component";
import Image03Component from "./Image03Component";
import Image04Component from "./Image04Component";
import Image05Component from "./Image05Component";

interface Image {
  name: string;
  component: React.FC<any>;
}

export const ProfileImageSelector = () => {
 
  const [selectedImage, setSelectedImage] = useState("");

  const images: Image[] = [
    {
      name: "image01.JPG",
      component: Image01Component,
    },
    {
      name: "image02.JPG",
      component: Image02Component,
    },
    {
      name: "photo-output_0.JPG",
      component: Image03Component,
    },
    {
      name: "image04.JPG",
      component: Image04Component,
    },
    {
      name: "image05.JPG",
      component: Image05Component,
    },
  ];

  const handleClick = (image: Image) => {
    setSelectedImage(image.name);
    const URL ="https://timothy-itayi.github.io";
    
    let targetURL = "";
  
    if (image.name === "image01.JPG") {
      targetURL = URL;
      window.location.href = targetURL;
    } else {
      console.log(`Clicked image: ${image.name}`);
    }
  };
  
  console.log(handleClick);

  return (
    <div className="profile-image-selector">
      <h2>Select Image:</h2>
      <div className="image-buttons">
        {images.map((image, index) => (
          <button
            key={index}
            className={selectedImage === image.name ? "selected" : ""}
            onClick={() => handleClick(image)}
          >
            <img src={`/images/${image.name}`} title={`Profile Image ${index}`}alt={`Profile Image ${index}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileImageSelector;
