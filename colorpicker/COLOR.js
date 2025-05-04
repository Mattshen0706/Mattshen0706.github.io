const randomstyle=""
async function loadRandomColor(){

    const res = await fetch("http://colormind.io/api/");
    const colors = await res.json(); //.json turns it into usable javascript objects
    randomstyle = colors.result[Math.floor(Math.random() * colors.result.length)];
}

const colorchoice1 = document.getElementById('column1');
const colorchoice2 = document.getElementById('column2');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const color5 = document.getElementById('color5');
const gradientbackground = document.getElementById('column3');
let colorpallete=[]

const button = document.getElementById("buttonclick");
button.addEventListener("click",function(){
c11=document.getElementById("input1").value;
c12=document.getElementById("input2").value;
c13=document.getElementById("input3").value;
c21=document.getElementById("input4").value;
c22=document.getElementById("input5").value;
c23=document.getElementById("input6").value;
colorchoice1.style.background = `rgb(${c11}, ${c12}, ${c13})`;
// c11.style.background = `rgb(${c11}, ${c12}, ${c13})`;
// c12.style.background = `rgb(${c11}, ${c12}, ${c13})`;
// c13.style.background = `rgb(${c11}, ${c12}, ${c13})`;
colorchoice2.style.background = `rgb(${c21}, ${c22}, ${c23})`;
// gradientbackground.style.background = `linear-gradient(90deg,rgb(${c11}, ${c12}, ${c13}),rgb(${c21}, ${c22}, ${c23}))`;
// c21.style.background = `rgb(${c21}, ${c22}, ${c23})`;
// c22.style.background = `rgb(${c21}, ${c22}, ${c23})`;
// c23.style.background = `rgb(${c21}, ${c22}, ${c23})`;


var url = "http://colormind.io/api/";
var data = {
	model : randomstyle,
	input : [[c11,c12,c13],[c21,c22,c23],"N","N","N"]
}

var http = new XMLHttpRequest();

http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		var palette = JSON.parse(http.responseText).result;
        color1.style.background = `rgb(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]})`
        color2.style.background = `rgb(${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]})`
        color3.style.background = `rgb(${palette[2][0]}, ${palette[2][1]}, ${palette[2][2]})`
        color4.style.background = `rgb(${palette[3][0]}, ${palette[3][1]}, ${palette[3][2]})`
        color5.style.background = `rgb(${palette[4][0]}, ${palette[4][1]}, ${palette[4][2]})`

	}
}
console.log("Generated Palette:", colorpallete);
http.open("POST", url, true);
http.send(JSON.stringify(data));


});



// http.onreadystatechange = function() {
// 	if(http.readyState == 4 && http.status == 200) {
// 		var palette = JSON.parse(http.responseText).result;
// 	}
// }


    
//     document.getElementById("model").textContent 

    
//     model : "default"
// }

// '{"input":[[44,43,44],[90,83,82],"N","N","N"],"model":"default"}'

// var url = "http://colormind.io/api/";
// var data = {=--00
// 	model : "default",
// 	input : [[44,43,44],[90,83,82],"N","N","N"]
// }

// var http = new XMLHttpRequest();



// http.open("POST", url, true);
// http.send(JSON.stringify(data));

// test.onchange = () => {
// document.getElementById('textbox_id').value

