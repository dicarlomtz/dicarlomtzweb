/**
* Template Name: iPortfolio - v3.7.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      } else {
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
      } else {
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)

  }

  /**
   * Mobile nav toggle
   */
  on('click', '.menu-display-button', function (e) {
    document.getElementsByClassName('mobile-nav-toggle')[0].classList.toggle('bi-list');
    document.getElementsByClassName('mobile-nav-toggle')[0].classList.toggle('bi-x');

  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {

    if (select(this.hash)) {
      if (window.innerWidth < 1024) {
        document.getElementsByClassName('mobile-nav-toggle')[0].classList.remove('bi-x');
        document.getElementsByClassName('mobile-nav-toggle')[0].classList.toggle('bi-list');
        document.getElementsByClassName('menu-items-container')[0].style.display = 'none';
        scrollto(this.hash)
      }
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function (direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

function verifyContactForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  if (name == '' || email == '' || subject == '' || message == '') {
    Swal.fire({
      confirmButtonColor: '#149ddd',
      icon: 'error',
      title: '¡Oops!',
      text: 'Fill in all the gaps, please!',
    })
    return false;
  }

  let validRegex = /\S+@\S+\.\S+/;

  if (!validRegex.test(email)) {
    Swal.fire({
      confirmButtonColor: '#149ddd',
      icon: 'error',
      title: '¡Oops!',
      text: 'Enter a valid email address, please!',
    })
    return false;
  }

  frm = $("#form");
  $.ajax({
    type: frm.attr("method"),
    url: frm.attr("action"),
    data: frm.serialize(),
    success: function () {
      Swal.fire({
        confirmButtonColor: '#3085d6',
        title: '¡You are awesome!',
        text: 'Email sent successfully!',
        icon: 'success'
      });
      $('#message').val("");
      $('#subject').val("");
      $('#email').val("");
      $('#name').val("");
    },
    error: function (xhr, status, error) {
      Swal.fire({
        confirmButtonColor: '#3085d6',
        title: '¡Error!',
        text: 'Something went wrong! If the problem persists, contact us by email.',
        icon: 'error'
      });

    }
  });

}

let menuButton = document.getElementsByClassName('menu-display-button')[0];

menuButton.addEventListener('click', buttonDisplayMenuEvent);

function buttonDisplayMenuEvent() {

  let menuItemsContainer = document.getElementsByClassName('menu-items-container')[0];

  if (menuItemsContainer.style.display === 'flex') {
    menuItemsContainer.style.display = 'none';
    menuItemsContainer.style.flexDirection = '';
    return;
  }

  menuItemsContainer.style.display = 'flex';
  menuItemsContainer.style.flexDirection = 'column';
}