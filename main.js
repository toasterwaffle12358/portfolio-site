window.onscroll = function() {scrollFunction()};


let topbarelements = document.querySelectorAll('.topbarelement');
let topbar = document.getElementById("topbar");
let navbarmenubutton = document.getElementById("navbarmenubutton");
let navbarmenuicon = document.getElementById("navbarmenuicon");
let topbarcontainer = document.getElementById("topbarcontainer");
let menubuttonisclicked = false;
let topbaropenandscrolled = false;


function clickHandler(){
    if (menubuttonisclicked == true) {
        topbar.classList.add('topbarscrolled');
        navbarmenubutton.classList.add('topbarscrolled');
        navbarmenuicon.classList.add('topbarscrolled');
        topbarcontainer.classList.add('topbarscrolled');
        menubuttonisclicked = false;
        topbaropenandscrolled = false;
    } else {
        menubuttonisclicked = true;
        topbar.classList.remove('topbarscrolled');
        //navbarmenubutton.classList.remove('topbarscrolled');
        //navbarmenuicon.classList.remove('topbarscrolled');
        topbarcontainer.classList.remove('topbarscrolled');
        topbaropenandscrolled = true;
    }
}

navbarmenubutton.addEventListener('click', clickHandler);

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        for (let elem of topbarelements) {
            //not at top of page
            //elem.classList.add('topbarscrolled');
            //elem.classList.remove('topbarattop');
            if (topbaropenandscrolled == false) {
                topbar.classList.add('topbarscrolled');
                navbarmenubutton.classList.add('topbarscrolled');
                navbarmenuicon.classList.add('topbarscrolled');
                topbarcontainer.classList.add('topbarscrolled');
            }
        }
    } else {
        for (let elem of topbarelements) {
            //at top of page
            //elem.classList.remove('topbarscrolled');
            //elem.classList.add('topbarattop');
            topbar.classList.remove('topbarscrolled');
            navbarmenubutton.classList.remove('topbarscrolled');
            navbarmenuicon.classList.remove('topbarscrolled');
            topbarcontainer.classList.remove('topbarscrolled');
            topbaropenandscrolled = false;
            
        }
    }
    
} 

