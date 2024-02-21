import React from "react";

const ButtonComponent = ({buttonTitle, btnClass, handleOnClick}) => {
  return (
    <>
      <button
        className={btnClass}
        onClick={handleOnClick}
      >
        {buttonTitle}
      </button>
    </>
  );
};

export default ButtonComponent;


