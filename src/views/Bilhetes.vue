<template>
    <div class="ticket-container">
      <header class="header">
        <div class="logo-wrapper">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/700a0dbe14fdf03587da6d363014556623a5a9c4559d50208b2af8dbbc2d2c08?apiKey=7cf9ab7765004c278c4384db27161637&"
            class="logo-image"
            alt="Festival Logo"
          />
        </div>
        <nav class="navigation">
          <a href="#cartaz" class="nav-link">Cartaz</a>
          <a href="#bilhetes" class="nav-link nav-link-active">Bilhetes</a>
          <a href="#atividades" class="nav-link">Atividades</a>
          <a href="#merchandising" class="nav-link">Merchandising</a>
          <a href="#info" class="nav-link">Info Útil</a>
          <a href="#causa" class="nav-link">Causa Verde</a>
        </nav>
        <div class="user-actions">
          <button class="cart-button" aria-label="Shopping Cart">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/b938be08d6a2c8966ad0eb6b50a8d2adef44ed958cf104d1e40df1fa552c4ef6?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="cart-icon"
              alt=""
            />
          </button>
          <button class="profile-button" aria-label="User Profile">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/713fd5f8d7c6fb79ea8b0da616ab879d0c699836c2f027d659bf262ba56c32b7?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="profile-icon"
              alt=""
            />
          </button>
        </div>
      </header>
  
      <section class="daily-tickets">
        <div class="ticket-grid">
          <div class="ticket-image-wrapper">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/d407101a90ceae5c785ba74bd50e35eca18e37f2f86bd11d501525118b27f6ef?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="ticket-image"
              alt="Daily Ticket Visual"
            />
          </div>
          <div class="ticket-content">
            <h1 class="ticket-title">Bilhete Diário</h1>
            <div class="ticket-date-group">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/7cba41fd94550732cf5c33167c6f7c8b3ba0a4b34227effbf5a1540a45164066?apiKey=7cf9ab7765004c278c4384db27161637&"
                class="date-icon"
                alt=""
              />
              <div class="date-info">
                <span class="date17">17 de Janeiro</span>
                <span class="day17">Sexta-Feira</span>
                <span class="more-info17">Coldplay, Tiago Bettencourt e muito mais</span>
              </div>
              <div class="ticket-actions">
                <button class="add-cart-btn" tabindex="0">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
            
            <!-- Repeated structure for other dates -->
            <div class="ticket-date-group">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/7cba41fd94550732cf5c33167c6f7c8b3ba0a4b34227effbf5a1540a45164066?apiKey=7cf9ab7765004c278c4384db27161637&"
                class="date-icon"
                alt=""
              />
              <div class="date-info">
                <span class="date18">18 de Janeiro</span>
                <span class="day18">Sexta-Feira</span>
                <span class="more-info18">GNR, José Pinhal e muito mais</span>   
              </div>
              <div class="ticket-actions">
                <button class="add-cart-btn" tabindex="0">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
  
            <div class="ticket-date-group">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/7cba41fd94550732cf5c33167c6f7c8b3ba0a4b34227effbf5a1540a45164066?apiKey=7cf9ab7765004c278c4384db27161637&"
                class="date-icon"
                alt=""
              />
              <div class="date-info">
                <span class="date19">19 de Janeiro</span>
                <span class="day19">Sexta-Feira</span>
                <span class="more-info19">The weeknd, Paulo Gonzo e muito mais</span>
              </div>
              <div class="ticket-actions">
                <button class="add-cart-btn" tabindex="0">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
  
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/f710a8489f72fafaa1dde9e948aced89cb262fe72df9bf96891bbc986649790a?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="decorative-image"
              alt=""
            />
          </div>
        </div>
      </section>
  
      <section class="two-day-tickets">
        <div class="ticket-grid">
          <div class="ticket-content">
            <h2 class="ticket-title">Passe 2 Dias</h2>
            
            <!-- Two day ticket options -->
            <div class="ticket-date-group">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/36d93569c54dd8fb32ebd7efea18f765de3d172c53c9e40d82c0ad5efb51cf09?apiKey=7cf9ab7765004c278c4384db27161637&"
                class="date-icon"
                alt=""
              />
              <div class="date-info">
                <span class="date">17 + 18 de Janeiro</span>
                <span class="day">Sexta e sábado</span>
                <span class="more-info">ColdPlay, José Pinhal e muito mais</span>
              </div>
              <button class="add-cart-btn light" tabindex="0">
                Adicionar ao carrinho
              </button>
            </div>
  
            <div class="ticket-date-group">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/36d93569c54dd8fb32ebd7efea18f765de3d172c53c9e40d82c0ad5efb51cf09?apiKey=7cf9ab7765004c278c4384db27161637&"
                class="date-icon"
                alt=""
              />
              <div class="date-info">
                <span class="date">18 + 19 de Janeiro</span>
                <span class="day">Sábado e Domingo</span>
                <span class="more-info">José Pinhal, The weeknd e muito mais</span>
              </div>
              <button class="add-cart-btn light" tabindex="0">
                Adicionar ao carrinho
              </button>
            </div>
  
            <div class="ticket-date-group">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/36d93569c54dd8fb32ebd7efea18f765de3d172c53c9e40d82c0ad5efb51cf09?apiKey=7cf9ab7765004c278c4384db27161637&"
                class="date-icon"
                alt=""
              />
              <div class="date-info">
                <span class="date">17 + 19 de Janeiro</span>
                <span class="day">Sexta e domingo</span>
                <span class="more-info">ColdPlay, The weeknd e muito mais</span>
              </div>
              <button class="add-cart-btn light" tabindex="0">
                Adicionar ao carrinho
              </button>
            </div>
  
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/a62924fa0f10933b4417a9bada782ee7506703f0c6b9e1f6af88b4a32e1e3966?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="decorative-image"
              alt=""
            />
          </div>
          <div class="ticket-image-wrapper">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/dbaf12e77b3bba0a7387ae71d72c63b1b97cf6252e0a1f2d3cfe13fd348f4576?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="ticket-image"
              alt="Two Day Pass Visual"
            />
          </div>
        </div>
      </section>
  
      <section class="full-pass">
        <div class="ticket-grid">
          <div class="ticket-image-wrapper">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/eb578d3e378b1e26615918fe61ca98582577f0f7ff477f9b6da806bcb5676547?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="ticket-image"
              alt="Full Pass Visual"
            />
          </div>
          <div class="ticket-content">
            <h2 class="ticket-title">Passe Geral</h2>
            <div class="ticket-date-group">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/7cba41fd94550732cf5c33167c6f7c8b3ba0a4b34227effbf5a1540a45164066?apiKey=7cf9ab7765004c278c4384db27161637&"
                class="date-icon"
                alt=""
              />
              <div class="date-info">
                <span class="date3">17 + 18 + 19 de Janeiro</span>
                <span class="day3">Sexta, Sábado e Domingo</span>
                <span class="more-info3">Coldplay, GNR, The Weeknd e muito mais</span>
              </div>
              <button class="add-cart-btn" tabindex="0">
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </section>
  
      <footer class="footer">
        <div class="footer-content">
          <div class="contact-info">
            <div class="social-icons">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/1db56225-6186-43ae-8e21-8a18f8288d09?apiKey=7cf9ab7765004c278c4384db27161637&"
                class="social-icon"
                alt="Social Media Icon"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/2583474e-48ee-4ede-950b-72f10e2daacb?apiKey=7cf9ab7765004c278c4384db27161637&"
                class="social-icon"
                alt="Social Media Icon"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/d05d3e4b-1df2-4f44-a7f7-b322c599a5e8?apiKey=7cf9ab7765004c278c4384db27161637&"
                class="social-icon"
                alt="Social Media Icon"
              />
            </div>
            <address class="contact-details">
              <strong>Contatos</strong><br />
              ecofestivalsound@gmail.com<br />
              +351 913 471 533<br />
              Idanha-a-Nova 39.968830, -7.181986 Alcafozes
            </address>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/550b54fda8fe7a1dac6164de2b8b581d24503a210aef8a9d6eef2285b7e430e6?apiKey=7cf9ab7765004c278c4384db27161637&"
              class="footer-decoration"
              alt=""
            />
          </div>
          <p class="copyright">© 2024 Festival Eco Sound All Rights Reserved.</p>
        </div>
        <div class="social-follow">
          <h3 class="follow-title">Siga-nos</h3>
          <div class="social-links">
            <a href="#" aria-label="Follow us on Facebook">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/bbd04f05dd3f63efaec27c2601c602174357e0a1c9e3026b551e143d21e7ef2d?apiKey=7cf9ab7765004c278c4384db27161637&"
                class="social-link-icon"
                alt=""
              />
            </a>
            <a href="#" aria-label="Follow us on Instagram">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/addfd752629e13e8b69826599f02d30f7ed706a5d74a6de28859c86d452091ef?apiKey=7cf9ab7765004c278c4384db27161637&"
                class="social-link-icon"
                alt=""
              />
            </a>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/dff62d660facd5dc3122c81368a7a731d892be9a5e0f3a5fffd9fc681da35b23?apiKey=7cf9ab7765004c278c4384db27161637&"
            class="footer-decoration"
            alt=""
          />
        </div>
      </footer>
    </div>
  </template>
  
  <style scoped>
  .ticket-container {
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .header {
    background: #4E878C;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 25px 36px;
    gap: 20px;
  }
  
  .logo-image {
    width: 253px;
    height: auto;
  }
  
  .navigation {
    display: flex;
    gap: 40px;
    color: #fff;
    font: 700 40px 'Wask New', sans-serif;
  }
  
  .nav-link {
    color: #fff;
    text-decoration: none;
    padding: 10px;
  }
  
  .nav-link-active {
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
  
  .ticket-grid {
    display: flex;
    gap: 20px;
    padding: 40px;
  }
  
  .ticket-image-wrapper {
    flex: 0 0 45%;
  }
  
  .ticket-image {
    width: 100%;
    height: auto;
  }
  
  .ticket-content {
    flex: 1;
    padding: 20px;
  }
  
  .ticket-title {
    color: #000;
    font: 700 72px 'Wask New', sans-serif;
    text-align: center;
    margin-bottom: 40px;
  }
  
  .ticket-date-group {
    display: flex;
    align-items: start;
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .date-icon {
    width: 87px;
    height: 87px;
  }
  
  .date-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  
  .date {
    font: 700 52px 'Wask New', sans-serif;
  }

  .date17 {
    font: 700 52px 'Wask New', sans-serif;
    color: #000;
  }

  .date18 {
    font: 700 52px 'Wask New', sans-serif;
    color: #000;
  }

  .date19 {
    font: 700 52px 'Wask New', sans-serif;
    color: #000;
  }

  .date3 {
    font: 700 52px 'Wask New', sans-serif;
    color: #000;
  }
  
  .day {
    font: 400 16px 'Bronova', sans-serif;
  }

  .day17 {
    font: 400 16px 'Bronova', sans-serif;
    color: #000;
  }

  .day18 {
    font: 400 16px 'Bronova', sans-serif;
    color: #000;
  }

  .day19 {
    font: 400 16px 'Bronova', sans-serif;
    color: #000;
  }

  .day3 {
    font: 400 16px 'Bronova', sans-serif;
    color: #000;
  }
  
  .more-info {
    font: 400 16px 'Bronova', sans-serif;
    margin-top: 15px;
  }

  .more-info17 {
    font: 400 16px 'Bronova', sans-serif;
    margin-top: 15px;
    color: #000;
  }

  .more-info18 {
    font: 400 16px 'Bronova', sans-serif;
    margin-top: 15px;
    color: #000;
  }

  .more-info19 {
    font: 400 16px 'Bronova', sans-serif;
    margin-top: 15px;
    color: #000;
  }

  .more-info3 {
    font: 400 16px 'Bronova', sans-serif;
    margin-top: 15px;
    color: #000;
  }
  
  .add-cart-btn {
    font: 700 16px 'Bronova', sans-serif;
    padding: 14px;
    border: 2px solid #000;
    background: transparent;
    cursor: pointer;
  }
  
  .add-cart-btn.light {
    border-color: #fff;
    color: #fff;
  }
  
  .two-day-tickets {
    background: #4E878C;
    color: #fff;
  }
  
  .footer {
    background: #4E878C;
    color: #fff;
    padding: 40px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
  }
  
  .contact-info {
    max-width: 500px;
  }
  
  .social-icons {
    display: flex;
    gap: 20px;
  }
  
  .social-icon {
    width: 36px;
    height: 36px;
  }
  
  .contact-details {
    font: 400 24px/60px 'Bronova', sans-serif;
    margin: 20px 0;
    font-style: normal;
  }
  
  .copyright {
    font: 400 24px 'Bronova', sans-serif;
    margin-top: 60px;
  }
  
  .social-follow {
    text-align: center;
  }
  
  .follow-title {
    font: 700 32px 'Bronova', sans-serif;
    margin-bottom: 29px;
  }
  
  .social-links {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  
  .social-link-icon {
    width: 50px;
    height: 50px;
  }
  
  .decorative-image {
    max-width: 100%;
    height: auto;
    margin-top: 40px;
  }
  
  @media (max-width: 991px) {
    .header {
      padding: 20px;
    }
    
    .ticket-grid {
      flex-direction: column;
    }
    
    .ticket-image-wrapper {
      flex: none;
    }
    
    .ticket-title {
      font-size: 40px;
    }
    
    .date {
      font-size: 40px;
    }
    
    .footer-content {
      flex-direction: column;
    }
    
    .contact-info {
      max-width: 100%;
    }
  }
  </style>