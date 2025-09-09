document.addEventListener('DOMContentLoaded', () => {
  // open/close the side menu
  const toggleBtn = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');
  if (toggleBtn && sideMenu) {
    toggleBtn.addEventListener('click', () => sideMenu.classList.toggle('open'));
  }

  // helper: attach dropdown toggle to a menu list
  function setupDropdown(listSelector) {
    const list = document.querySelector(listSelector);
    if (!list) return;

    list.addEventListener('click', (e) => {
      const link = e.target.closest('.dropdown > a');
      if (!link) return;

      e.preventDefault();
      const item = link.closest('.dropdown');
      const menu = item.querySelector('.dropdown-menu');

      // toggle this dropdown
      menu.classList.toggle('show');

      // close others inside the same list
      list.querySelectorAll('.dropdown-menu.show').forEach(ul => {
        if (ul !== menu) ul.classList.remove('show');
      });
    });
  }

  setupDropdown('.menu-options');
  setupDropdown('.menu-options-2');

  // sign-in button effect
  const signInBtn = document.querySelector('.sign-in-box button');
  if (signInBtn) {
    signInBtn.addEventListener('click', () => {
      signInBtn.classList.toggle('clicked');
    });
  }
});

// prevent dummy "#" links from jumping to top
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', e => e.preventDefault());
});

/*
window.addEventListener("load", () => {
    // Bubble cursor
    new cursoreffects.bubbleCursor({
      fillColor: "#ff69b4",
      strokeColor: "#dda0dd"
    });

    // Other options:
    // new cursoreffects.fairyDustCursor({ colors: ["#ff69b4","#dda0dd"] });
    // new cursoreffects.emojiCursor({ emoji: ["💖","✨","🌸"] });
    // new cursoreffects.rainbowCursor();
  });
  */
  function popBubble(el) {
    if (!el.classList.contains('popped')) {
      el.classList.add('popped');
  
    
      // Hide big bubble & text immediately
      el.querySelector('.bubble').style.opacity = '0';
      el.querySelector('.bubble-label').style.opacity = '0';
  
      // Wait until small bubbles finish popping, then bring big bubble back
      setTimeout(() => {
        el.classList.remove('popped');
        el.querySelector('.bubble').style.opacity = '1';
        el.querySelector('.bubble-label').style.opacity = '1';
  
        // Reset small bubbles
        bubbles.forEach(b => {
          b.style.animation = 'none';
          b.offsetHeight; // force reflow
          b.style.opacity = '0';
        });
      }, 2500); // Delay return after small bubbles pop
    }
  }
