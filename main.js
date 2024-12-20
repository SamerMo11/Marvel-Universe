let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');

function togglemenu(){
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
}



// let moon = document.getElementById('moon');
// let sun = document.getElementById('sun');

// moon.addEventListener('click', function(){

//     document.body.classList.remove('light');
//     // document.body.style.background=' #000000e3';
//     this.style.display='none';
//     sun.style.display='block';

// })

// sun.addEventListener('click', function(){

//     document.body.classList.add('light');
//     // document.body.style.background=' #e2e4e7';

//     this.style.display='none';
//     moon.style.display='block';
// })










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









