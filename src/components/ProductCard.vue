<template>
    <div class="product-card">
      <div class="product-image-wrapper">
        <img
          :src="product.image"
          :alt="product.name"
          class="product-image"
          loading="lazy"
        />
      </div>
      <h3 class="product-name">{{ product.name }}</h3>
      <button class="buy-button" aria-label="Add to cart">
        <img
          :src="product.actionImage"
          alt=""
          class="buy-icon"
          loading="lazy"
        />
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .product-image-wrapper {
    border-radius: 15px;
    background: #4E878C;
    border: 2px solid #4E878C;
    width: 100%;
  }
  
  .product-image {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
  
  .product-name {
    color: #4E878C;
    margin: 20px 0 10px;
    font: 700 16px Bronova, sans-serif;
  }
  
  .buy-button {
    background: none;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  
  .buy-icon {
    width: 37px;
    height: 37px;
    border-radius: 90px;
  }
  </style>