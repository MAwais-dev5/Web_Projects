// src/images/gallery/index.js

function importAll(r) {
    return r.keys().map((key) => r(key));
  }
  
  // Import all jpg images in the gallery folder
  const images = importAll(require.context('.', false, /sports-day-\d\.jpg$/));
  
  export default images;
  