import React, { useState } from "react";

export default function List() {
  const [selectedItem, setSelectedItem] = useState("radio_strawberry");

  const handleRadioChange = (event) => {
    setSelectedItem(event.target.id);
  };

  return (
    <>
      <div id="scene">
        <div id="left-zone">
          <ul className="list">
            <li className="item">
              <input
                type="radio"
                id="radio_strawberry"
                name="basic_carousel"
                value="The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)"
                checked={selectedItem === "radio_strawberry"}
                onChange={handleRadioChange}
              />
              <label className="label_strawberry" htmlFor="radio_strawberry">
                Astronomical Metadata
              </label>
              <div className="content content_strawberry">
                <span className="picto"></span>
                <h1>Astronomical Metadata</h1>
                <p>
                  A basic web scraping application made using python for
                  better understanding about planets and related Astronomical
                  bodies of the universe.
                  <br />
                  <br />
                  <a href="https://github.com/DON2604/Search-Engine">
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      width="30"
                      height="30"
                      alt="GitHub"
                    />
                  </a>
                </p>
              </div>
            </li>
            <li className="item">
              <input
                type="radio"
                id="radio_banana"
                name="basic_carousel"
                value="A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."
                checked={selectedItem === "radio_banana"}
                onChange={handleRadioChange}
              />
              <label className="label_banana" htmlFor="radio_banana">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Vehicle-Detector-at-sharp-bends
              </label>
              <div className="content content_banana">
                <span className="picto"></span>
                <h1>Vehicle-Detector-at-sharp-bends</h1>
                <p>
                  The proposed project idea is to prevent accidents on sharp
                  road bends, especially in mountainous areas. The project helps
                  car drivers detect if there are any cars near their coverage
                  that can cause accidents.
                  <br />
                  <br />
                  <a href="https://github.com/DON2604/Vehicle-Detector-at-sharp-bends">
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      width="30"
                      height="30"
                      alt="GitHub"
                    />
                  </a>
                </p>
              </div>
            </li>
            <li className="item">
              <input
                type="radio"
                id="radio_apple"
                name="basic_carousel"
                value="The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."
                checked={selectedItem === "radio_apple"}
                onChange={handleRadioChange}
              />
              <label className="label_apple" htmlFor="radio_apple">
              Welcome to Payment-System
              </label>
              <div className="content content_apple">
                <span className="picto"></span>
                <h1>Welcome to Payment-System</h1>
                <p>
                Customer Pay Management System project is written in Python. The project file contains a python script (CPMS.py). This is a simple console based system that is very easy to understand and use.
                <br />
                <br />
                <a href="https://github.com/DON2604/Payment-System">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    width="30"
                    height="30"
                    alt="GitHub"
                  />
                </a>
                </p>
              </div>
            </li>
            <li className="item">
              <input
                type="radio"
                id="radio_orange"
                name="basic_carousel"
                value="The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."
                checked={selectedItem === "radio_orange"}
                onChange={handleRadioChange}
              />
              <label className="label_orange" htmlFor="radio_orange">
                Demon Slayer
              </label>
              <div className="content content_orange">
                <span className="picto"></span>
                <h1>Demon Slayer</h1>
                <p>
                  Its a website made for fun and to provide some info about this fabulous anime and manga. It provides metadata about important characters in this anime an their specialities.
                  <br />
                  <br />
                  <a href="https://github.com/DON2604/demon-slayer">
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      width="30"
                      height="30"
                      alt="GitHub"
                    />
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div id="middle-border"></div>
        <div id="right-zone"></div>
      </div>
    </>
  );
}
