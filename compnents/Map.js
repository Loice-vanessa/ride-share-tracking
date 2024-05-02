

import React from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const Map = ({ options, onMapLoad, directions }) => {
  return (
    <div>
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        zoom={14}
        center={options.center}
        onLoad={onMapLoad}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default Map;
