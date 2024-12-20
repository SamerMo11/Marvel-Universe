let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');

function togglemenu(){
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
}











const togglelightMode = () => {
    document.body.classList.toggle('light-mode');
  
    // تغيير أيقونة الزر بناءً على حالة الـ Light Mode
    const lightModeToggle = document.getElementById('lightModeToggle');
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('lightMode', 'enabled');
      lightModeToggle.classList.remove('fa-sun'); // إزالة كلاس الشمس
      lightModeToggle.classList.add('fa-moon'); // إضافة كلاس القمر
    } else {
      localStorage.setItem('lightMode', 'disabled');
      lightModeToggle.classList.remove('fa-moon'); // إزالة كلاس القمر
      lightModeToggle.classList.add('fa-sun'); // إضافة كلاس الشمس
    }
  };
  
  const loadlightMode = () => {
    const lightMode = localStorage.getItem('lightMode');
    const lightModeToggle = document.getElementById('lightModeToggle');
    
    if (lightMode === 'enabled') {
      document.body.classList.add('light-mode');
      lightModeToggle.classList.remove('fa-sun'); // في حالة Light Mode
      lightModeToggle.classList.add('fa-moon');
    } else {
      lightModeToggle.classList.remove('fa-moon'); // في حالة الوضع العادي
      lightModeToggle.classList.add('fa-sun');
    }
  };
  
  window.onload = () => {
    loadlightMode();
    document.getElementById('lightModeToggle').addEventListener('click', togglelightMode);
  };
  
// -------------------------------------
// -------------------------------------

// تحديد العناصر في الصفحة التي سيتم تغيير محتواها
const authLogin = document.getElementById("auth-login");
const authJoin = document.getElementById("auth-join");
const themeText = document.getElementById("theme-text");

const navItems = {
    home: document.getElementById("nav-home"),
    news: document.getElementById("nav-news"),
    comics: document.getElementById("nav-comics"),
    characters: document.getElementById("nav-characters"),
    movies: document.getElementById("nav-movies"),
    tvShows: document.getElementById("nav-tvshows"),
    games: document.getElementById("nav-games")
};

const welcomeTitle = document.getElementById("welcome-title");
const welcomeSubtitle = document.getElementById("welcome-subtitle");
const welcomeDescription = document.getElementById("welcome-description");
const viewCharactersButton = document.getElementById("view-characters-btn");
const aboutUsButton = document.getElementById("about-us-btn");
const aboutUsContent = document.getElementById("about-us-content");
const contactUs = document.getElementById("contact-us");

const links = {
    movies: document.getElementById("link-movies"),
    tvShows: document.getElementById("link-tvshows"),
    comics: document.getElementById("link-comics"),
    characters: document.getElementById("link-characters"),
    contact: document.getElementById("link-contact"),
    linkedin: document.getElementById("link-linkedin"),
    github: document.getElementById("link-github"),
    facebook: document.getElementById("link-facebook"),
    whatsapp: document.getElementById("link-whatsapp"),
    support: document.getElementById("link-support"),
    blog: document.getElementById("link-blog"),
    help: document.getElementById("link-help"),
    faq: document.getElementById("link-faq")
};

// اللغة الحالية
let currentLanguage = "en";

// تحميل النصوص من ملف JSON
async function loadLanguage(lang) {
    try {
        const response = await fetch(`${lang}.json`);
        const data = await response.json();

        // تحديث النصوص في الصفحة
        authLogin.textContent = data.auth.login;
        authJoin.textContent = data.auth.join;
        themeText.textContent = data.theme;

        for (const key in navItems) {
            if (navItems[key]) navItems[key].textContent = data.navigation[key];
        }

        welcomeTitle.textContent = data.welcome.title;
        welcomeSubtitle.textContent = data.welcome.subtitle;
        welcomeDescription.textContent = data.welcome.description;

        viewCharactersButton.textContent = data.buttons.viewCharacters;
        aboutUsButton.textContent = data.buttons.aboutUs;

        aboutUsContent.textContent = data.aboutUs.content;
        contactUs.textContent = data.contactUs;

        for (const key in links) {
            if (links[key]) links[key].textContent = data.links[key];
        }

        // تغيير اتجاه النص إذا كانت اللغة العربية
        document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
    } catch (error) {
        console.error("Error loading language file:", error);
    }
}

// تبديل اللغة عند الضغط على الزر
document.getElementById("language-switch").addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";
    loadLanguage(currentLanguage);
});

// تحميل اللغة الافتراضية عند فتح الصفحة
loadLanguage(currentLanguage);

























// ------------------
// ------------------

// window.addEventListener('scroll',reveal);

// function reveal(){
//   var reveals = document.querySelectorAll('.reveal');

//   for(var i = 0; i < reveals.length ; i++){

//     let windowheight = window.innerHeight;
//     let revealtop = reveals[i].getBoundingClientRect().top;
//     let revealpoint = 50;

//     if(revealtop < windowheight - revealpoint){
//       reveals[i].classList.add('active');
//     }
//     else{
//       reveals[i].classList.remove('active');
//     }
//   }
// }


// window.addEventListener('scroll',reveal2);

// function reveal2(){
//   var reveals = document.querySelectorAll('.reveal2');

//   for(var i = 0; i < reveals.length ; i++){

//     let windowheight = window.innerHeight;
//     let revealtop = reveals[i].getBoundingClientRect().top;
//     let revealpoint = 400;

//     if(revealtop < windowheight - revealpoint){
//       reveals[i].classList.add('active');
//     }
//     else{
//       reveals[i].classList.remove('active');
//     }
//   }
// }


// ----------------









