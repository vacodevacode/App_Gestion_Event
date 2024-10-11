/*import React, { useState } from 'react';
import CreateEventForm from './CreateEventForm';
import EventList from './EventList';
import ParticipantList from './ParticipantList';
import './style.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [participants, setParticipants] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div className="container">
      <header>
        <h1>Gestion des Événements</h1>
      </header>
      <CreateEventForm addEvent={addEvent} />
      <EventList events={events} />
      <ParticipantList participants={participants} />
    </div>
  );
};

export default App;



*/
import React, { useState, useEffect } from 'react';
import CreateEventForm from './CreateEventForm';
import EventList from './EventList';
import ParticipantList from './ParticipantList';
import './style.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [participants, setParticipants] = useState([]);

  // Fonction pour récupérer les événements depuis l'API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/events/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  // Fonction pour ajouter un événement
  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  // Fonction pour gérer la suppression
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/events/${id}/`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Mettre à jour la liste des événements après la suppression
      setEvents(events.filter(event => event.id !== id));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Gestion des Événements</h1>
      </header>
      <CreateEventForm addEvent={addEvent} />
      <EventList events={events} onDelete={handleDelete} />
      <ParticipantList participants={participants} />
    </div>
  );
};

export default App;
