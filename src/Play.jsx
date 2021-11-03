import React from "react";

const Play = ({ handlePlayClick, isButtonDisabled }) => {
  return (
    <button
      onClick={handlePlayClick}
      className="action"
      disabled={isButtonDisabled}
    >
      🎮
    </button>
  );
};

export default Play;
