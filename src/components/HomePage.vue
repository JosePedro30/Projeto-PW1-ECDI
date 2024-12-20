<template>
    <div id="app">
        <!-- Header -->
        <header class="header">
            <div class="logo">
                <span>ECO <span class="leaf-icon">🌿</span> sound</span>
            </div>
            <nav class="nav">
                <ul>
                    <li>Cartaz</li>
                    <li>Bilhetes</li>
                    <li>Atividades</li>
                    <li>Merchandising</li>
                    <li>Info Útil</li>
                    <li>Causa Verde</li>
                </ul>
            </nav>
            <div class="icons">
                <i class="cart-icon">🛒</i>
                <i class="user-icon">👤</i>
            </div>
        </header>
  
        <!-- Hero Section -->
        <section class="hero">
            <img  alt="Nature Background" class="background-img">
            <button class="cta-button">Compra o Teu Bilhete</button>
        </section>
  
        <!-- Line-Up -->
        <section class="line-up">
            <h1 class="countdown">00:00:00</h1>
            <h2>Line-up</h2>
            <div class="artists">
            <div class="artist">
                <img alt="Xutos & Pontapés">
                <h3>Xutos & Pontapés</h3>
                <p>19 de Janeiro</p>
            </div>
            <div class="artist">
                <img  alt="The Weeknd">
                <h3>The Weeknd</h3>
                <p>18 de Janeiro</p>
            </div>
            <div class="artist">
                <img  alt="Anselmo Ralph">
                <h3>Anselmo Ralph</h3>
                <p>17 de Janeiro</p>
            </div>
            </div>
        </section>
  
        <!-- Footer -->
        <footer class="footer">
            <div class="newsletter">
                <h2>Subscrever a nossa newsletter</h2>
                <input type="email" placeholder="Email address">
                <button>SUBSCREVER</button>
            </div>
            <div class="contacts">
                <p><strong>Contatos:</strong></p>
                <p>Email: ecofestivalsound@gmail.com</p>
                <p>Tel: +351 913 471 533</p>
                <p>Local: Idanha-a-Nova</p>
            </div>
            <div class="social">
                <p>Siga-nos:</p>
                <div>
                <i>Instagram</i>
                <i>YouTube</i>
                <i>Facebook</i>
            </div>
            </div>
        </footer>
    </div>
</template>
  
<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3b8070;
    color: white;
    padding: 10px 20px;
}
.nav ul {
    display: flex;
    list-style: none;
}
.nav ul li {
    margin: 0 15px;
    cursor: pointer;
}
.icons {
    display: flex;
    gap: 10px;
}
  
.hero {
    position: relative;
    text-align: center;
}
.background-img {
    width: 100%;
    height: auto;
}
.cta-button {
    position: absolute;
    bottom: 20px;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}
  
.line-up {
    text-align: center;
    padding: 20px;
}
.artists {
    display: flex;
    justify-content: space-around;
}
.artist img {
    width: 150px;
    height: auto;
    border-radius: 10px;
}
  
.footer {
    background-color: #3b8070;
    color: white;
    padding: 20px;
}
</style>  