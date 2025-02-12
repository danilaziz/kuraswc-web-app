document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = document.querySelectorAll('section');

  // Set "Home" as active by default
  document.querySelector('.nav-link[href="#"]').classList.add('active');

  window.addEventListener('scroll', function() {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });

    // Set "Home" as active if no section is in view
    if (!current) {
      document.querySelector('.nav-link[href="#"]').classList.add('active');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
});


  // DARK MODE
  // document.addEventListener('DOMContentLoaded', function() {
  //   const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  //   const navbarCollapse = document.querySelector('.navbar-collapse');
  //   const darkModeToggle = document.getElementById('dark-mode-toggle');
  //   const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
  //   const body = document.body;
  //   const navbar = document.querySelector('.navbar');
  
  //   // Load theme from localStorage
  //   if (localStorage.getItem('darkMode') === 'enabled') {
  //     enableDarkMode();
  //   }
  
  //   navLinks.forEach(link => {
  //     link.addEventListener('click', function() {
  //       if (navbarCollapse.classList.contains('show')) {
  //         navbarCollapse.classList.remove('show');
  //       }
  //     });
  //   });
  
  //   darkModeToggle.addEventListener('click', function() {
  //     if (body.classList.contains('dark-mode')) {
  //       disableDarkMode();
  //     } else {
  //       enableDarkMode();
  //     }
  //   });
  
  //   darkModeToggleMobile.addEventListener('click', function() {
  //     if (body.classList.contains('dark-mode')) {
  //       disableDarkMode();
  //     } else {
  //       enableDarkMode();
  //     }
  //   });
  
  //   function enableDarkMode() {
  //     body.classList.add('dark-mode');
  //     navbar.classList.add('dark-mode');
  //     navbar.classList.remove('bg-white');
  //     document.querySelector('.header-section').classList.add('dark-mode');
  //     document.querySelector('.portfolio-section').classList.add('dark-mode');
  //     document.querySelector('.contact-section').classList.add('dark-mode');
  //     localStorage.setItem('darkMode', 'enabled');
  //     darkModeToggle.classList.replace('bx-moon', 'bx-sun');
  //     darkModeToggleMobile.classList.replace('bx-moon', 'bx-sun');
  //   }
  
  //   function disableDarkMode() {
  //     body.classList.remove('dark-mode');
  //     navbar.classList.remove('dark-mode');
  //     navbar.classList.add('bg-white');
  //     document.querySelector('.header-section').classList.remove('dark-mode');
  //     document.querySelector('.portfolio-section').classList.remove('dark-mode');
  //     document.querySelector('.contact-section').classList.remove('dark-mode');
  //     localStorage.setItem('darkMode', 'disabled');
  //     darkModeToggle.classList.replace('bx-sun', 'bx-moon');
  //     darkModeToggleMobile.classList.replace('bx-sun', 'bx-moon');
  //   }
  // });
