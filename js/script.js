const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

const activePage = () => {
   const header = document.querySelector('header');
   const barsBox = document.querySelector('.bars-box');
   
   header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
  }, 1100);

  navLinks.forEach(link => {
     link.classList.remove('active');
  });

  barsBox.classList.remove('active');
  setTimeout(() => {
    barsBox.classList.add('active');
  }, 1100);

  sections.forEach(section => {
    section.classList.remove('active');
 });

 menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
      if (!link.classList.contains('active')) {
        activePage();

        link.classList.add('active');

        setTimeout(() => {
             sections[idx].classList.add('active');
        }, 1100);
      }
  });
});

logoLink.addEventListener('click', () => {
   if (!navLinks[0].classList.contains('active')) {
    activePage();

    navLinks[0].classList.add('active');

    setTimeout(() => {
      sections[0].classList.add('active');
    }, 1100);
   }
});

const profileBtns = document.querySelectorAll(".profile-btn");
const profileDetails = document.querySelectorAll(".Profile-detail");

// Hide all sections initially
profileDetails.forEach((detail) => detail.classList.remove("active"));

// Show only the first section by default
if (profileDetails.length > 0) {
  profileDetails[0].classList.add("active");
  profileBtns[0].classList.add("active");
}

profileBtns.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    // Remove active class from all buttons
    profileBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Hide all sections
    profileDetails.forEach((detail) => detail.classList.remove("active"));

    // Show only the selected section
    if (profileDetails[idx]) {
      profileDetails[idx].classList.add("active");
    }
  });
});

const arrowRight = document.querySelector('.Portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.Portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector('.Portfolio-carousel .img-slide');
  const portfolioDetails = document.querySelectorAll('.Portfolio-detail');

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  portfolioDetails.forEach(detail => {
    detail.classList.remove('active');
  });
  portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () =>{
  if (index < 24) {
    index++;
    arrowLeft.classList.remove('disabled');
  }
  else {
    index = 25;
    arrowRight.classList.add('disabled');
  }

  activePortfolio();
});

arrowLeft.addEventListener('click', () =>{
  if (index > 1) {
    index--;
    arrowRight.classList.remove('disabled');
  }
  else {
    index = 0;
    arrowLeft.classList.add('disabled');
  }

  activePortfolio();
});
