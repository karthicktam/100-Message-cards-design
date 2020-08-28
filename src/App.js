import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faFrown } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function App() {
  return (
    <div className="messages">
      <div className="message success">
        <FontAwesomeIcon className="icon" icon={faSmile} />
        <h1>Excellent</h1>
      </div>

      <div className="message error">
        <FontAwesomeIcon className="icon" icon={faFrown} />
        <h1>Bummer</h1>
      </div>
    </div>
  );
}
