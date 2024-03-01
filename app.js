document.addEventListener('DOMContentLoaded', function () {
  const contentCards = document.querySelector('.content-cards');
  const iconLeft = document.querySelector('.fa-arrow-left');
  const iconRight = document.querySelector('.fa-arrow-right');

  let scrollAmount = 0;
  const cardWidth = document.querySelector('.content-card').offsetWidth;
  const totalCards = document.querySelectorAll('.content-card').length;

  iconLeft.addEventListener('click', function () {
      scrollAmount -= cardWidth;
      if (scrollAmount < 0) {
          scrollAmount = 0;
      }
      contentCards.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });

  iconRight.addEventListener('click', function () {
      scrollAmount += cardWidth;
      if (scrollAmount > (totalCards - 1) * cardWidth) {
          scrollAmount = (totalCards - 1) * cardWidth;
      }
      contentCards.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });
});

function changeFontSize(size) {
  const body = document.body;
  let currentSize = parseInt(window.getComputedStyle(body).fontSize);

  switch (size) {
      case 'normal':
          currentSize = 16;
          break;
      case 'larger':
          currentSize += 1;
          break;
      case 'largest':
          currentSize += 2;
          break;
  }

  // Store the selected font size in Local Storage
  localStorage.setItem('fontSize', currentSize + 'px');

  // Apply the font size to the body
  body.style.fontSize = currentSize + 'px';
}

// Function to retrieve and apply font size from Local Storage
function applyStoredFontSize() {
  const storedSize = localStorage.getItem('fontSize');

  if (storedSize) {
      document.body.style.fontSize = storedSize;
  }
}

// Call applyStoredFontSize when the page loads
document.addEventListener('DOMContentLoaded', applyStoredFontSize);



function toggleDarkMode() {
  // Toggle the 'dark-mode' class on the body
  document.body.classList.toggle('dark-mode');

  // Check if dark mode is currently active
  const isDarkMode = document.body.classList.contains('dark-mode');

  // Store the dark mode state in Local Storage
  localStorage.setItem('dark-mode', isDarkMode);

  document.body.style.backgroundColor = isDarkMode ? '#222F80' : ''; 
}

function applyStoredDarkMode() {
  // Retrieve the dark mode state from Local Storage
  const storedDarkMode = localStorage.getItem('dark-mode');

  // Check if dark mode was previously active
  if (storedDarkMode === 'true') {
      document.body.classList.add('dark-mode');
      document.body.style.backgroundColor = '#222F80'; 
  }
}

// Call applyStoredDarkMode when the page loads
document.addEventListener('DOMContentLoaded', applyStoredDarkMode);