// ---- typewriter ----
const typeEl = document.getElementById('typewriter');
if (typeEl) {
  const words = ['Coming Soon.', 'Stay Tuned.', 'Almost Ready.'];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const cursor = document.createElement('span');
  cursor.classList.add('cursor');
  typeEl.after(cursor);

  function type() {
    const current = words[wordIndex];

    if (!deleting) {
      typeEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, 1800); // pause before deleting
        return;
      }
    } else {
      typeEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(type, deleting ? 60 : 100);
  }

  type();
}