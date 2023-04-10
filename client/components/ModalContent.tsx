import React from "react";

type ModalContentProps = {
  image: string;
  onClose: () => void;
};

const ModalContent = ({ image, onClose }: ModalContentProps) => {
  return (
    <>
      {/* Add your modal content here */}
      <img src={image} alt="Selected Image" />

      {/* Add a button to close the modal */}
      <button onClick={onClose}>Close</button>
    </>
  );
};

export default ModalContent;
