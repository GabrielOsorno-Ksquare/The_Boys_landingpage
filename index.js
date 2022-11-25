/* Declaring variables */
const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;

/* function that updates the styles for the navbar */
updateNavbarStyle = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

/* function that calls updateNavbarStyle() function when the window is scrolled */
window.onscroll = () => {
  updateNavbarStyle();
};
