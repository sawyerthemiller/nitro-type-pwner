// ==UserScript==
// @name         P-W-N NitroType Reborn
// @namespace    Leopard Industries
// @version      1.3
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

    // --- ADD YOUR TEAM TAG SWAP HERE ---
    const teamTag = document.querySelector('a[href="/team/VWV"].player-name--tag');
    if (teamTag) {
        teamTag.textContent = "[UWU]";
    }
    // ----------------------------------------

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

      .player-name--tag.link.link--bare.mrxxs.twb::before {
        content: "";
        display: inline-block;
        width: 32px;
        height: 32px;
        background-image: url("/dist/site/images/themes/profiles/gold/nt-gold-icon-xl.png");
        background-size: contain;
        background-repeat: no-repeat;
        margin: 15px 2px 0 10px;
      }
    `;
    document.head.appendChild(style);

})();
