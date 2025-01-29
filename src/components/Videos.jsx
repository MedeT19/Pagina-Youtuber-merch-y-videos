import React from 'react';
import twitterLogo from '../assets/twitter_logo.png';
import instagramLogo from '../assets/instagram_logo.png';
import twitchLogo from '../assets/twitch_logo.png';

const Videos = () => {
  return (
    <section id="videos">
      <h2 style={{ textAlign: 'center', color: '#00554E' }}>Video Más Nuevo</h2>
      <div className="video-wrapper">
        <div className="video-cont large">
          <iframe
            src="https://www.youtube.com/embed/dOSr3QEEeaU"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="video-description-con">
            <div className="video-description">
              <p><strong>¡Quiubole gente enferma!</strong> el día de hoy les traigo un nuevo video al canal, en donde nos pusimos a jugar a "INDIGO PARK" o conocido como el parque indigo. Básicamente es un parque que ya no se encuentra en funcionamiento por sucesos que desconocemos.</p>
              <p>Todo empieza ya que queremos conocer el parque y nos vamos adentro del mismo a explorar, pero no todo parece bien. Por lo que debemos tener cuidado con quienes nos encontramos dentro del parque maldito.</p>
              <p>Mientras jugábamos estuvo bastante divertido la verdad, este parque maldito oculta muchas cosas que aún no conocemos, pero yo sé que te va a encantar.</p>
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ textAlign: 'center', color: '#0087D1' }}>Video con Más Vistas</h2>
      <div className="video-wrapper">
        <div className="video-cont large">
          <iframe
            src="https://www.youtube.com/embed/AKVCi6E0nLI"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="video-description-cont">
            <div className="video-description">
              <p><strong>Hola amigos</strong>, aquí les traemos un nuevo video <em>"Un día en la ciudad de México Roblox"</em> sobre el directo de cuando jugamos Roblox. Habían bastantes personas así que decidimos visitar varios servidores tercermundistas. Salieron un buen de momentos divertidos o momentos graciosos, sé que te va a gustar el video. Si te gustó el contenido, apóyalo con un like.</p>
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ textAlign: 'center', color: '#8A2BE2' }}>Otros Videos</h2>
      <div className="video-grid">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/HZgkdwf2s1Y"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="video-description-container">
            <div className="video-description">
              <p>Bueno gente, el día de hoy les traigo un vídeo en donde verán todos los mejores momentos de su Marinela jugando al GTA VICE CITY. Salieron muchos momentos muy chingones así que si te gustó mucho el vídeo agradecería mucho que dejar tu like y te suscribas para que no te pierdas de mis próximos vídeos.</p>
            </div>
          </div>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/HpinGf0vFT8"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="video-description-container">
            <div className="video-description">
              <p>Hola gente enferma, el día de hoy les traigo un gameplay de <em>Devour</em>, un juego de terror que me recuerda mucho a <em>Pacify</em>. Lo estuve probando con el Aldo Geo y la verdad salieron muy buenos momentos divertidos, nos la pasamos muy bien ese día.</p>
              <p>Recuerda que la mejor manera de apoyar al canal es con tu like y dejando tu suscribiéndote :)</p>
            </div>
          </div>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/ootxbvAjYus"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="video-description-container">
            <div className="video-description">
              <p>Un juego en donde seremos una sandía y tendremos que hacer diversos parkours para llegar a la cima de todo.</p>
              <p>Salieron un montón de momentos muy divertidos que les quiero compartir en este épico vídeo. Si el vídeo les gustó, les invito a que dejen su like y se suscriban para que no se pierdan de más vídeos divertidos como este.</p>
            </div>
          </div>
        </div>
      </div>

      <section id="about">
        <h2 style={{ textAlign: 'center', color: '#FF0000' }}>Acerca de mí</h2>
        <p>
          Hola, soy un YouTuber dedicado a los videojuegos. Me encanta compartir mis partidas,
          estrategias y consejos con todos ustedes. Además, tengo una variedad de productos que
          pueden encontrar en la sección de productos. ¡Gracias por su apoyo!
        </p>
        <div className="social-links">
          <a href="https://twitter.com/elmarianaa" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter" />
          </a>
          <a href="https://instagram.com/elmarianaa" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" />
          </a>
          <a href="https://twitch.tv/elmariana" target="_blank" rel="noopener noreferrer">
            <img src={twitchLogo} alt="Twitch" />
          </a>
        </div>
      </section>
    </section>
  );
};

export default Videos;
