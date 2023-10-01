let btn = document.getElementsByClassName('info-btn');
let back = document.getElementsByClassName('back-btn');
let info = document.getElementsByClassName('char-card');
let img = document.getElementsByClassName('char-img');
let para = document.getElementsByClassName('info-p');
let charre = document.getElementsByClassName('char-re');
let charinfohead = document.getElementsByClassName('char-info-head');

for(let i=0 ; i<btn.length; i++){
    btn[i].onclick=function () {
        btn[i].style.display = 'none';
        back[i].style.display = 'block';
        info[i].style.width = 'calc(100% / 2 )';
        info[i].style.height = '500px';
        img[i].style.width= '25%';
        img[i].style.height= '30%';
        img[i].style.position= 'absolute';
        img[i].style.left= '0px';
        img[i].style.top= '10%';
        para[i].style.display= 'block';   
        charre[i].style.display= 'flex';   
        charinfohead[i].style.display= 'block';   
    }
}


for(let j=0 ; j<back.length; j++){
    back[j].onclick = function(){
        info[j].style.width = 'calc(100% / 6 )';
        info[j].style.height = '400px';
        img[j].style.width= '100%';
        img[j].style.top= '0';
        img[j].style.height= '50%';
        btn[j].style.display = 'block';
        back[j].style.display = 'none';
        para[j].style.display = 'none';
        charre[j].style.display= 'none';   
        charinfohead[j].style.display= 'none';   

}
}


// btn.onclick = function(){

// document.querySelector(".char-card").classList.add(".char-card-more");
// document.querySelector(".char-img").classList.add(".char-img-more");
// document.querySelector(".char-re").classList.add(".char-re-more");
// document.querySelector(".char-info").classList.add(".char-info-more");
// }


