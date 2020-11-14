
/* Adding java script for the burger menu */


const burgBox = document.querySelector('.burger-box');

let menuClk = false;



burgBox.addEventListener('click',() => {
    if(!menuClk){
        burgBox.classList.add('open');
        document.getElementById('nav-menu').style.display='inherit';
        document.body.style.overflowY="hidden";
        menuClk = true;
        
    }else {
         burgBox.classList.remove('open');
         document.getElementById('nav-menu').style.display='none';
        document.body.style.overflowY="visible";
         
         
        menuClk = false;
    }
    
});

/* ---------Javascript for burger menu ended ----------*/

