let sections = document.querySelectorAll('section');
let navmenulinks = document.querySelectorAll('header navmenu a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('ID');

        if(top >= offset && top < offset + height) {
            navmenulinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navmenu a[href*=' + id + ']').classList.add
            });
        };
    });
};

    document.addEventListener("DOMContentLoaded", function() {
    anime({
      targets: 'header',
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 1000,
      delay: 500
    });
  
    anime({
      targets: '.home',
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 1000,
      delay: 1000
    });
    
  });
    const navLinks = document.querySelectorAll('.navmenu a');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        anime({
          targets: 'html, body',
          scrollTop: targetSection.offsetTop,
          duration: 1000,
          easing: 'easeInOutQuad'
        });
      });
    });
  
    const elements = document.querySelectorAll('.section-slide-up');
  
    function fadeInElements() {
      elements.forEach(function(element) {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });
    }
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    window.addEventListener('scroll', fadeInElements);
    window.addEventListener('resize', fadeInElements);
  
    fadeInElements();

    