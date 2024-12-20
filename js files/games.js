function games() {
    const name = ['marvel\'s spider -man 2', 'marvel\'s midnight suns', 'marvel snap', 'guardians of the galaxy', 'marvel future revolution', 'marvel x fortnite', 'spider-man: miles morales', 'marvel\'s avengers', 'marvel\'s iron man vr', 'LEGO® marvel collection','marvel ultimate alliance 3','marvel\'s spider-man','marvel powers united vr','contest of champions','marvel future fight','marvel strike force','narvel puzzle quest','marvel VS capcom','marvel\'s the tellrale series','marvel pinball'];
    const imgs = ['20','19', '18', '17', '16', '15', '14', '13', '12', '11', '10','9','8','7','6','5','4','3','2','1',];
    const animation = ["slideleft","slidebottom","slidebottom","slideright","slideleft","slidebottom","slidebottom","slideright","slideleft","slidebottom","slidebottom","slideright","slideleft","slidebottom","slidebottom","slideright","slideleft","slidebottom","slidebottom","slideright"];

    const cards = [];

    for (let i = 0; i < name.length; i++) {
        cards.push({
            img: imgs[i], 
            name: name[i],
            animation: animation[i]
        });
    }
    const content = document.querySelector('.content');
    let contentHTML = ''; 
    cards.forEach(item => {
        contentHTML += `
                <div class="game" style="animation-name: ${item.animation} ;">
                    <div class="game-img">
                        <img src="../games/${item.img}.jpg" alt="game image" loading="lazy">
                    </div>
                    <p class="name card-title">${item.name}</p>
                </div>
        `;
    });
    content.innerHTML = contentHTML;
}

games();


// ------------------

document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const allgames = document.querySelectorAll('.game');
  
    allgames.forEach(card => {
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