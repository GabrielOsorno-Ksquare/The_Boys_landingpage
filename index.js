/* Declaring variables */
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('nav a');
const sticky = body.offsetTop + 1;

/* function that updates the styles for the navbar */
const updateNavbarStyle = () => {
  /* Updates the general navbar style */
  let currentId = '';
  let currentClass = '';

  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

  /* Updates the navbar section link style */
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 210) {
      currentId = section.getAttribute('id');
      currentClass = section.getAttribute('class');
    }
  });

  navbarLinks.forEach((li) => {
    if (currentId) {
      li.classList.remove('active');

      if (li.href.includes(currentId)) {
        li.classList.add('active');
      }
    } else if (currentClass) {
      li.classList.remove('active');

      if (li.href.includes(currentClass)) {
        li.classList.add('active');
      }
    }
  });
};

/* function that calls updateNavbarStyle() function when the window is scrolled */
window.onscroll = () => {
  updateNavbarStyle();
};

/* for each that sets a function to change navbar link styles for all navbar links when clicked */
navbarLinks.forEach((li) => {
  li.onclick = (li) => {
    navbarLinks.forEach((li2) => {
      li2.classList.remove('active');
    });

    li.classList.add('active');
  };
});
