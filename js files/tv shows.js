function shows() {
    const showsData = [
        {animation:"slideleft", name: 'daredevil: born again', date: '2025', img: 20 },
        {animation:"slidebottom", name: 'agatha all along', date: '2024', img: 19 },
        {animation:"slidebottom", name: 'x-men 97', date: '2024', img: 18 },
        {animation:"slideright", name: 'echo', date: '2024', img: 17 },
        {animation:"slideleft", name: 'what if s2', date: '2023', img: 16 },
        {animation:"slidebottom", name: 'loki s2', date: '2023', img: 15 },
        {animation:"slidebottom", name: 'i am groot s2', date: '2023', img: 14 },
        {animation:"slideright", name: 'secret invasion', date: '2023', img: 13 },
        {animation:"slideleft", name: 'TGOTG holiday', date: '2022', img: 12 },
        {animation:"slidebottom", name: 'werewolf by night', date: '2022', img: 11 },
        {animation:"slidebottom", name: 'she hulk', date: '2022', img: 10 },
        {animation:"slideright", name: 'i am groot s1', date: '2022', img: 9 },
        {animation:"slideleft", name: 'ms marvel', date: '2022', img: 8 },
        {animation:"slidebottom", name: 'moon knight', date: '2022', img: 7 },
        {animation:"slidebottom", name: 'hawkeye', date: '2021', img: 6 },
        {animation:"slideright", name: 'what if s1', date: '2021', img: 5 },
        {animation:"slideleft", name: 'loki s1', date: '2021', img: 4 },
        {animation:"slidebottom", name: 'the falcon and winter soldier', date: '2021', img: 3 },
        {animation:"slidebottom", name: 'wanda vision', date: '2021', img: 2 },
        {animation:"slideright", name: 'marvel legends', date: '2021', img: 1 }
    ];

    const series = document.querySelector('.series');

    showsData.forEach(show => {
        // const serie = document.createElement('div');
        // serie.className = 'serie';
        series.innerHTML += `
            <div class="serie" style="animation-name: ${show.animation} ;">
            <div class="face front">
                <img class="tvimage" src="../tv shows/${show.img}.jpg" alt="tv show image" loading="lazy">
            </div>
            <div class="face back">
                <div class="infos">
                    <p class="card-title">${show.name}</p>
                    <p class="info" style="display: none;"></p>
                    <p class="date">${show.date}</p>
                    <button class="read-more-btn" id="readMore">view details</button>
                </div>
            </div>
            </div>
        `;
        // series.appendChild(serie);
    });

    readmore();
}



function readmore() {
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.serie');
            const name = card.querySelector('.card-title').textContent;
            const movieImg = card.querySelector('.tvimage').src;
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
    const tvshow = document.querySelectorAll('.serie');
  
    tvshow.forEach(card => {
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