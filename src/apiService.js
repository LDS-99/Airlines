import React, { useState, useEffect } from 'react';

function App() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch('https://developers.booking.com/');
        const data = await response.json();
        setTrips(data);
      } catch (error) {
        console.error('Error fetching trips data:', error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="App">
      <header className="header">
        {/* Tu contenido existente aquí */}
        <div>
          <h2>Información de Viajes:</h2>
          <ul>
            {trips.map((trip, index) => (
              <li key={index}>
                <h3>{trip.destination}</h3>
                <p>{trip.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;