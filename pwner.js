// ==UserScript==
// @name         P-W-N NitroType Reborn
// @namespace    Leopard Industries
// @version      1.2
// @match        https://www.nitrotype.com/garage
// @icon         https://i.postimg.cc/9F3NNrJ4/nt.png
// ==/UserScript==


(function() {
    'use strict';


    function updateCar(selector, oldTip, newTip) {
        const carDiv = document.querySelector(selector);
        if (carDiv && carDiv.getAttribute('data-tip') === oldTip) {
            carDiv.setAttribute('data-tip', newTip);
        }
    }


    updateCar('div.garage-vehichleImage[style*="/cars/24_small_1.png"]', 'Blitz C-64', 'Family Truckster');
    updateCar('div.garage-vehichleImage[style*="/cars/oneace_small.png"]', 'Hydrova One Ace', 'General Beauregard');

    // set your custom user tag below
    document.querySelector('.profile-title').textContent = 'Floofy One';

    // adds the gold profile banner, only on the garage page
    const style = document.createElement("style");
    style.textContent = `
      .structure-content::before {
        content: url("/dist/site/images/themes/profiles/gold/deco-ntGoldLogo2.png");
        position: relative;
        top: 25px;
        left: 350px;
        z-index: 9;
      }
    `;
    document.head.appendChild(style);


})();

