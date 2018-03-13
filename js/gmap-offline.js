// trigger rendering of the function normally invoked by the window.initMap() callback
// updateRestaurants is available on the main page, fillBreadcrumb is available on the reviews page
if (typeof updateRestaurants !== 'undefined') {
  updateRestaurants();
} else {
  fetchRestaurantFromURL(error => {
    if (error) { // Got an error!
      console.error(error);
    }
  })
}

// set map not available overlay instead of the #map content
const mapToHide = document.getElementById('map-container');
mapToHide.className = 'hidden';

const offlineOverlay = document.getElementById('offline-overlay-container');
offlineOverlay.classList.remove('hidden');
