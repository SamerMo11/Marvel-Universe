let arr = document.getElementById('arrow');

window.onscroll = function(){
    if(scrollY >= 760)
    {
        arr.style.display ='block';
    }else{
        arr.style.display ='none';
    }
}