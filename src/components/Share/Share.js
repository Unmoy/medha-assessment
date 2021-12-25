import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Share.css";

const Share = () => {
  return (
    <div className="share_button">
      <FontAwesomeIcon icon={faShareAlt} className="share_icon" />
      Share
    </div>
  );
};

export default Share;
