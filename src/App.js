import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="menu container">
          <span className="logo">Airlines LS</span>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <img src="/images/menu.png" className="menu-icono" alt="" />
          </label>
          <nav className="navbar">
            <ul>
              <li><span>Reservar</span></li>
              <li><span>Mis Viajes</span></li>
              <li><span>Check-In</span></li>
              <li><span>Destinos</span></li>
              <li><span>Estados de Vuelo</span></li>
              <li><span>Atención al Cliente</span></li>
            </ul>
          </nav>
          <div className="icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="header-content container">
          <div className="header-txt">
            <h1>Con Airlines planea tus viajes ahora</h1>
            <p>Para nuestra compañía la seguridad y el bienestar de nuestros pasajeros son nuestra máxima prioridad!</p>
            <button className="btn-1">Seleccione el menú</button>
          </div>
        </div>

        <div className="images">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="/images/Caribe.jpg" alt="" />
                <h3>Caribe</h3>
              </div>
              <div className="swiper-slide">
                <img src="/images/Centroamerica.avif" alt="" />
                <h3>Centroamérica</h3>
              </div>
              <div className="swiper-slide">
                <img src="/images/Norteamerica.jpg" alt="" />
                <h3>Norteamérica</h3>
              </div>
              <div className="swiper-slide">
                <img src="/images/Suramerica.jpg" alt="" />
                <h3>Sudamérica</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="rows">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
