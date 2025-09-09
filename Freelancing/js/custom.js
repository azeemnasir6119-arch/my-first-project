document.addEventListener('DOMContentLoaded', function () {
  const animateSections = document.querySelectorAll('.animate-section');

  function checkScroll() {
    animateSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;


      if (sectionTop < windowHeight - 100) {
        const animatedElements = section.querySelectorAll('.animate__animated');
        animatedElements.forEach(el => {
          if (!el.classList.contains('animate__fadeInUp')) {
            el.classList.add('animate__fadeInUp');
          }
        });
      }
    });
  }


  window.addEventListener('scroll', checkScroll);
  checkScroll();
});