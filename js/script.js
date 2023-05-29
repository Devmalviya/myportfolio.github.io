
  /*=================== menu icon navbar  ================*/
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  /*=================== swiper ================*/
  window.onscroll = () => {
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
  };

 
  /*=================== swiper ================*/
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .team-wrapper, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

/*=================== scroll section active link ================*/

const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  navLinks.forEach((link) => link.classList.remove('active'));
  navLinks[index].classList.add('active');

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}
changeLinkState();
window.addEventListener('scroll', changeLinkState);
