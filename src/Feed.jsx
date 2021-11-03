import { React, useState } from "react";

const Feed = ({ handleFeedClick, isButtonDisabled }) => {
  // update pet state
  // increment weight by 1 on click

  return (
    <button
      onClick={handleFeedClick}
      className="action"
      disabled={isButtonDisabled}
    >
      🍓
    </button>
  );
};

export default Feed;
//disabled={}
