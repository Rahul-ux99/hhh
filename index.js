 const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

  
    function closeMenu() {
      navMenu.classList.remove('active');
    }

    navToggle.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navMenu.classList.toggle('active');
      }
    });



  document.querySelectorAll('.gallery img').forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover');

    if (hoverSrc) {
      img.addEventListener('mouseover', () => {
        img.src = hoverSrc;
      });

      img.addEventListener('mouseout', () => {
        img.src = originalSrc;
      });
    }
  });


  console.log("hello");
  

