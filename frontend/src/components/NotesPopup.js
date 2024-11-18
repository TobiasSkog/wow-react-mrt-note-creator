import React from "react";
import "./NotesPopup.css";

export default function NotesPopup({ notes, roster, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Generated Roster</h2>
        <textarea readOnly value={roster} />
        <div className="popup-buttons">
          <button className="copy-button" onClick={() => navigator.clipboard.writeText(roster)}>
            Copy
          </button>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>

      <div className="popup-content">
        <h2>Generated Notes</h2>
        <textarea readOnly value={notes} />
        <div className="popup-buttons">
          <button className="copy-button" onClick={() => navigator.clipboard.writeText(notes)}>
            Copy
          </button>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>


  );
}
