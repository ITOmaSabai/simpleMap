import { useEffect, useState } from 'react';

const Index = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    fetch('/api/v1/maps')
      .then(response => response.json())
      .then(data => setMaps(data))
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script); 
    };

    const initMap = () => {
      geocoder = new google.maps.Geocoder();
      let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.1293, lng: 138.7559},
        zoom: 2,
      });
    };

    window.initMap = initMap;
    loadMapScript();

    if (maps.length > 0) {
      maps.forEach(mapData => {
        let markerLatLng = { lat: mapData.lat, lng: mapData.lng };
        let marker = new google.maps.Marker({
          position: markerLatLng,
          map: map
        });
        
        let infowindow = new google.maps.InfoWindow({
          position: markerLatLng,
          content: "<a href='/maps/${mapData.id}' target='_blank' >${mapData.text}</a>"
        });
                    
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      });
    }
  }, [maps]); // mapsが変更されたら、このuseEffectを再実行する

  return (
    <div>
      Hello Index
      <div id="map" style={{ height: '80vh', width: '90vw', marginBottom: '20px' }}>
        Hello Index
      </div>
    </div>
  );
};

export default Index;