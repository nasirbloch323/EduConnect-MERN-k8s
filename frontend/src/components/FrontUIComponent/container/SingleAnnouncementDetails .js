import React from "react";

const SingleAnnouncementDetails = ({ announcement, onClose }) => {
  return (
    <div className="single-announcement-overlay" onClick={onClose}>
      <div className="single-announcement-content" onClick={(e) => e.stopPropagation()}>
        <h2>{announcement.title}</h2>
        <p>{announcement.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SingleAnnouncementDetails;
