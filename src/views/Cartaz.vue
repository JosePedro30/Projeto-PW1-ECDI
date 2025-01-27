<template>
  <div class="festival-container">
    <header class="festival-header">
      <div class="logo-wrapper">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/700a0dbe14fdf03587da6d363014556623a5a9c4559d50208b2af8dbbc2d2c08?apiKey=7cf9ab7765004c278c4384db27161637&"
          class="logo-image"
          alt="Festival Logo"
        />
      </div>
      <nav class="main-nav">
        <a href="#cartaz" class="nav-link nav-link-inactive">Cartaz</a>
        <a href="#bilhetes" class="nav-link">Bilhetes</a>
        <a href="#atividades" class="nav-link">Atividades</a>
        <a href="#merchandising" class="nav-link">Merchandising</a>
        <a href="#info" class="nav-link">Info Útil</a>
        <a href="#causa" class="nav-link">Causa Verde</a>
      </nav>
      <div class="user-actions">
        <a href="#cart" class="cart-link" aria-label="Shopping Cart">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/b938be08d6a2c8966ad0eb6b50a8d2adef44ed958cf104d1e40df1fa552c4ef6?apiKey=7cf9ab7765004c278c4384db27161637&"
            class="cart-icon"
            alt=""
          />
        </a>
        <a href="#profile" class="profile-link" aria-label="User Profile">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/713fd5f8d7c6fb79ea8b0da616ab879d0c699836c2f027d659bf262ba56c32b7?apiKey=7cf9ab7765004c278c4384db27161637&"
            class="profile-icon"
            alt=""
          />
        </a>
      </div>
    </header>

    <main class="festival-main">
      <section class="lineup-section">
        <div class="date-header">
          <h2 class="date-title">17 Janeiro</h2>
          <div class="headliner-card">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/d932c16888ba0de283c1b3d8e745433aea389b09dbcccc7696f7caee2e13a9dd?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="artist-image"
              alt="Xutos & Pontapés performing live"
            />
            <div class="artist-overlay"></div>
            <h3 class="artist-name">Xutos & Pontapés</h3>
          </div>
        </div>

        <div class="artist-grid">
          <ArtistCard 
            image="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/184fe5b9f88ca9ac9f2ca122b4756a4225baf193795175fc90ac7a1e4aed1002?apiKey=7cf9ab7765004c278c4384db27161637&"
            name="Tiago Bettencourt"
            alt="Tiago Bettencourt performing on stage"
          />
          <ArtistCard
            image="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/c583c009df3ae9307494f85576b5ef1d08136658826e2aba3bb0563899a317c0?apiKey=7cf9ab7765004c278c4384db27161637&"
            name="Fernando Daniel"
            alt="Fernando Daniel live performance"
          />
          <ArtistCard
            image="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/b8f004298377c42380164d32d6f51db42219a1e082a93bbe955ff0c53ff4ca3c?apiKey=7cf9ab7765004c278c4384db27161637&"
            name="Coldplay"
            alt="Coldplay band performing"
          />
        </div>

        <div class="date-section">
          <div class="artist-feature">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/7df3cbe3762ced35ea5b2d1be091c379057bbc856351ad36f8d73296686441df?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="feature-image"
              alt="GNR performing live"
            />
            <div class="artist-overlay"></div>
            <h3 class="artist-name">GNR</h3>
          </div>
          
          <div class="date-header">
            <h2 class="date-title">18 Janeiro</h2>
          </div>
        </div>

        <div class="artist-grid">
          <ArtistCard
            image="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/75434beca2474fb4a42fa3094a81892d8613bc340081501666c6380eafd973ba?apiKey=7cf9ab7765004c278c4384db27161637&"
            name="Anselmo Ralph"
            alt="Anselmo Ralph on stage"
          />
          <ArtistCard
            image="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/23817f951c1d7180cd6675b455ce0d7f89531551f2ab8fd5345622cc3218cee7?apiKey=7cf9ab7765004c278c4384db27161637&"
            name="Jorge Palma"
            alt="Jorge Palma performing"
          />
          <ArtistCard
            image="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/ecaebf2cda14187a73112043ab9f1177a69854a30390b79d8c7351641ce2fd72?apiKey=7cf9ab7765004c278c4384db27161637&"
            name="José Pinhal"
            alt="José Pinhal live performance"
          />
        </div>

        <div class="date-header">
          <h2 class="date-title">19 Janeiro</h2>
          <div class="artist-feature">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/211c055d32b2910d38665a54212963b39bf6a609ecfd03e75343db67482e9aa8?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="feature-image"
              alt="Paulo Gonzo performing live"
            />
            <div class="artist-overlay"></div>
            <h3 class="artist-name">Paulo Gonzo</h3>
          </div>
        </div>

        <div class="artist-grid">
          <ArtistCard
            image="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/6d3c0585e85ff526a7b4fb47d50cd9d46c102df782722832a43c4d5221ea77d0?apiKey=7cf9ab7765004c278c4384db27161637&"
            name="Pedro Abrunhosa"
            alt="Pedro Abrunhosa on stage"
          />
          <ArtistCard
            image="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/65dd3feb71cf54ed133f40e03b74a8b5388ff00ba7742ba59fde69dd53200c6c?apiKey=7cf9ab7765004c278c4384db27161637&"
            name="Quim Barreiros"
            alt="Quim Barreiros performing"
          />
          <ArtistCard
            image="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/6870f2d1ea5881753fffb1b77beba73ce80055e554ffe6cc8c029c4fecd7cf0d?apiKey=7cf9ab7765004c278c4384db27161637&"
            name="The Weeknd"
            alt="The Weeknd live performance"
          />
        </div>
      </section>
    </main>

    <footer class="festival-footer">
      <div class="footer-content">
        <div class="contact-section">
          <div class="contact-icons">
            <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/1e24c6c9eb7ac3ebca7ffdc838ed110fafabffbf0798f625365abd1426978c83?apiKey=7cf9ab7765004c278c4384db27161637&" class="contact-icon" alt="" />
            <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/ddd8c1b2a6ccf464d3ddf127e6663ed2e2bed28af133a7d80a72e5683a2501d3?apiKey=7cf9ab7765004c278c4384db27161637&" class="contact-icon" alt="" />
            <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/56f30e45f6a04454ce2e8c4ce085beab6d3448d6ede593373b4da4dcd0ceef71?apiKey=7cf9ab7765004c278c4384db27161637&" class="contact-icon" alt="" />
          </div>
          <address class="contact-info">
            <h3>Contatos</h3>
            ecofestivalsound@gmail.com<br />
            +351 913 471 533<br />
            Idanha-a-Nova 39.968830, -7.181986 Alcafozes
          </address>
        </div>

        <div class="social-section">
          <h3 class="social-title">Siga-nos</h3>
          <div class="social-icons">
            <a href="#" class="social-link" aria-label="Facebook">
              <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/550b54fda8fe7a1dac6164de2b8b581d24503a210aef8a9d6eef2285b7e430e6?apiKey=7cf9ab7765004c278c4384db27161637&" alt="" />
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/bbd04f05dd3f63efaec27c2601c602174357e0a1c9e3026b551e143d21e7ef2d?apiKey=7cf9ab7765004c278c4384db27161637&" alt="" />
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/addfd752629e13e8b69826599f02d30f7ed706a5d74a6de28859c86d452091ef?apiKey=7cf9ab7765004c278c4384db27161637&" alt="" />
            </a>
            <a href="#" class="social-link" aria-label="YouTube">
              <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/dff62d660facd5dc3122c81368a7a731d892be9a5e0f3a5fffd9fc681da35b23?apiKey=7cf9ab7765004c278c4384db27161637&" alt="" />
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-divider"></div>
      <p class="copyright">© 2024 Festival Eco Sound All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
