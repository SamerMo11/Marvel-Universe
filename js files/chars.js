function chars() {
  const characters = [
    {
      name: 'thanos',
      color: '#5a00d7',
      img: '../chars/chars/1.png',
      back: '1',
      castname: 'josh brolin' ,
      castimg: '../actors/1.jpg' ,
      relatedMovies: ['../movies/6.jpg', '../movies/10.jpg', '../movies/11.jpg', '../movies/19.jpg', '../movies/22.jpg']
    },
    {
      name: 'captain america',
      color: '#331eff',
      img: '../chars/chars/2.png',
      back: '2',
      castname: 'chris evans' ,
      castimg: '../actors/2.jpg' ,
      relatedMovies: ['../movies/5.jpg', '../movies/6.jpg', '../movies/9.jpg', '../movies/11.jpg', '../movies/13.jpg', '../movies/16.jpg', '../movies/19.jpg', '../movies/22.jpg']
    },
    {
      name: 'iron man',
      color: '#ff1e32',
      img: '../chars/chars/3.png',
      back: '3',
      castname: 'robert downey jr' ,
      castimg: '../actors/3.jpg' ,
      relatedMovies: ['../movies/1.jpg', '../movies/3.jpg', '../movies/6.jpg', '../movies/7.jpg', '../movies/13.jpg', '../movies/11.jpg', '../movies/16.jpg', '../movies/19.jpg', '../movies/22.jpg']
    },
    {
      name: 'thor',
      color: '#a50136',
      img: '../chars/chars/4.png',
      back: '4',
      castname: 'chris hemsworth' ,
      castimg: '../actors/4.jpg' ,
      relatedMovies: ['../movies/6.jpg', '../movies/4.jpg', '../movies/8.jpg', '../movies/11.jpg', '../movies/17.jpg', '../movies/19.jpg', '../movies/22.jpg']
    },
    {
      name: 'doctor strange',
      color: '#ff0a39',
      img: '../chars/chars/5.png',
      back: '5',
      castname: 'benedict cumberbatch' ,
      castimg: '../actors/5.jpg' ,
      relatedMovies: ['../movies/14.jpg', '../movies/17.jpg', '../movies/19.jpg', '../movies/27.jpg', '../movies/22.jpg']
    },
    {
      name: 'deadpool',
      color: '#891a26',
      img: '../chars/chars/25.png',
      back: '25',
      castname: 'ryan reynolds' ,
      castimg: '../actors/6.jpg' ,
      relatedMovies: ['../movies/34.jpg']
    },
    {
      name: 'loki',
      color: '#203915',
      img: '../chars/chars/24.png',
      back: '24',
      castname: 'tom hiddleston' ,
      castimg: '../actors/7.jpg' ,
      relatedMovies: ['../movies/6.jpg', '../movies/4.jpg', '../movies/8.jpg', '../movies/17.jpg', '../movies/19.jpg', '../movies/22.jpg']
    },
    {
      name: 'black widow',
      color: '#d9aa14',
      img: '../chars/chars/6.png',
      back: '6',
      castname: 'scarlett johansson' ,
      castimg: '../actors/8.jpg' ,
      relatedMovies: ['../movies/6.jpg', '../movies/3.jpg', '../movies/11.jpg', '../movies/9.jpg', '../movies/13.jpg', '../movies/19.jpg', '../movies/22.jpg', '../movies/24.jpg']
    },
    {
      name: 'star lord',
      color: '#bd4374',
      img: '../chars/chars/7.png',
      back: '7',
      castname: 'chris pratt' ,
      castimg: '../actors/9.jpg' ,
      relatedMovies: ['../movies/10.jpg', '../movies/15.jpg', '../movies/19.jpg', '../movies/22.jpg', '../movies/29.jpg', '../movies/31.jpg']
    },
    {
      name: 'hulk',
      color: '#0bc045',
      img: '../chars/chars/8.png',
      back: '8',
      castname: 'mark ruffalo' ,
      castimg: '../actors/10.jpg' ,
      relatedMovies: ['../movies/2.jpg', '../movies/6.jpg', '../movies/11.jpg', '../movies/17.jpg', '../movies/19.jpg', '../movies/22.jpg']
    },
    {
      name: 'spider man',
      color: '#e70338',
      img: '../chars/chars/9.png',
      back: '9',
      castname: 'tom holland' ,
      castimg: '../actors/11.jpg' ,
      relatedMovies: ['../movies/13.jpg', '../movies/16.jpg', '../movies/19.jpg', '../movies/22.jpg', '../movies/23.jpg', '../movies/27.jpg']
    },
    {
      name: 'black panther',
      color: '#6106e9',
      img: '../chars/chars/10.png',
      back: '10',
      castname: 'chadwick boseman' ,
      castimg: '../actors/12.jpg' ,
      relatedMovies: ['../movies/13.jpg', '../movies/18.jpg', '../movies/19.jpg', '../movies/22.jpg', '../movies/30.jpg']
    },
    {
      name: 'gamora',
      color: '#21c33c',
      img: '../chars/chars/11.png',
      back: '11',
      castname: 'zoe saldana' ,
      castimg: '../actors/13.jpg' ,
      relatedMovies: ['../movies/10.jpg', '../movies/15.jpg', '../movies/32.jpg', '../movies/22.jpg', '../movies/19.jpg']
    },
    {
      name: 'vision',
      color: '#fff324',
      img: '../chars/chars/12.png',
      back: '12',
      castname: 'paul bettany' ,
      castimg: '../actors/14.jpg' ,
      relatedMovies: ['../movies/11.jpg', '../movies/13.jpg', '../movies/19.jpg']
    },
    {
      name: 'shuri',
      color: '#3501b8',
      img: '../chars/chars/13.png',
      back: '13',
      castname: 'letitia wright' ,
      castimg: '../actors/15.jpg' ,
      relatedMovies: ['../movies/18.jpg', '../movies/19.jpg', '../movies/22.jpg']
    },
    {
      name: 'groot',
      color: '#0eff48',
      img: '../chars/chars/14.png',
      back: '14',
      castname: 'vin diesel' ,
      castimg: '../actors/16.jpg' ,
      relatedMovies: ['../movies/10.jpg', '../movies/15.jpg', '../movies/32.jpg', '../movies/22.jpg', '../movies/19.jpg']
    },
    {
      name: 'okoye',
      color: '#ff004b',
      img: '../chars/chars/15.png',
      back: '15',
      castname: 'danai gurira' ,
      castimg: '../actors/17.jpg' ,
      relatedMovies: ['../movies/18.jpg', '../movies/30.jpg', '../movies/19.jpg', '../movies/22.jpg']
    },
    {
      name: 'rocket',
      color: '#fec720',
      img: '../chars/chars/16.png',
      back: '16',
      castname: 'bradley cooper' ,
      castimg: '../actors/18.jpg' ,
      relatedMovies: ['../movies/10.jpg', '../movies/15.jpg', '../movies/19.jpg', '../movies/22.jpg', '../movies/32.jpg']
    },
    {
      name: 'falcon',
      color: '#d40235',
      img: '../chars/chars/17.png',
      back: '17',
      castname: 'anthony mackie' ,
      castimg: '../actors/19.jpg' ,
      relatedMovies: ['../movies/9.jpg', '../movies/12.jpg', '../movies/13.jpg', '../movies/19.jpg']
    },
    {
      name: 'wanda maximoff',
      color: '#ff3f23',
      img: '../chars/chars/18.png',
      back: '18',
      castname: 'elizabeth olsen' ,
      castimg: '../actors/20.jpg' ,
      relatedMovies: ['../movies/11.jpg', '../movies/13.jpg', '../movies/19.jpg', '../movies/22.jpg', '../movies/28.jpg']
    },
    {
      name: 'drax',
      color: '#15858f',
      img: '../chars/chars/19.png',
      back: '19',
      castname: 'dave bautista' ,
      castimg: '../actors/21.jpg' ,
      relatedMovies: ['../movies/10.jpg', '../movies/15.jpg', '../movies/19.jpg', '../movies/22.jpg', '../movies/32.jpg']
    },
    {
      name: 'nebula',
      color: '#043ffd',
      img: '../chars/chars/20.png',
      back: '20',
      castname: 'karen gillan' ,
      castimg: '../actors/22.jpg' ,
      relatedMovies: ['../movies/10.jpg', '../movies/15.jpg', '../movies/19.jpg', '../movies/22.jpg', '../movies/32.jpg']
    },
    {
      name: 'war machine',
      color: '#ffffff',
      img: '../chars/chars/21.png',
      back: '21',
      castname: 'don cheadle' ,
      castimg: '../actors/23.jpg' ,
      relatedMovies: ['../movies/1.jpg', '../movies/3.jpg', '../movies/7.jpg', '../movies/11.jpg', '../movies/19.jpg', '../movies/22.jpg']
    },
    {
      name: 'mantis',
      color: '#46de66',
      img: '../chars/chars/22.png',
      back: '22',
      castname: 'pom klementieff' ,
      castimg: '../actors/24.jpg' ,
      relatedMovies: ['../movies/15.jpg', '../movies/19.jpg', '../movies/22.jpg', '../movies/32.jpg']
    },
    {
      name: 'winter soldier',
      color: '#dfb42a',
      img: '../chars/chars/23.png',
      back: '23',
      castname: 'sebastian stan' ,
      castimg: '../actors/25.jpg' ,
      relatedMovies: ['../movies/5.jpg', '../movies/9.jpg', '../movies/13.jpg', '../movies/19.jpg', '../movies/22.jpg']
    }


  ];
  const charsContainer = document.querySelector('.chars');
  const card = document.querySelector('.card');
  const mainImage = card.querySelector('.main');
  const h1 = card.querySelector('.card-title');
  const castImg = card.querySelector('.castImg');
  const castName = card.querySelector('.castName');
  const span = card.querySelector('.span');
  // const span = card.querySelector('.span');
  const moviesContainer = card.querySelector('.movies');
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');

  characters.forEach((item, index) => {
    const charElement = document.createElement('div');
    charElement.className = 'char';
    charElement.style.setProperty('--color', item.color);
    charElement.style.backgroundImage = `url(../chars/backs/${item.back}.jpg)`;
    charElement.innerHTML = `<p>${item.name}</p>`;

    charElement.addEventListener('click', () => {
      showCharacter(item, charElement);
    });

    charsContainer.appendChild(charElement);
  });

  function showCharacter(item, charElement) {
    document.querySelectorAll('.char').forEach(char => char.classList.remove('active'));
    if (charElement) {
      charElement.classList.add('active');
    }

    h1.textContent = item.name;
    mainImage.src = item.img;
    mainImage.alt = item.name;
    castImg.src = item.castimg;
    castImg.style.setProperty('--color', item.color);
    castImg.alt = item.castimg;
    castName.textContent = item.castname;
    span.style.setProperty('--color', item.color);
    moviesContainer.innerHTML = '';

    item.relatedMovies.forEach(movie => {
      const img = document.createElement('img');
      img.src = movie;
      moviesContainer.appendChild(img);
    });

    card.style.setProperty('--color', item.color);
    card.classList.remove('animate');
    setTimeout(() => card.classList.add('animate'), 0);

    const arrows = document.querySelectorAll('.scroll .arrows');
    arrows.forEach(arrow => {
      arrow.style.backgroundColor = item.color;
    });
  }

  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const foundCharacter = characters.find(character => character.name.toLowerCase() === searchTerm);

    if (foundCharacter) {
      const charElements = document.querySelectorAll('.char');
      let matchedElement = null;

      charElements.forEach(charElement => {
        charElement.classList.remove('active');
        if (charElement.textContent.trim().toLowerCase() === searchTerm) {
          matchedElement = charElement;
        }
      });

      if (matchedElement) {
        showCharacter(foundCharacter, matchedElement);
        matchedElement.classList.add('active');


        if (window.innerWidth > 768) {
          charsContainer.scrollTo({
            top: matchedElement.offsetTop - charsContainer.offsetTop,
            behavior: 'smooth'
          });
        } else if (window.innerWidth < 768) {
          charsContainer.scrollTo({

            left: matchedElement.offsetLeft - charsContainer.offsetLeft,
            behavior: 'smooth'
          }
          )
        }
      }

    } else {
      alert('Character not found');
    }
  });
}

chars();


// ---------Arrows - Scroll-----------

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const charsContainer = document.querySelector(".chars");

if (charsContainer) {
  next.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      charsContainer.scrollTo({
        left: charsContainer.scrollLeft - charsContainer.firstElementChild.offsetWidth,
        behavior: "smooth"
      });
    } else {
      charsContainer.scrollTo({
        top: charsContainer.scrollTop - charsContainer.firstElementChild.offsetHeight,
        behavior: "smooth"
      });
    }
  });

  prev.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      charsContainer.scrollTo({
        left: charsContainer.scrollLeft + charsContainer.firstElementChild.offsetWidth,
        behavior: "smooth"
      });
    } else {
      charsContainer.scrollTo({
        top: charsContainer.scrollTop + charsContainer.firstElementChild.offsetHeight,
        behavior: "smooth"
      });
    }
  });
}
