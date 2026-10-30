const surpriseBtn = document.getElementById('surpriseBtn');
const celebrateBtn = document.getElementById('celebrateBtn');

surpriseBtn.addEventListener('click', () => {
  document.getElementById('message').scrollIntoView({
    behavior: 'smooth'
  });
});

function celebrate() {
  const symbols = ['🎉', '✨', '🎈', '💙', '🎊'];

  for (let i = 0; i < 45; i++) {
    const piece = document.createElement('span');
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    piece.style.position = 'fixed';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.top = '-35px';
    piece.style.fontSize = '25px';
    piece.style.zIndex = '9999';
    piece.style.transition = 'transform 2.5s, opacity 2.5s';

    document.body.appendChild(piece);

    requestAnimationFrame(() => {
      piece.style.transform = `translateY(${window.innerHeight + 80}px)`;
      piece.style.opacity = '0';
    });

    setTimeout(() => piece.remove(), 2600);
  }
}

celebrateBtn.addEventListener('click', celebrate);