import ArtistCard from '../components/ArtistCard.vue'

export default {
  name: 'FestivalLayout',
  components: {
    ArtistCard
  }
}
</script>

<style scoped>
.festival-container {
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.festival-header {
  background: #4E878C;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 25px 36px;
  gap: 20px;
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
  gap: 49px;
  color: #fff;
  font: 700 40px 'Wask New', sans-serif;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 10px;
}

.nav-link-inactive {
  color: #BEBDBD;
}

.user-actions {
  display: flex;
  gap: 20px;
}

.cart-icon,
.profile-icon {
  width: 38px;
  height: 38px;
}

.festival-main {
  background: #FFFAF2;
  padding: 79px 80px 0;
}

.lineup-section {
  max-width: 1420px;
  margin: 0 auto;
}

.date-header {
  display: flex;
  align-items: center;
  gap: 100px;
  margin-bottom: 114px;
}

.date-title {
  color: #000;
  font: 700 128px 'Wask New', sans-serif;
}

.artist-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 113px;
}

.artist-overlay {
  background: #4E878C;
  height: 125px;
}

.artist-name {
  color: #fff;
  font: 700 55px 'Wask New', sans-serif;
  position: absolute;
  bottom: 46px;
  left: 36px;
}

.festival-footer {
  background: #4E878C;
  padding: 29px 0;
  margin-top: 563px;
}

.footer-content {
  max-width: 1821px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.contact-section {
  display: flex;
  gap: 20px;
}

.contact-icons {
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.contact-icon {
  width: 35px;
  height: 35px;
}

.contact-info {
  color: #fff;
  font: 400 24px/60px Bronova, sans-serif;
  font-style: normal;
}

.social-section {
  text-align: center;
}

.social-title {
  color: #fff;
  font: 700 32px Bronova, sans-serif;
  margin-bottom: 29px;
}

.social-icons {
  display: flex;
  gap: 20px;
}

.social-link img {
  width: 50px;
  height: 50px;
}

.footer-divider {
  height: 4px;
  background: #fff;
  margin: 22px 0;
}

.copyright {
  color: #fff;
  font: 400 24px Bronova, sans-serif;
  text-align: center;
  margin: 34px 0 0 45px;
}

@media (max-width: 991px) {
  .festival-header {
    padding: 0 20px;
  }

  .main-nav {
    gap: 20px;
    font-size: 32px;
  }

  .festival-main {
    padding: 40px 20px;
  }

  .date-title {
    font-size: 40px;
  }

  .artist-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .artist-name {
    font-size: 40px;
  }

  .footer-content {
    flex-direction: column;
    gap: 40px;
  }
}
</style>