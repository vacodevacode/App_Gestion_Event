import React, { useState } from 'react';
import CreateEventForm from './CreateEventForm';
import EventList from './EventList';
import ParticipantList from './ParticipantList';
import './style.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [participants, setParticipants] = useState([]);

  return (
    <div className="container">
      <header>
        <h1>Gestion des Événements</h1>
      </header>
      <CreateEventForm />
      <EventList events={events} />
      <ParticipantList participants={participants} />
    </div>
  );
};

export default App;
