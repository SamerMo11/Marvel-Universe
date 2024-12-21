let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');

function togglemenu(){
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
}











const togglelightMode = () => {
  document.body.classList.toggle('light-mode');

  // تغيير أيقونة الزر بناءً على حالة الـ Light Mode
  const toggles = document.querySelectorAll('.lightModeToggle');
  toggles.forEach((toggle) => {
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('lightMode', 'enabled');
      toggle.classList.remove('fa-sun'); // إزالة كلاس الشمس
      toggle.classList.add('fa-moon'); // إضافة كلاس القمر
    } else {
      localStorage.setItem('lightMode', 'disabled');
      toggle.classList.remove('fa-moon'); // إزالة كلاس القمر
      toggle.classList.add('fa-sun'); // إضافة كلاس الشمس
    }
  });
};

const loadlightMode = () => {
  const lightMode = localStorage.getItem('lightMode');
  const toggles = document.querySelectorAll('.lightModeToggle');

  toggles.forEach((toggle) => {
    if (lightMode === 'enabled') {
      document.body.classList.add('light-mode');
      toggle.classList.remove('fa-sun'); // في حالة Light Mode
      toggle.classList.add('fa-moon');
    } else {
      toggle.classList.remove('fa-moon'); // في حالة الوضع العادي
      toggle.classList.add('fa-sun');
    }
  });
};

window.onload = () => {
  loadlightMode();

  // إضافة الحدث لجميع العناصر ذات الكلاس lightModeToggle
  document.querySelectorAll('.lightModeToggle').forEach((element) => {
    element.addEventListener('click', togglelightMode);
  });
};


  
// -------------------------------------
// -------------------------------------
const tab = document.querySelector(".tab");
const links = document.querySelector(".links");
const navicons = document.querySelectorAll(".navicons");
tab.addEventListener("click", () => {
  tab.classList.toggle("active");
  // التحكم في الـ links
  if (links.classList.contains("show")) {
    links.classList.remove("show");
    links.classList.add("hide");
  } else {
    links.classList.remove("hide");
    links.classList.add("show");
  }
  // التحكم في جميع عناصر navicons
  navicons.forEach((icon) => {
    if (icon.classList.contains("show")) {
      icon.classList.remove("show");
      icon.classList.add("hide");
    } else {
      icon.classList.remove("hide");
      icon.classList.add("show");
    }
  });
});



















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









