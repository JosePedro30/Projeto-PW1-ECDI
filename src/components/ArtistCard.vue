<template>
    <div class="artist-card">
      <img
        :src="image"
        :alt="alt"
        class="artist-image"
        loading="lazy"
      />
      <div class="artist-overlay"></div>
      <h3 class="artist-name">{{ name }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ArtistCard',
    props: {
      image: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .artist-card {
    position: relative;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  .artist-image {
    width: 100%;
    aspect-ratio: 0.99;
    object-fit: cover;
  }
  
  .artist-overlay {
    background: #4E878C;
    height: 125px;
  }
  
  .artist-name {
    position: absolute;
    bottom: 46px;
    left: 36px;
    color: #fff;
    font: 700 55px 'Wask New', sans-serif;
  }
  
  @media (max-width: 991px) {
    .artist-name {
      font-size: 40px;
    }
  }
  </style>