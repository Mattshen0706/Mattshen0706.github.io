let number=10;
let nah=false;
let name = "matt";
let age = 20;
let coding =true;
speed=2;
speed2=1;
positionX=0;
positionY=0;

document.getElementById("practice").innerHTML = "HELLO, my name is" + name + " I am " + age + " years old"

// var myVariable = "Hello, world!";
// document.getElementById("output").textContent = myVariable;

// const button = document.getElementById("alertButton");
button.addEventListener('click',function(){
    alert("BUTTON CLICKED");
});


const annimationbutton = document.getElementById("annimationbutton");
const bluedot = document.getElementById("bluedot");

// annimationbutton.addEventListener('mouseenter',function(){
//     bluedot.classList.add('annimate');
// });



// element.addEventListener('mouseleave', function() {
//     bluedot.classList.remove('annimate2');
//   });



annimationbutton.addEventListener('mouseover',function(){
    for(let i=0;i<window.innerWidth;i++){
        positionX+=speed;
        positionY+=speed;
        bluedot.style.left = positionX +'px';
        bluedot.style.top = positionY +'px';
    }
});

annimationbutton.addEventListener('mouseout',function(){

        for(let i=0;i<window.innerWidth;i++){
        positionX-=speed;
        positionY-=speed;
        bluedot.style.left = positionX +'px';
        bluedot.style.top = positionY +'px';
    }
});