let Layer1 = document.getElementById('Layer1');
let Layer2 = document.getElementById('Layer2');
let Layer3 = document.getElementById('Layer3');
let Layer4 = document.getElementById('Layer4');
let Layer5 = document.getElementById('Layer5');
let Layer6 = document.getElementById('Layer6');
let CloudsRight = document.getElementById('CloudsRight');
let CloudsLeft = document.getElementById('CloudsLeft');
let Layer7 = document.getElementById('Layer7');
let title = document.getElementById('title');
let ShootingStar = document.getElementById('ShootingStar');
let Stars = document.getElementById('Stars');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    title.style.transform = 'translate(-' + value * 3 + 'px,'+ value * 0.3 + 'px)';
    Layer2.style.transform = 'translateY(' + value * 0.05 + 'px)';
    Layer3.style.transform = 'translateY(' + value * 0.1 + 'px)';
    Layer4.style.transform = 'translateY(' + value * 0.15 + 'px)';
    Layer5.style.transform = 'translateY(' + value * 0.25 + 'px)';
    Layer6.style.transform = 'translateY(' + value * 0.3 + 'px)';
    Layer7.style.transform = 'translateY(' + value * 0.4 + 'px)';
    Stars.style.transform = 'translate(-' + value * 0.1 + 'px,'+ value * 0.5 + 'px)';
    ShootingStar.style.transform = 'translate(' + value * 1 + 'px,'+ value * 0.9 + 'px)';
    CloudsRight.style.transform = 'translate(' + value * 0.35 + 'px,'+ value * 0.35 + 'px)';
    CloudsLeft.style.transform = 'translate(' + value * 0.35 + 'px,'+ value * 0.35 + 'px)';
})

