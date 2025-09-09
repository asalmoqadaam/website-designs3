
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
  
      // Show small bubbles
      // const bubbles = el.querySelectorAll('.small-bubble');
      // bubbles.forEach((b, i) => {
      //   b.style.animation = `bubbleRise 1.2s ease ${i * 0.2}s forwards`; // staggered
      // });
  
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