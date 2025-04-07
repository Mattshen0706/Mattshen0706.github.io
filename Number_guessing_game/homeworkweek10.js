var name="Matt";
var age=20;
var favouritenum= 20.3;
var finalanswer=0
var currentnumber=0
var operator=0
var currentoperation=""

const button1 = document.getElementById('warningmessage');

button1.addEventListener('click',function(){
    window.alert("THIS IS YOUR LAST WARNING");
    console.log("HEllO WORLD");
});

const textbox1 = document.getElementById('textbox1');

textbox1.innerHTML = "My name is " + name + ", I am " + age +" years old and my favourite number is " + favouritenum;


const answer = document.getElementById('answer');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const equal = document.getElementById('equal');
const decimal = document.getElementById('decimal');
const reset = document.getElementById('reset');

answer.innerHTML = " ";

const allvals =[answer,plus,one,two,three,minus,four,five,six,divide,seven,eight,nine,multiply,decimal,zero]
const elements=["answer","+","1","2",'3','-','4','5','6','/','7','8','9','*','.','0']

reset.addEventListener("click",function(){
    answer.innerHTML = 0;
    currentoperation=""
    finalanswer=0
});

for (let i = 0; i < allvals.length; i++){
    allvals[i].addEventListener("click",function(){
        currentoperation+=elements[i];
        answer.innerHTML = currentoperation;
    });
}

equal.addEventListener("click",function(){
    const result = parseFloat(eval(currentoperation));
    answer.innerHTML = result;
    currentoperation=result;
    answer.innerHTML=currentoperation;

});

const celcius= document.getElementById("celcius");
const farenheit= document.getElementById("farenheight");



farenheit.value="°F";
celcius.value="°C";

farenheit.addEventListener('keyup',function(){
    const farenheitvalue = farenheit.value;
    let adjustedfarenheit=farenheitvalue.replace("°F","");
    let farenheittocelcius = ((adjustedfarenheit-32)*(5/9)).toFixed(1); 
    farenheittocelcius+="°C";
    celcius.value=farenheittocelcius;
});

celcius.addEventListener('keyup',function(){
    const celciusvalue = celcius.value;
    let adjustedcelcius=celciusvalue.replace("°C","");
    let celciustofarenheit = (adjustedcelcius*9/5+32).toFixed(1); 
    celciustofarenheit+="°F";
    farenheit.value=celciustofarenheit;
});

 
const submitstring=document.getElementById('submitstring');
const stringmessage=document.getElementById('convertingstring');

submitstring.addEventListener('click',function(){
    let stringmessage1=stringmessage.value;
    stringmessage1=stringmessage1.toUpperCase();
    let stringlength=stringmessage1.length;
    window.alert(stringmessage1 + ",Length of String: " + stringlength.toString());
});

var isLightOn=true;

const lighttext = document.getElementById('lighttext');
const animate = document.getElementById('lighttext');

lighttext.addEventListener('click', function(){
    lighttext.classList.toggle('animate');
});



const powerone = document.getElementById('power1');
const powertwo = document.getElementById('power2');
const powerthree = document.getElementById('power3');
const powerfour = document.getElementById('power4');
const powerfive = document.getElementById('power5');
const powersix = document.getElementById('power6');
const powerseven = document.getElementById('power7');
const powereight = document.getElementById('power8');
const powernine = document.getElementById('power9');
const powerten = document.getElementById('power10');
const powereleven = document.getElementById('power11');
const powertwelve = document.getElementById('power12');
const powerthirteen = document.getElementById('power13');
const powerforteenth = document.getElementById('power14');
const powerfifteen= document.getElementById('power15');
const powersixteen= document.getElementById('power16');


const powersof =[powertwo,powerthree,powerfour,powerfive,powersix,powerseven,powereight,powernine,powerten,powereleven,powertwelve,powerthirteen,powerforteenth,powerfifteen,powersixteen]

var currentpower=2

powerone.addEventListener('keyup',function(){
    let powerval=powerone.value;
    for (let i = 0; i < powersof.length; i++){
        powersof[i].innerHTML=powerval**currentpower
        currentpower+=1;
    };
    currentpower=2
});





