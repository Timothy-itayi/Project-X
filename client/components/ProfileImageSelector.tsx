import React, { useState } from "react";
import MainLayout from "./MainLayout";
import Image01Component from "./Image01Component";
import Image02Component from "./Image02Component";
import Image03Component from "./Image03Component";
import Image04Component from "./Image04Component";
import Image05Component from "./Image05Component";
import SignUpForm from "./SignUpForm";
import GoBackButton from "./GoBackButton";

interface Image {
  name: string;
  component: React.FC<any>;
  title: string;
}

export const ProfileImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [showSignUpForm , setShowSignUpForm] = useState(false);


  const images: Image[] = [
    {
      name: "image01.JPG",
      component: MainLayout,
      title: "Go",
    },
    {
      name: "image02.JPG",
      component: Image02Component,
      title: "Sign Up",
    },
    {
      name: "photo-output_0.JPG",
      component: Image03Component,
      title: "Play",
    },
    {
      name: "image04.JPG",
      component: Image04Component,
      title: "Blog",
    },
    {
      name: "image05.JPG",
      component: Image05Component,
      title: "Reflections",
    },
  ];

  const handleGoBack = () => {
    setSelectedImage('');

  };

  const handleClick = (image: Image) => {
    setSelectedImage(image.name);

    if (image.name === "image02.JPG") {
      setShowSignUpForm(true);
    } else {
      console.log(`Clicked image: ${image.name}`);
    }
  };
  return (
    <div className="profile-image-selector">
      {selectedImage === "select-profile-image"? (
        <div className="select-profile-image">
          <SignUpForm onGoBack= {handleGoBack} />
        </div>
      ) : (
        <>
          <h2>Select Image:</h2>
          <div className="image-buttons">
            {images.map((image, index) => (
              <button
                key={index}
                className={selectedImage === image.name ? "selected" : ""}
                onClick={() => handleClick(image)}
                title={image.title} // set title property to image title
              >
                <img
                  src={`/images/${image.name}`}
                  alt={`Profile Image ${index}`}
                />
              </button>
            ))}
          </div>
          {selectedImage != "" && (
            <GoBackButton onClick={handleGoBack} />
          )}
        </>
      )}
    </div>
  );
            }

//   return (
//     <div className="profile-image-selector">
//       {selectedImage === "sign-up" ? (
//         <div className="sign-up-form">
//           {/* Your sign-up form goes here */}
//         </div>
//       ) : (
//         <>
//           <h2>Select Image:</h2>
//           <div className="image-buttons">
//             {images.map((image, index) => (
//               <button
//                 key={index}
//                 className={selectedImage === image.name ? "selected" : ""}
//                 onClick={() => handleClick(image)}
//               >
//                 <img
//                   src={`/images/${image.name}`}
//                   title={image.title}
//                   alt={`Profile Image ${index}`}
//                 />
//                 <span className="image-hover-text">{image.title}</span>
//               </button>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

export default ProfileImageSelector
