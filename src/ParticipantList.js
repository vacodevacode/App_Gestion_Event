import React from 'react';

const ParticipantList = ({ participants }) => {
  return (
    <div className="participant-list">
      <h2>Liste des Participants</h2>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>{participant}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantList;


