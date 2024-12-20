// function movies() {
//     const name = [
//         'avengers secret wars', 'avengers doomsday', 'blade', 'fantastic four', 'thunderbolts',
//         'captain america: brave new world', 'deadpool & wolverine', 'the marvels', 'guardians of the galaxy vol.3',
//         'ant-man the wasp quantumania', 'Black Panther Wakanda Forever', 'Thor LoveAnd Thunder',
//         'Doctor Strange in the Multiverse of Madness', 'Spider-Man No Way Home', 'Eternals', 'Shang-Chi',
//         'Black Widow', 'Spider-Man Far From Home', 'Avengers End Game', 'Captain Marvel',
//         'Ant-Man and The Wasp', 'Avengers: Infinity War', 'Black Panther', 'Thor: Ragnarok',
//         'Spider-Man Home Coming', 'Guardians of The Galaxy Vol.2', 'Doctor Strange', 'Captain America: Civil War',
//         'Ant-Man', 'Avengers: Age of Ultron', 'Guardians of The Galaxy', 'Captain America: The Winter Soldier',
//         'Thor: The Dark World', 'Iron Man 3', 'The Avengers', 'Captain America: The First Avenger',
//         'Thor', 'Iron Man 2', 'The Incredible Hulk', 'Iron Man'
//     ];

//     const date = [
//         '2027','2026','2025','2025','2025','2025','2024','2023','2023','2023','2022','2022','2022','2021','2021','2021','2021',
//         '2019','2019','2019','2018','2018','2017','2017','2017','2016','2016','2015','2015','2014','2014',
//         '2013','2013','2012','2011','2011','2010','2008','2008'
//     ];

//     const rate =[
//         'not published','not published','not published','not published','not published','not published',
//         '8.0','5.5','7.9','6','6.7','6.2','6.9','8.2','6.3','7.4','6.6','7.4','8.4','6.8','7.0','8.4','7.3','7.9',
//         '7.4','7.6','7.5','7.8','7.2','7.3','8.0','7.7','6.7','7.1','8.0','6.9','7.0','6.9','6.6','7.9'
//     ]

//     const carddata = [];

//     for (let i = 0; i < name.length; i++) {
//         carddata.push({
//             img: name.length - i,
//             name: name[i],
//             date: date[i],
//             rate: rate[i]
//         });
//     }

//     const content = document.querySelector('.content');

//     for (let i = 0; i < carddata.length; i++) {
//         const movie = document.createElement('div');
//         movie.className = 'cards show';
//         movie.innerHTML = `
//             <div class="poster">
//                 <img class="movieImg" src="../movies/${carddata[i].img}.jpg" loading="lazy">
//             </div>
//             <div class="details">
//                 <p class="card-title">${carddata[i].name}</p>

//                     <p class="date" style="display: none;">${carddata[i].date}</p>
//                 <p class="info" style="display: none;"></p>
//                 <p class="rate" style="display: none;">${carddata[i].rate} </p>
//                 <button class="read-more-btn" id="readMore">view details</button>
//             </div>
//         `;
//         content.appendChislidebottomld(movie);
//     }

//     readmore();

// }

