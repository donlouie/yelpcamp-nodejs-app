const gCampground = JSON.parse(campground);

// <!--Mapbox Script -->
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/light-v10', // style URL
  //   center: [-74.5, 40], // starting position [lng, lat]
  //   center: campground.geometry.coordinates,
  center: gCampground.geometry.coordinates,
  zoom: 10, // starting zoom
});

// new mapboxgl.Marker().setLngLat([-74.5, 40]).addTo(map);
new mapboxgl.Marker()
  .setLngLat(gCampground.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h3>${gCampground.title}</h3><p>${gCampground.location}</p>`
    )
  )
  .addTo(map);
