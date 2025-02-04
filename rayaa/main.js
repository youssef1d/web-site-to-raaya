let header = document.getElementById('header');


window.onscroll = function ev(){ 
    if(scrollY >=40){
        header.style.height='60px';
        header.style.transition='0.3s';
        header.style.backgroundColor='#14213dff';
        header.style.boxShadow=' 2px 2px 10px white';
        // header.style.backgroundColor='#ffffffff';

    }
    else if (scrollY<= 40){
        // header.style.height='100px';
        header.style.background='none';
        header.style.boxShadow='none';

    }
}