import React from "react";

type GoBackButtonProps = {
  onClick: () => void;
  

};

const GoBackButton: React.FC<GoBackButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="go-back-button">
      Back to Selection
    </button>
  );
};

export default GoBackButton;
