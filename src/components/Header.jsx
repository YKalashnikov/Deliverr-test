import React from 'react';

import '../css/components/_header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <a href="/">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.newdesignfile.com%2Fpostpic%2F2012%2F10%2Fhealthy-food-icon-transparent_248816.png&f=1&nofb=1"
            alt="food-logo"
          />
          </a>
          <h1>Sandwich</h1>
        </div>
        <div className="header__cart">
          <a href="tel:0000000000">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffindicons.com%2Ffiles%2Ficons%2F102%2Fopenphone%2F128%2Fphone.png&f=1&nofb=1"
            alt="phone-icon"
          />
          <p>(000)000-0000</p>
          </a>
        </div>
      </div>
    </div>
  );
};
