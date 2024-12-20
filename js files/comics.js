function shows(startIndex = 0, count = 24) {
    const name = [
        'infinity gauntlet #1', 'infinity #1', 'amazing fantasy #15', 'civil war #1', 'infinity war #1',
        'darth vader #1', 'secret empire #1', 'civil war II', 'black panther #1', 'avengers #1',
        'thanos #1', 'deadpool #1', 'secret wars #1', 'ultimate spider-man #1', 'x-men: gold #1',
        'old man logan #25', 'astonishing x-men #1', 'spider-man #1', 'All-New Guardians of the Galaxy #1', 
        'the amazing spider-man #1', 'weapon x #1', 'Peter Parker: The Spectacular Spider-Man #1', 'x-men blue #1', 
        'captain america: steve rogers #16', 'deadpool kills the marvel universe again #1', 'chasm: curse of kaine #1', 
        'hellverine #2', 'venomverse reborn #3', 'marvel avengers alliance #4', 'spider man 2', 'dr doom', 
        'venom war carnage', 'the incredible hulk', 'deadpool team up', 'spider man 2099', 'aliens vs avengers', 
        'marvel 85th anniversary', 'x force', 'venom separation anxiety', 'venom war zombiotes', 'future fight', 
        'fantastic 4', 'spider man vs venom', 'the amazing spider man', 'the avengers', 'venom war:venomous', 
        'wolverine: revenge', 'get fury'
    ];
    const date = [
        '1991', '2013', '1962', '2006', '1992', '2017', '2017', '2016', '2016', '2012', 
        '2016', '2015', '2015', '2000', '2017', '2016', '2017', '2016', '2017', '1963', 
        '2017', '2017', '2017', '2016', '2017', '2024', '2024', '2024', '2016', '2016', 
        '2016', '2016', '2016', '2016', '2016', '2016', '2016', '2016', '2016', '2016', 
        '2016', '2016', '2016', '2016', '2016', '2024', '2024', '2024'
    ];
    const animation = [
        'slideleft','slidebottom','slidebottom','slideright', 
        'slideleft','slidebottom','slidebottom','slideright', 
        'slideleft','slidebottom','slidebottom','slideright', 
        'slideleft','slidebottom','slidebottom','slideright', 
        'slideleft','slidebottom','slidebottom','slideright', 
        'slideleft','slidebottom','slidebottom','slideright', 
        'slideleft','slidebottom','slidebottom','slideright', 
        'slideleft','slidebottom','slidebottom','slideright', 
        'slideleft','slidebottom','slidebottom','slideright', 
        'slideleft','slidebottom','slidebottom','slideright', 
        'slideleft','slidebottom','slidebottom','slideright', 
        'slideleft','slidebottom','slidebottom','slideright', 
        // 'slideleft','slideright',
    ];

    const content = document.querySelector('.content');
    for (let i = startIndex; i < startIndex + count && i < name.length; i++) {
        // const comic = document.createElement('div');
        // comic.className = 'comic card';
        content.innerHTML += `
           <div class="comic card" style="animation-name: ${animation[i]};">
            <img class="comicimage card-img"  src="../comics/${i + 1}.jpg" alt="comic" loading="lazy">
            <div class="comic-info">
                <p class="card-title">${name[i]}</p>
                <p class="info" style="display: none;"></p>
                <p class="date">${date[i]}</p>
                <button class="read-more-btn" id="readMore">view details</button>

            </div>
           </div>
        `;
        // content.appendChild(comic);
    }

    
    if (startIndex + count >= name.length) {
        loadMoreButton.style.display = 'none';
    }
    readmore();
}

let currentIndex = 0;
const loadMoreButton = document.getElementById('load-more');

loadMoreButton.addEventListener('click', () => {
    currentIndex += 24;
    shows(currentIndex);
});


function readmore() {
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.comic');
            const name = card.querySelector('.card-title').textContent;
            const movieImg = card.querySelector('.comicimage').src;
            const description = card.querySelector('.info').textContent;
            const date = card.querySelector('.date').textContent;
    
            document.getElementById('detail-name').textContent = name;
            document.getElementById('detail-img').src = movieImg;
            document.getElementById('detail-description').textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt non accusantium similique, distinctio dolore dolor illo soluta voluptates vitae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt non';
            document.getElementById('detail-date').textContent = 'release date : ' + date;
    
            const cardDetails = document.getElementById('card-details');
            cardDetails.style.display = 'flex';
            setTimeout(() => {
                cardDetails.classList.add('show');
                cardDetails.classList.remove('hide');
            }, 10);
        });
    });
}











function hideDetails() {
    const cardDetails = document.getElementById('card-details');
    cardDetails.classList.add('hide');
    cardDetails.classList.remove('show');
    
    setTimeout(() => {
        cardDetails.style.display = 'none';
    }, 1000);
}


shows();



document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll('.comic');
  
    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        card.classList.remove('hide'); 
        card.classList.add('show'); 
    } else {
        card.classList.add('hide'); 
        card.classList.remove('show'); 
      }
    });
  });
  


// -------------------------


