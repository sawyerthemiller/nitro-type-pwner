// ==UserScript==
// @name         P-W-N NitroType Reborn
// @namespace    Leopard Industries
// @version      1.2
// @match        https://www.nitrotype.com/garage
// @icon         https://i.postimg.cc/9F3NNrJ4/nt.png
// ==/UserScript==

(function() {
    'use strict';

    // attempt to set actual gold
    setInterval(function(){
        var a = JSON.parse(localStorage["persist:nt"]);
        var b = JSON.parse(a.user);
        b.membership = "gold";
        a.user = JSON.stringify(b);
        localStorage["persist:nt"] = JSON.stringify(a);
     }, 1000);

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

    // set your custom team tag below
    const teamTag = document.querySelector('a[href="/team/VWV"].player-name--tag');
    if (teamTag) {
        teamTag.textContent = "[UWU]";
    }

    // adds the gold profile banner, only on the garage page
    const style = document.createElement("style");
    style.textContent = `

    #nt-gold-sparkles {
      position: relative;
      height: 40px;
      margin-bottom: -35px;
      z-index: 0;
      pointer-events: none;
    }

    /* multiple sparkle layers = randomness */
    #nt-gold-sparkles::before,
    #nt-gold-sparkles::after {
      content: "";
      position: absolute;
      bottom: -50px; /* start from bottom like a firework launch */
      left: 43%;
      transform: translateX(-50%);
      width: 60px;
      height: 20px;
      filter: blur(0.4px);
    }

    /* layer 1 */
    #nt-gold-sparkles::before {
      background:
        radial-gradient(circle at 8% 50%,  #fff3bf 0 1px, transparent 4px),
        radial-gradient(circle at 18% 20%, #ffd966 0 1.2px, transparent 4px),
        radial-gradient(circle at 30% 65%, #ffe066 0 1px, transparent 4px),
        radial-gradient(circle at 44% 30%, #fff9db 0 1.3px, transparent 4px),
        radial-gradient(circle at 57% 55%, #ffd43b 0 1px, transparent 4px),
        radial-gradient(circle at 70% 25%, #ffec99 0 1.2px, transparent 4px),
        radial-gradient(circle at 85% 60%, #fff3bf 0 1px, transparent 4px);
      opacity: 0.7;
      animation: fireworkA 0.7s ease-out infinite;
    }

    /* layer 2 */
    #nt-gold-sparkles::after {
      background:
        radial-gradient(circle at 12% 30%, #ffd966 0 1px, transparent 4px),
        radial-gradient(circle at 26% 55%, #fff3bf 0 1.3px, transparent 4px),
        radial-gradient(circle at 39% 18%, #ffe066 0 1px, transparent 4px),
        radial-gradient(circle at 52% 65%, #fff9db 0 1.2px, transparent 4px),
        radial-gradient(circle at 66% 35%, #ffd43b 0 1px, transparent 4px),
        radial-gradient(circle at 78% 50%, #ffec99 0 1.3px, transparent 4px),
        radial-gradient(circle at 92% 25%, #fff3bf 0 1px, transparent 4px);
      opacity: 0.6;
      animation: fireworkB 1.2s ease-out infinite;
    }

    /* fireworks shoot up and fade */
    @keyframes fireworkA {
      0% {
        transform: translateX(-50%) translateY(0) scale(0.5);
        opacity: 0.3;
      }
      40% {
        transform: translateX(-50%) translateY(-40px) scale(1);
        opacity: 0.9;
      }
      60% {
        transform: translateX(-50%) translateY(-60px) scale(1.1);
        opacity: 0.5;
      }
      100% {
        transform: translateX(-50%) translateY(-80px) scale(1.2);
        opacity: 0;
      }
    }

    @keyframes fireworkB {
      0% {
        transform: translateX(-50%) translateY(0) scale(0.5);
        opacity: 0.2;
      }
      30% {
        transform: translateX(-50%) translateY(-35px) scale(1);
        opacity: 0.8;
      }
      70% {
        transform: translateX(-50%) translateY(-55px) scale(1.1);
        opacity: 0.4;
      }
      100% {
        transform: translateX(-50%) translateY(-75px) scale(1.2);
        opacity: 0;
      }
    }

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

(function insertGoldSparkles() {
  const target = document.querySelector('.structure-content');
  if (!target || document.getElementById('nt-gold-sparkles')) return;

  const sparkles = document.createElement('div');
  sparkles.id = 'nt-gold-sparkles';

  target.parentNode.insertBefore(sparkles, target);
})();

(() => {
    const transparentPNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';
    const targetPattern = 'nitro_default.png';

    const NativeImage = window.Image;
    window.Image = function() {
        const img = new NativeImage();
        Object.defineProperty(img, 'src', {
            set(val) {
                if (typeof val === 'string' && val.includes(targetPattern)) {
                    this.setAttribute('src', transparentPNG);
                } else {
                    this.setAttribute('src', val);
                }
            },
            get() { return this.getAttribute('src'); }
        });
        return img;
    };

    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType === 1) { // Element
                    if (node.tagName === 'IMG' && node.src.includes(targetPattern)) {
                        node.src = transparentPNG;
                    }
                    node.querySelectorAll(`img[src*="${targetPattern}"]`).forEach(img => img.src = transparentPNG);
                }
            }
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    const style = document.createElement('style');
    style.innerHTML = `img[src*="${targetPattern}"] { content: url("${transparentPNG}") !important; }`;
    document.documentElement.appendChild(style);
})();

(function () {
    'use strict';

    function closeGoldModal() {
        const modal = document.querySelector('.modal--season-ending-announcement');
        if (!modal) return;

        const closeBtn = modal.closest('.modal-container')
            ?.querySelector('.modal-close');

        if (closeBtn) {
            closeBtn.click();
        }
    }

    // Run once in case it's already there
    closeGoldModal();

    // Watch for future popups
    const observer = new MutationObserver(() => {
        closeGoldModal();
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
