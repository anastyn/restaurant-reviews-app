// trigger rendering of the function normally invoked by the window.initMap() callback
// updateRestaurants is available on the main page, fillBreadcrumb is available on the reviews page
if (updateRestaurants) {
  updateRestaurants();
} else {
  fillBreadcrumb();
}

// set map not available overlay instead of the #map content
const mapElement = document.getElementById('#map');
console.log(mapElement);