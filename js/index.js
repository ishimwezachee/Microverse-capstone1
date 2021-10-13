const humberg = document.querySelector('.nav-mob');
const navList = document.querySelector('.nav-lists');
const times = document.querySelector('.times');
const navLink = document.querySelectorAll('.nav-link');
const artists = document.querySelector('.artist-cards');
const data = [
  {
    name: 'Meddy',
    title: 'A rwandan artist who is among top super starts in rwanda.',
    describtion: 'The Ben started his career at young age and he was winning differnt awards due his singing talent.',
    image: 'images/meddy.jpg',
  },
  {
    name: 'The Ben',
    title: 'A rwandan artist who is among top super starts in rwanda.',
    describtion: 'The Ben started his career at young age and he was winning differnt awards due his singing talent.',
    image: 'images/the-ben.jpg',
  },
  {
    name: 'Kivumbi the King',
    title: 'A rwandan artist who is among top super starts in rwanda.',
    describtion: 'The Ben started his career at young age and he was winning differnt awards due his singing talent.',
    image: 'images/kivumbi.jpg',
  },
  {
    name: 'christopher',
    title: 'A rwandan artist who is among top super starts in rwanda.',
    describtion: 'The Ben started his career at young age and he was winning differnt awards due his singing talent.',
    image: 'images/christopher.jpg',
  },
  {
    name: 'Aline Sano',
    title: 'A rwandan artist who is among top super starts in rwanda.',
    describtion: 'The Ben started his career at young age and he was winning differnt awards due his singing talent.',
    image: 'images/aline-sano.jpg',
  },
  {
    name: 'Diamond',
    title: 'A rwandan artist who is among top super starts in rwanda.',
    describtion: 'The Ben started his career at young age and he was winning differnt awards due his singing talent.',
    image: 'images/platnum.png',
  },
];

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

data.forEach((card) => {
  artists.innerHTML += `
    <div class="artist-cards">
    <div class="card">
      <div class="div-img">
        <img class="img-one" src=${card.image}>
      </div>
      <ul class="card-detail">
        <li class="title">${card.name}</li>
        <li class="sub-title">${card.title}</li>
        <li class="achievement">${card.describtion}</li>
      </ul>
    </div>
    `;
});
