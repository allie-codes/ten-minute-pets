import React from "react";

const Talk = ({ handleTalkClick, isButtonDisabled }) => {
  return (
    <button
      onClick={handleTalkClick}
      className="action"
      disabled={isButtonDisabled}
    >
      💬
    </button>
  );
};

export default Talk;
