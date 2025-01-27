<template>
    <div class="store-container">
      <header class="store-header">
        <div class="logo-wrapper">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/700a0dbe14fdf03587da6d363014556623a5a9c4559d50208b2af8dbbc2d2c08?apiKey=7cf9ab7765004c278c4384db27161637&"
            class="logo-image"
            alt="EcoSound Festival Logo"
          />
        </div>
        <nav class="main-nav">
          <a href="#cartaz" class="nav-link">Cartaz</a>
          <a href="#bilhetes" class="nav-link">Bilhetes</a>
          <a href="#atividades" class="nav-link">Atividades</a>
          <a href="#merchandising" class="nav-link nav-link-active">Merchandising</a>
          <a href="#info" class="nav-link">Info Útil</a>
          <a href="#causa" class="nav-link">Causa Verde</a>
        </nav>
        <div class="user-actions">
          <a href="/cart" class="cart-icon" aria-label="Shopping Cart">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/b938be08d6a2c8966ad0eb6b50a8d2adef44ed958cf104d1e40df1fa552c4ef6?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="icon"
              alt=""
            />
          </a>
          <a href="/profile" class="profile-icon" aria-label="User Profile">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/713fd5f8d7c6fb79ea8b0da616ab879d0c699836c2f027d659bf262ba56c32b7?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="icon"
              alt=""
            />
          </a>
        </div>
      </header>
  
      <main class="store-main">
        <section class="hero-section">
          <div class="hero-content">
            <p class="hero-text">
              Aqui pode encontrar produtos 100% eco-friendly, fabricados com
              materiais sustentáveis e de alta qualidade. Comprometemo-nos com a
              proteção do ambiente, garantindo que cada peça de vestuário e
              acessório seja produzida de forma responsável e consciente.<br /><br />
              Ao escolher os nossos produtos, vai investir no estilo e no futuro
              do planeta e<span class="highlight-text">
                10% do lucro gerado</span>
              é revertido para causas que protegem o meio ambiente.<br /><br />
            </p>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/f06bde88-a81b-4944-872c-a8a24c69e8c5?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="hero-image"
              alt="Eco-friendly merchandise collection"
            />
          </div>
        </section>
  
        <section class="product-section">
          <h2 class="section-title">T-SHIRTS</h2>
          <div class="product-grid">
            <ProductCard 
              v-for="(product, index) in tshirts" 
              :key="index"
              :product="product"
            />
          </div>
        </section>
  
        <section class="product-section">
          <h2 class="section-title">SWEATSHIRTS</h2>
          <div class="product-grid">
            <ProductCard 
              v-for="(product, index) in sweatshirts" 
              :key="index"
              :product="product"
            />
          </div>
        </section>
  
        <section class="product-section">
          <h2 class="section-title">ACESSÓRIOS</h2>
          <div class="product-grid">
            <ProductCard 
              v-for="(product, index) in accessories" 
              :key="index"
              :product="product"
            />
          </div>
        </section>
      </main>
  
      <SiteFooter />
    </div>
  </template>
  
  <script>
  import ProductCard from '../components/ProductCard.vue'
  import SiteFooter from '../components/SiteFooter.vue'
  
  export default {
    name: 'MerchandisingPage',
    components: {
      ProductCard,
      SiteFooter
    },
    data() {
      return {
        tshirts: [
          {
            image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/8b840b64ef3fab756ab9d9472be0959f4b09de0e3f0062ffb674da20f5a28359?apiKey=7cf9ab7765004c278c4384db27161637&',
            name: 'T-shirt branca',
            actionImage: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&'
          },
          {
            image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/d0bb4eb9ff6d16ce107264b66e548cb25596a670ff13ed1396e0076b170c85c1?apiKey=7cf9ab7765004c278c4384db27161637&',
            name: 'T-shirt rosa',
            actionImage: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&'
          },
          {
            image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/58cd164aeb0796b767d0e487e19dcfb7f7962b308aeaab24264ee38dcf8b0969?apiKey=7cf9ab7765004c278c4384db27161637&',
            name: 'T-shirt cinza',
            actionImage: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&'
          },
          {
            image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/512fb8ee808e3a09f89c051e0d631abc306aba966246cc44800bcf0e43427bf9?apiKey=7cf9ab7765004c278c4384db27161637&',
            name: 'T-shirt bege',
            actionImage: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&'
          }
        ],
        sweatshirts: [
          {
            image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/9eb2fbfe6820ead76ae66951ae417d0d56311aa8f8b4733010aab98915ce5616?apiKey=7cf9ab7765004c278c4384db27161637&',
            name: 'Sweatshirt branca',
            actionImage: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&'
          },
          {
            image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/242f6685e633394f2e31e273135392e50ca4182a79c3e76d9ca2408ad3fb1efa?apiKey=7cf9ab7765004c278c4384db27161637&',
            name: 'Sweatshirt azul',
            actionImage: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&'
          },
          {
            image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/3141a477b2c77fc8e3cbe0cf29aaaccf600b60c15eefa0eaa9070920d86aeaac?apiKey=7cf9ab7765004c278c4384db27161637&',
            name: 'Sweatshirt bege',
            actionImage: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&'
          },
          {
            image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/8d6cd1ea84080bc06d6759f7ee12df9b60dbab3ed0e793d6a38938c466e4f2e6?apiKey=7cf9ab7765004c278c4384db27161637&',
            name: 'Sweatshirt cinza',
            actionImage: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&'
          }
        ],
        accessories: [
          {
            image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/c93e1d21acbfd291c346009e30b5f251e4dd8ed2016239f17049d39569f4b79e?apiKey=7cf9ab7765004c278c4384db27161637&',
            name: 'Capa iphone c/ lineup',
            actionImage: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&'
          },
          {
            image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/714e77f0c737ac70a68e55ce0cef93eb40fd072d4dbe8b187e2c8490a66d6df5?apiKey=7cf9ab7765004c278c4384db27161637&',
            name: 'Saco EcoSound',
            actionImage: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&'
          },
          {
            image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/4c70820d75c0570a0471771ceb4c2703dcf732793411af7b3aa4a34df36bd31b?apiKey=7cf9ab7765004c278c4384db27161637&',
            name: 'Chapéu EcoSound',
            actionImage: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&'
          },
          {
            image: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/5e6cf9f6b89645d808adfc6cc7ff5060d06076db733904111916d189efd773b1?apiKey=7cf9ab7765004c278c4384db27161637&',
            name: 'Tapete de rato EcoSound',
            actionImage: 'https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/04a968310d3f5f60973c78c17cfaae977f78d63c93bd1dcee6b5086dcf059803?apiKey=7cf9ab7765004c278c4384db27161637&'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .store-container {
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .store-header {
    background: #4E878C;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 25px 36px;
  }
  
  .logo-wrapper {
    padding: 10px;
  }
  
  .logo-image {
    width: 253px;
    height: auto;
  }
  
  .main-nav {
    display: flex;
    gap: 40px;
    margin: auto 0;
  }
  
  .nav-link {
    color: #fff;
    font: 700 40px Wask New, sans-serif;
    text-decoration: none;
    padding: 10px;
  }
  
  .nav-link-active {
    color: #BEBDBD;
  }
  
  .user-actions {
    display: flex;
    gap: 20px;
    margin: auto 0;
  }
  
  .cart-icon,
  .profile-icon {
    padding: 10px;
  }
  
  .icon {
    width: 38px;
    height: 38px;
  }
  
  .store-main {
    background: #FFFAF2;
    padding: 78px 80px;
  }
  
  .hero-section {
    margin-bottom: 146px;
  }
  
  .hero-content {
    display: flex;
    gap: 20px;
  }
  
  .hero-text {
    flex: 0 0 40%;
    font: 400 24px Bronova, sans-serif;
    color: #000;
  }
  
  .highlight-text {
    color: #4AD373;
  }
  
  .hero-image {
    flex: 0 0 60%;
    height: auto;
  }
  
  .product-section {
    margin-bottom: 50px;
  }
  
  .section-title {
    color: #000;
    font: 700 24px Bronova, sans-serif;
    margin-bottom: 48px;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 991px) {
    .store-header {
      padding: 0 20px;
    }
  
    .main-nav {
      flex-wrap: wrap;
    }
  
    .store-main {
      padding: 40px 20px;
    }
  
    .hero-content {
      flex-direction: column;
    }
  
    .hero-text {
      flex: none;
      margin-bottom: 40px;
    }
  
    .hero-image {
      flex: none;
    }
  
    .product-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  </style>