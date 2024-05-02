// App.js

import React, { useState, useEffect } from 'react';
import { DirectionsService } from '@react-google-maps/api';
import Map from './compnents/Map';
import RouteDetails from './routes/RouteDetails';

const App = () => {
  const [directions, setDirections] = useState(null);
  const [nextStop, setNextStop] = useState(null);
  const [eta, setEta] = useState(null);

  useEffect(() => {
    const origin = { lat: -1.939826787816454, lng: 30.0445426438232 };
    const destination = { lat: -1.9365670876910166, lng: 30.13020167024439 };
    const waypoints = [
      { location: { lat: -1.9355377074007851, lng: 30.060163829002217 } },
      { location: { lat: -1.9358808342336546, lng: 30.08024820994666 } },
      { location: { lat: -1.9489196023037583, lng: 30.092607828989397 } },
      { location: { lat: -1.9592132952818164, lng: 30.106684061788073 } },
      { location: { lat: -1.9487480402200394, lng: 30.126596781356923 } }
    ];

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        waypoints,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
          const nextStop = result.routes[0].legs[0].end_address;
          setNextStop(nextStop);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }, []);

  return (
    <div>
      <Map directions={directions} />
      <RouteDetails nextStop={nextStop} eta={eta} />
    </div>
  );
};

export default App;
