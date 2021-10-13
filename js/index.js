
const humberg = document.querySelector('.nav-mob');
const navList = document.querySelector('.nav-lists')
const times = document.querySelector('.times');
const divDesktop = document.querySelector('.desktop');
const navLink = document.querySelectorAll('.nav-link');

function closeNavItems() {
    navList.classList.replace('column', 'nav-lists');
    navList.style.display = '';
  }

  humberg.addEventListener('click', () => {
    navList.classList.replace('nav-lists', 'column');
    times.classList.add('fa-times');
    navList.style.display = 'block';
  });

  times.addEventListener('click', () => {
    closeNavItems();
  });

  navLink.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        closeNavItems();
      }
    });
  });