function movies(){
    const movieData = [
        {
            name: "avengers secret wars",
            date: "2027",
            rate: "not published",
            img: "40",
            animation: "slideleft"
        },
        {
            name: "avengers doomsday",
            date: "2026",
            rate: "not published",
            img: "39",
            animation: "slidebottom"
        },
        { 
            name: "blade",
            date: "2025",
            rate: "not published",
            img: "38",
            animation: "slidebottom"
        },
        { 
            name: "fantastic four",
            date: "2025",
            rate: "not published",
            img: "37", 
            animation: "slideright"
        },
        { 
            name: "thunderbolts",
            date: "2025",
            rate: "not published",
            img: "36", 
            animation: "slideleft"
        },
        {
            name: "captain america: brave new world",
            date: "2025",
            rate: "not published",
            img: "35",
            animation: "slidebottom"
        },
        { 
            name: "deadpool & wolverine",
            date: "2024", 
            rate: "8.0", 
            img: "34",
            animation: "slidebottom"
        },
        {
            name: "the marvels",
            date: "2023",
            rate: "5.5",
            img: "33",
            animation: "slideright"
        },
        {
            name: "guardians of the galaxy vol.3",
            date: "2023",
            rate: "7.9",
            img: "32",
            animation: "slideleft"
        },
        {
            name: "ant-man the wasp quantumania",
            date: "2023",
            rate: "6",
            img: "31",
            animation: "slidebottom"
        },

        {
            name: "Black Panther Wakanda Forever",
            date: "2022",
            rate: "6.7",
            img: "30",
            animation: "slidebottom"
        },
        {
            name: "Thor LoveAnd Thunder",
            date: "2022",
            rate: "6.2",
            img: "29",
            animation: "slideright"
        },
        {
            name: "Doctor Strange in the Multiverse of Madness",
            date: "2022",
            rate: "6.9",
            img: "28",
            animation: "slideleft"
        },
        {
            name: "Spider-Man No Way Home",
            date: "2021",
            rate: "8.2",
            img: "27",
            animation: "slidebottom"
        },
        {
            name: "Eternals",
            date: "2021",
            rate: "6.3",
            img: "26",
            animation: "slidebottom"
        },
        {
            name: "Shang-Chi",
            date: "2021",
            rate: "7.4",
            img: "25",
            animation: "slideright"
        },
        {
            name: "Black Widow",
            date: "2021",
            rate: "6.6",
            img: "24",
            animation: "slideleft"
        },
        {
            name: "Spider-Man Far From Home",
            date: "2019",
            rate: "7.4",
            img: "23",
            animation: "slidebottom"
        },
        {
            name: "Avengers End Game",
            date: "2019",
            rate: "8.4",
            img: "22",
            animation: "slidebottom"
        },
        {
            name: "Captain Marvel",
            date: "2019",
            rate: "6.8",
            img: "21",
            animation: "slideright"
        },
        {
            name: "Ant-Man and The Wasp",
            date: "2018",
            rate: "7.0",
            img: "20",
            animation: "slideleft"
        },
        {
            name: "Avengers: Infinity War",
            date: "2018",
            rate: "8.4",
            img: "19",
            animation: "slidebottom"
        },
        {
            name: "Black Panther",
            date: "2017",
            rate: "7.3",
            img: "18",
            animation: "slidebottom"
        },
        {
            name: "Thor: Ragnarok",
            date: "2017",
            rate: "7.9",
            img: "17",
            animation: "slideright"
        },
        {
            name: "Spider-Man Home Coming",
            date: "2017",
            rate: "7.4",
            img: "16",
            animation: "slideleft"
        },
        {
            name: "Guardians of The Galaxy Vol.2",
            date: "2017",
            rate: "7.6",
            img: "15",
            animation: "slidebottom"
        },
        {
            name: "Doctor Strange",
            date: "2016",
            rate: "7.5",
            img: "14",
            animation: "slidebottom"
        },
        {
            name: "Captain America: Civil War",
            date: "2016",
            rate: "7.8",
            img: "13",
            animation: "slideright"
        },
        {
            name: "Ant-Man",
            date: "2015",
            rate: "7.2",
            img: "12",
            animation: "slideleft"
        },
        {
            name: "Avengers: Age of Ultron",
            date: "2015",
            rate: "7.3",
            img: "11",
            animation: "slidebottom"
        },
        {
            name: "Guardians of The Galaxy",
            date: "2014",
            rate: "8.0",
            img: "10",
            animation: "slidebottom"
        },
        {
            name: "Captain America: The Winter Soldier",
            date: "2014",
            rate: "7.7",
            img: "9",
            animation: "slideright"
        },
        {
            name: "Thor: The Dark World",
            date: "2013",
            rate: "6.7",
            img: "8",
            animation: "slideleft"
        },
        {
            name: "Iron Man 3",
            date: "2013",
            rate: "7.1",
            img: "7",
            animation: "slidebottom"
        },
        {
            name: "The Avengers",
            date: "2012",
            rate: "8.0",
            img: "6",
            animation: "slidebottom"
        },
        {
            name: "Captain America: The First Avenger",
            date: "2011",
            rate: "6.9",
            img: "5",
            animation: "slideright"
        },
        {
            name: "Thor",
            date: "2011",
            rate: "7.0",
            img: "4",
            animation: "slideleft"
        },

        {
            name: "Iron Man 2",
            date: "2010",
            rate: "6.9",
            img: "3",
            animation: "slidebottom"
        },
        {
            name: "The Incredible Hulk",
            date: "2008",
            rate: "6.6",
            img: "2",
            animation: "slidebottom"
        },
        {
            name: "Iron Man",
            date: "2008",
            rate: "7.9",
            img: "1",
            animation: "slideright"
        },
    ];

    const content = document.querySelector(".content");

    movieData.forEach((movie) => {
        // const movieCard = document.createElement("div");
        // movieCard.className = "cards show";
        content.innerHTML += `
            <div class="cards show" style="animation-name: ${movie.animation} ;">
            <div class="poster">
                <img class="movieImg" src="../movies/${movie.img}.jpg" loading="lazy" alt="movieimg">
            </div>
            <div class="details">
                <p class="card-title">${movie.name}</p>
                <p class="date" style="display: none;">${movie.date}</p>
                <p class="info" style="display: none;"></p>
                <p class="rate" style="display: none;"><span>${movie.rate}</span></p>
                <button class="read-more-btn" id="readMore">view details</button>
            </div>
            </div>
        `;
        // content.appendChild(movieCard);
    });

    readmore();
}

function readmore() {
    document.querySelectorAll(".read-more-btn").forEach((button) => {
        button.addEventListener("click", function () {
            const card = this.closest(".cards");
            const name = card.querySelector(".card-title").textContent;
            const movieImg = card.querySelector("img").src;
            const date = card.querySelector(".date").textContent;
            const rate = card.querySelector(".rate").textContent;

            document.getElementById("detail-name").textContent = name;
            document.getElementById("detail-img").src = movieImg;
            document.getElementById("detail-description").textContent =
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt non accusantium similique, distinctio dolore dolor illo soluta voluptates vitae? Lorem, ipsum dolor sit amet.";
            document.getElementById("detail-date").textContent =
                `realease date : ${date}`;
            document.getElementById("detail-rate").textContent = `rate :  ${rate} / 10`;

            const cardDetails = document.getElementById("card-details");
            cardDetails.style.display = "flex";
            setTimeout(() => {
                cardDetails.classList.add("show");
                cardDetails.classList.remove("hide");
            }, 10);
        });
    });
}

function hideDetails() {
    const cardDetails = document.getElementById("card-details");
    cardDetails.classList.add("hide");
    cardDetails.classList.remove("show");

    setTimeout(() => {
        cardDetails.style.display = "none";
    }, 1000);
}

movies();

document.getElementById("search").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const movies = document.querySelectorAll(".cards");

    movies.forEach((card) => {
        const title = card.querySelector(".card-title").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.classList.remove("hide");
            card.classList.add("show");
        } else {
            card.classList.add("hide");
            card.classList.remove("show");
        }
    });
});
