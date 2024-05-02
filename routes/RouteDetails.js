
import React from 'react';

const RouteDetails = ({ nextStop, eta }) => {
  return (
    <div>
      <h2>Next Stop: {nextStop}</h2>
      <p>ETA: {eta}</p>
    </div>
  );
};

export default RouteDetails;
