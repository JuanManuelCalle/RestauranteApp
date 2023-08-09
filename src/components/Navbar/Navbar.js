window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 45) {
      navbar.classList.add('sticky-top', 'shadow-sm');
    } else {
      navbar.classList.remove('sticky-top', 'shadow-sm');
    }
  });