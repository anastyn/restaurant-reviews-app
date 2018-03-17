/**
 * Initialize the picture element.
 * @param $picture the picture element to initialize
 */
const initPicture = (restaurant, $picture) => {

  const srcSets = DBHelper.imageUrlForRestaurant(restaurant);

  const createSource = (minWidth, sufix) => {
    const source = document.createElement('source');
    source.media = `(min-width: ${minWidth})`;
    source.srcset = srcSets[sufix];
    return source;
  };

  const largeSource = createSource('900px', 'large');
  $picture.appendChild(largeSource);

  const mediumSource = createSource('600px', 'medium');
  $picture.appendChild(mediumSource);

  const image = document.createElement('img');
  image.src = srcSets['original'];
  image.className = 'restaurant-img';
  image.alt = 'Restaurant ' + restaurant.name;
  $picture.appendChild(image);

};
