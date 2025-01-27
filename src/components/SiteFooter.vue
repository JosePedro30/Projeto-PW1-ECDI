<template>
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-main">
          <div class="social-icons">
            <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/aa219c19-0c99-4bdc-b2ed-ef8490591115?apiKey=7cf9ab7765004c278c4384db27161637&" alt="Social icon" class="social-icon" />
            <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/2ae4114d-6eff-410f-a0e6-d05701add061?apiKey=7cf9ab7765004c278c4384db27161637&" alt="Social icon" class="social-icon" />
            <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/d285b2d7-ce18-4267-886d-cd64bc1d67b0?apiKey=7cf9ab7765004c278c4384db27161637&" alt="Social icon" class="social-icon" />
          </div>
          
          <div class="contact-info">
            <h2 class="contact-title">Contatos</h2>
            <p class="contact-details">
              ecofestivalsound@gmail.com<br />
              +351 913 471 533<br />
              Idanha-a-Nova 39.968830, -7.181986 Alcafozes
            </p>
          </div>
        </div>
  
        <div class="social-section">
          <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/550b54fda8fe7a1dac6164de2b8b581d24503a210aef8a9d6eef2285b7e430e6?apiKey=7cf9ab7765004c278c4384db27161637&" alt="" class="social-decoration" />
          <div class="social-follow">
            <h3 class="follow-title">Siga-nos</h3>
            <div class="social-links">
              <a href="#" aria-label="Facebook">
                <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/bbd04f05dd3f63efaec27c2601c602174357e0a1c9e3026b551e143d21e7ef2d?apiKey=7cf9ab7765004c278c4384db27161637&" alt="" class="social-link-icon" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/addfd752629e13e8b69826599f02d30f7ed706a5d74a6de28859c86d452091ef?apiKey=7cf9ab7765004c278c4384db27161637&" alt="" class="social-link-icon" />
              </a>
            </div>
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/7cf9ab7765004c278c4384db27161637/dff62d660facd5dc3122c81368a7a731d892be9a5e0f3a5fffd9fc681da35b23?apiKey=7cf9ab7765004c278c4384db27161637&" alt="" class="social-decoration" />
        </div>
  
        <div class="footer-divider"></div>
        
        <p class="copyright">© 2024 Festival Eco Sound All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .site-footer {
    background: #4E878C;
    color: #fff;
  }
  
  .footer-content {
    padding: 29px 0;
  }
  
  .footer-main {
    display: flex;
    justify-content: space-between;
    margin: 0 56px 0 35px;
    flex-wrap: wrap;
  }
  
  .social-icons {
    display: flex;
    flex-direction: column;
    margin-top: 57px;
  }
  
  .social-icon {
    width: 36px;
    height: 36px;
    margin-bottom: 24px;
  }
  
  .contact-info {
    flex-grow: 1;
  }
  
  .contact-title {
    font: 700 32px Bronova, sans-serif;
    margin-bottom: 20px;
  }
  
  .contact-details {
    font: 400 24px/60px Bronova, sans-serif;
  }
  
  .social-section {
    display: flex;
    align-items: flex-end;
    gap: 9px;
    margin-top: 95px;
  }
  
  .social-decoration {
    width: 50px;
    height: 50px;
    margin-top: 59px;
  }
  
  .social-follow {
    display: flex;
    flex-direction: column;
  }
  
  .follow-title {
    text-align: center;
    font: 700 32px Bronova, sans-serif;
  }
  
  .social-links {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 29px;
  }
  
  .social-link-icon {
    width: 50px;
    height: 50px;
  }
  
  .footer-divider {
    background: #fff;
    height: 4px;
    margin-top: 22px;
  }
  
  .copyright {
    color: #fff;
    text-align: center;
    margin: 34px 0 0 40px;
    font: 400 24px Bronova, sans-serif;
  }
  
  @media (max-width: 991px) {
    .footer-main {
      margin: 0 10px;
    }
  
    .social-icons {
      margin-top: 40px;
    }
  
    .social-section {
      margin-top: 40px;
    }
  
    .social-decoration {
      margin-top: 40px;
    }
  
    .contact-info,
    .copyright {
      max-width: 100%;
    }
  }
  </style>