function news(){
    const name = ['movies','comics','tv shows','games','digital series','culture & lifestyle','podcasts'];
    const carddata = [];
    for (let i = 1; i <= name.length; i++) {
      carddata.push({
        img: [i],
        name: name[i-1]
      });
    }
    const content = document.querySelector('.content');
    carddata.forEach(item => {
        let subHTML = '';
        for (let i = 1; i <= 6; i++) {
            subHTML += `
                <div class="sub">
                    <img src="../news/sub/${item.name}/${i}.jpg" alt="img" loading="lazy">
                    <p class="head">${item.name}</p>
                    <p class="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ducimus.</p>
                </div>
            `;
        }
        content.innerHTML += `
        <a href="#" class="reveal">
        <span>
            <img src="../news/banner/${item.img}.jpg" alt="img" loading="lazy">
        </span>
        <p>marvel ${item.name}</p>
    </a>
    <div class="cat">
        <p class="title">latest ${item.name} news</p>
        <div class="main">
            <img src="../news/main/${item.img}.jpg" alt="img" loading="lazy">
            <div class="info">
                <p>${item.name}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ducimus.</p>
            </div>
        </div>
                <div class="subs reveal">
                <i class="fa-solid fa-arrow-left prev"></i>
                <div class="subsContent track">
                ${subHTML}
                </div>
                <i class="fa-solid fa-arrow-right next"></i>
                </div>
    </div>
        `;
    });
}

news();
function sub() {
    let subHTML = '';
    for (let i = 1; i <= 6; i++) {
        subHTML += `
            <div class="sub ">
                <img src="../news/sub/${item.name}/${i}.jpg" alt="img" loading="lazy">
                <p class="head">${item.name}</p>
                <p class="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ducimus.</p>
            </div>
        `;
    }
    return subHTML;
}
// ----------Arrows-Scroll------------
const tracks = document.querySelectorAll(".track");
const nextButtons = document.querySelectorAll(".next");
const prevButtons = document.querySelectorAll(".prev");

tracks.forEach((track, index) => {
  const next = nextButtons[index];
  const prev = prevButtons[index];
  if (track && next && prev) {
    next.addEventListener("click", () => {
      track.scrollTo({
        left: track.scrollLeft + track.firstElementChild.offsetWidth,
        behavior: 'smooth'
      });
    });
    prev.addEventListener("click", () => {
      track.scrollTo({
        left: track.scrollLeft - track.firstElementChild.offsetWidth,
        behavior: 'smooth'
      });
    });
  }
});