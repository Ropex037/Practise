// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9wZXgiLCJhIjoiY2tpb2s1bmtkMGo2NzJzbWxxNW1udW1saSJ9._cNVUDLXfG4n-evuq48ZWw'; 
const map = new mapboxgl.Map({
  container: 'map',
  // Replace YOUR_STYLE_URL with your style URL.
  style: 'mapbox://styles/ropex/ckt5sxkc60icl17o0phbee0dw', 
  center: [20.482433294449212,44.80104239793593],
  zoom: 18
});
map.on('click', ({ point }) => {
    // If the user clicked on one of your markers, get its information.
    const features = map.queryRenderedFeatures(point, {
      layers: ['niska'] // replace with your layer name
    });
    if (!features.length) {
      return;
    }
    const feature = features[0];
  
    // Code from the next step will go here.
    const popup = new mapboxgl.Popup({ offset: [0, -15] })
.setLngLat(feature.geometry.coordinates)
.setHTML(
`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
)
.addTo(map);
});
 
