import React, { useState } from "react";
import "./App.css";
import characterImg from "./assets/character.png"
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  document.body.classList.add("dark-theme");
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? "light-theme" : "dark-theme";
  };

  return (
    <div className="App">

      <nav>
        <h2>NEWW<span id="ai">[AI]</span>VI</h2>
        <div className="menu">
          <button className="btn" onClick={toggleTheme}>
            {isDarkMode ? "Light" : "Dark"} Mode
          </button>
          <h5 id="menu">MENU <i class="fa-solid fa-bars"></i></h5>
        </div>
      </nav>

      <div className="row">
        <div className="col-1">
          <h1 className="heading">DG</h1>
          <h1 className="heading2">XO</h1>
        </div>
        <div className="col-2"></div>
      </div>

      <div className="hero">
        <div className="hero-1">
          <img className="charImg" src={characterImg} alt="character" />
        </div>

        <div className="hero-2">
          <div className="sideBar">

            <div className="sideC-1">
              <h2>NEWW[AI]VI</h2>
              <p>Libero nemo nesciunt officia optio sapiente? Eius, neque atque, officia veniam tempore dolore praesentium. Soluta, autem optio.</p>
              <h4 className="discover">Discover <span className="arrow"><i class="fa-solid fa-arrow-right"></i></span></h4>
            </div>

            <div className="sideC-2">
              <div className="grid">
                <div className="img1">
                  <img src={img1} alt="img not available" />
                </div>
                <div className="img2">
                  <img src={img2} alt="img not available" />
                </div>
                <div className="img3">
                  <img src={img3} alt="img not available" />
                </div>
                <div className="img4">
                  <img src={img4} alt="img not available" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;