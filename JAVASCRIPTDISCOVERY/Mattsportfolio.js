const width1= 2*window.innerWidth;
const increment=2;
let initialcircle1=100;
let initialcircle2=20;
let opacityspeed=0.001;
let opacitynum=1;
const circle1=document.getElementById('circle1');
const circle2=document.getElementById('circle2');


circle2.addEventListener('click',function(){
    for(let i=0;i<width1;i++){
        setTimeout(() => {
        initialcircle1+=increment;
        initialcircle2+=increment;
        opacitynum-=opacityspeed;
        circle2.style.width = initialcircle2 + "px";
        circle2.style.height = initialcircle2 + "px";
        circle2.style.opacity = opacitynum;
    }, i * 2);
    }
});