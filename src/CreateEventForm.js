/*import React, { useState } from 'react';

const CreateEventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent({ title, description, date, time, location });
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
    setLocation('');
  };

  return (
    <form className="create-event-form" onSubmit={handleSubmit}>
      <div>
        <label>Titre:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Heure:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div>
        <label>Lieu:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <button type="submit">Créer Événement</button>
    </form>
  );
};

export default CreateEventForm;*/
import React, { useState } from 'react';

const CreateEventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = { title, description, date, time, location };

    try {
      const response = await fetch('http://localhost:8000/api/events/', { // Remplacez par l'URL correcte de votre API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Event created:', result);

      addEvent(result); // Assurez-vous que la fonction addEvent peut accepter l'événement créé
      setTitle('');
      setDescription('');
      setDate('');
      setTime('');
      setLocation('');
    } catch (error) {
      console.error('Error creating event:', error);
      setError('An error occurred while creating the event.');
    }
  };

  return (
    <form className="create-event-form" onSubmit={handleSubmit}>
      <div>
        <label>Titre:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Heure:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div>
        <label>Lieu:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <button type="submit">Créer Événement</button>
      {error && <p>{error}</p>} {/* Afficher les erreurs si présentes */}
    </form>
  );
};

export default CreateEventForm;


