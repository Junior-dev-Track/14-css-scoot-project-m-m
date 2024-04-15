import './style.scss';


/* Burger Menu */


document.getElementById('menu-burger').addEventListener('click', function() {
  var nav = document.getElementById('nav-menu');
  var overlay = document.getElementById('overlay');
  var body = document.body;
  if (nav.style.transform === 'translateX(0px)') {
    nav.style.transform = 'translateX(-256px)';
    overlay.style.display = 'none';
    body.classList.remove('no-scroll');
  } else {
    nav.style.transform = 'translateX(0px)';
    overlay.style.display = 'block';
    body.classList.add('no-scroll');
  }
});

/* Close Menu */

var menuBurger = document.getElementById('menu-burger');
var navMenu = document.getElementById('nav-menu');

menuBurger.addEventListener('click', function() {
  if (navMenu.classList.contains('nav-menu-active')) {
    navMenu.classList.remove('nav-menu-active');
    menuBurger.src = 'assets/menu.svg';
  } else {
    navMenu.classList.add('nav-menu-active');
    menuBurger.src = 'assets/close.svg';
  }
});


/* Header Scroll */

let lastScrollTop = 0;
const header = document.querySelector('#header');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.add('hide-header');
  } else {
    header.classList.remove('hide-header');
  }
  lastScrollTop = scrollTop;
});


/* FAQ Accordion */

var answers = document.querySelectorAll('.answer');

answers.forEach(function(answer) {
  var response = answer.querySelector('p');
  response.style.display = 'none'; 

  answer.addEventListener('click', function() {
    // Close all answers
    answers.forEach(function(otherAnswer) {
      if (otherAnswer !== answer) {
        otherAnswer.querySelector('p').style.display = 'none';
        otherAnswer.classList.remove('open');
      }
    });

    // Open or close the clicked answer
    response.style.display = response.style.display === 'none' ? 'block' : 'none';
    answer.classList.toggle('open');
  });
});

