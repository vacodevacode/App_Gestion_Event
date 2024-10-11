/*import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      <h2>Liste des Événements</h2>
      {events.map((event, index) => (
        <div key={index} className="event">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{event.date} à {event.time}</p>
          <p>Lieu : {event.location}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
*/
import React from 'react';

const EventList = ({ events, onDelete }) => {
  return (
    <div className="event-list">
      <h2>Liste des Événements</h2>
      {events.map((event) => (
        <div key={event.id} className="event">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{event.date} à {event.time}</p>
          <p>Lieu : {event.location}</p>
          <button onClick={() => onDelete(event.id)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;

