// trigger rendering of the function normally invoked by the window.initMap() callback
// updateRestaurants is available on the main page, fillBreadcrumb is available on the reviews page
if (typeof updateRestaurants !== 'undefined') {
  updateRestaurants();
} else {
  fetchRestaurantFromURL(error => {
    if (error) { // Got an error!
      console.error(error);
    } else {
      fillBreadcrumb();
    }
  })
}
