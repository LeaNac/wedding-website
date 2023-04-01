import React from "react";
import "./App.css";
import vue_lac from './images/vue_lac.png';
import fete from './images/fete.png';
import japonese_couple from './images/japonese_couple.webp';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img className="resized-header-image" src={vue_lac} alt="Beautiful view" />
        <h1>Mariage Simon & Léa</h1>
      </header>
      <main>

        <section id="our-story">
          <h2>...   Histoire courte  ...</h2>
          <p>A l'université, Simon se fait remarquer en classe en faisant le clown (comme d'hab)</p>
          <p>Léa, est une étudiante studieuse et sérieuse 😇</p>
          <p>Elle le remarque <b>s'agiter dans tous les sens et là, PAF !</b>  C'est le coup de foudre !</p>
          <p>Simon, a su user de son charme et les voilà peu de temps après à vouloir faire les clown sous une tente qu'on appelle <b>"Houpa"</b></p>
          <p><b>Venez célébrer avec nous et comme il se doit, ce jour spécial !</b></p>
          <img src={fete} alt="fete" />
        </section>

<div className="line-separator" />

        <section id="wedding-details">
          <h2> 🌻 Information Mariage 🌻</h2>
          <div className="paragraph-container">
          <div>
          <h3> Mairie</h3>
            <ol>
              <li><strong> Date :</strong> Mercredi 14 Juin 2023</li>
              <li>👰🏻‍♀️ Cérémonie - <b>16h30</b>,🍷 Vin d'honneur</li>
              <li>Hotel de Ville, Saint-Maur-des-Fossés</li>
              <li>Av. Charles de Gaulle, 94100</li>
            </ol>
            </div>

            <img className="resized-image" src={japonese_couple} alt="Japonese couple" />
            
            <div>
            <h3> Cérémonie religieuse et Réception</h3>
            <ol>
              <li><strong> Date :</strong> Dimanche 18 Juin 2023</li>
              <li> 👰🏻‍♀️ Cérémonie - <b>11h00</b>, 💃🏻 Reception - <b>12h30</b></li>
              <li> Factory 58, Bobigny</li>
              <li> 12 Rue Gutenberg, 93000</li>
            </ol>
            </div>
          </div>
        </section>

        <section id="rsvp">
          <h2>Réponse souhaité ASAP</h2>
          <p>Merci de nous confirmer votre présence avant le 28 avril 👉 <a href="https://forms.gle/LsZe8R3w5X68qNVW9" target="_blank" rel="noopener noreferrer"> SUR CE LIEN </a> 👈.</p>
        </section>

        <div className="line-separator" />

        <section id="accommodations">
          <h2>Plan d'accès, Informations pratiques</h2>
          {/* Add accommodation details here */}
        </section>
      

        <div className="line-separator" />

      </main>
      <footer>
        {/* Add footer content here */} 
      </footer>
    </div>

  );
};

export default App;

