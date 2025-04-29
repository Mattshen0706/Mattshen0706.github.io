navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(async function(stream) {
  let recorder = RecordRTC(stream, {
      type: 'video'
  });
  recorder.startRecording();

  const sleep = m => new Promise(r => setTimeout(r, m));
  await sleep(3000);

  recorder.stopRecording(function() {
      let blob = recorder.getBlob();
      invokeSaveAsDialog(blob);
  });
});




















const sensitivity = 0.01; // Adjust this value to change sensitivity
const section=document.querySelector(".infinitescroll")

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 32 && e.target === document.body) {
    e.preventDefault();
  }
});

let container=document.getElementById("container")
const photo1=document.getElementById("photo1")
const photo2=document.getElementById("photo2")
const photo3=document.getElementById("photo3")
const photo4=document.getElementById("photo4")
const photo5=document.getElementById("photo5")
const photo6=document.getElementById("photo6")
const photo7=document.getElementById("photo7")
const photo8=document.getElementById("photo8")
const photo9=document.getElementById("photo9")
const photo10=document.getElementById("photo10")
const photo11=document.getElementById("photo11")
container.appendChild(photo1)
container.appendChild(photo2)
container.appendChild(photo3)
container.appendChild(photo4)
container.appendChild(photo5)
container.appendChild(photo6)
container.appendChild(photo7)
container.appendChild(photo8)
container.appendChild(photo9)
container.appendChild(photo10)
container.appendChild(photo11)
// for (let i=0;i<50;i++){                                                                                    
//     let div=document.createElement('div');
//     div.className="item";
//     div.textContent=i;
//     container.appendChild(div)        
// }



function appendNext(){
    let items = document.querySelectorAll('.item');
        container.appendChild(items[0]);
}

function appendPrev(){
    let items = document.querySelectorAll('.item');
        container.prepend(items[items.length-1]);
}

// section.addEventListener('wheel',function(event){
//     const scrollAmount = event.deltaX * sensitivity;
//     section.scrollBy(0, scrollAmount);
//     if (event.deltaX*0.0000000001>0){
//         appendNext()
//     }else{
//         appendPrev();
//     }
//     }, { passive: false });


    document.addEventListener('keydown', function(event) {
        if (event.key === 'a') {
          // Call your function here
          appendPrev();
        }
      });

      document.addEventListener('keydown', function(event) {
        if (event.key === 'd') {
          // Call your function here
          appendNext();
        }
      });





// COLOR GENERATOR FOR SECTION 2 OF THE PAGE
const backgroundgradient=document.getElementById("multicolor")
const previewgradient=document.getElementById("moodbar")
window.onload = function() {
  let color11=Math.floor(Math.random()*255)
  let color12=Math.floor(Math.random()*255)
  let color13=Math.floor(Math.random()*255)
  let color21=Math.floor(Math.random()*255)
  let color22=Math.floor(Math.random()*255)
  let color23=Math.floor(Math.random()*255)

  let randomstyle=""
  async function loadRandomColor(){

    const res = await fetch("http://colormind.io/api/");
    const colors = await res.json(); //.json turns it into usable javascript objects
    randomstyle = colors.result[Math.floor(Math.random() * colors.result.length)];
  }

  loadRandomColor();

  const url = "http://colormind.io/api/";
  const data = {
      model:randomstyle,
      input: [
          [color11, color12, color13],
          [color21, color22, color23],
          "N", "N", "N"
      ]
  };

    const http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        const palette = JSON.parse(http.responseText).result;

        color3 = `rgb(${palette[2][0]}, ${palette[2][1]}, ${palette[2][2]})`
        color4  = `rgb(${palette[3][0]}, ${palette[3][1]}, ${palette[3][2]})`
        color5 = `rgb(${palette[4][0]}, ${palette[4][1]}, ${palette[4][2]})`

        backgroundgradient.style.background = `linear-gradient(270deg, rgb(${color11},${color12},${color13}), rgb(${color21},${color22},${color23}),${color3},${color4},${color5})`;
        backgroundgradient.style.backgroundSize = "600% 600%";
        backgroundgradient.style.animation = "gradientMove 10s ease infinite";

        previewgradient.style.background = `linear-gradient(270deg, rgb(${color11},${color12},${color13}), rgb(${color21},${color22},${color23}),${color3},${color4},${color5})`;
        previewgradient.style.backgroundSize = "600% 600%";
        previewgradient.style.animation = "gradientMove 10s ease infinite";
    }

};
http.open("POST", url, true);
http.send(JSON.stringify(data));
};


document.addEventListener ('keydown', (e) => {
  if (e.key === " ") {
  let color11=Math.floor(Math.random()*255)
  let color12=Math.floor(Math.random()*255)
  let color13=Math.floor(Math.random()*255)
  let color21=Math.floor(Math.random()*255)
  let color22=Math.floor(Math.random()*255)
  let color23=Math.floor(Math.random()*255)

  let randomstyle=""
  async function loadRandomColor(){

    const res = await fetch("http://colormind.io/api/");
    const colors = await res.json(); //.json turns it into usable javascript objects
    randomstyle = colors.result[Math.floor(Math.random() * colors.result.length)];
  }

  loadRandomColor();

  const url = "http://colormind.io/api/";
  const data = {
      model:randomstyle,
      input: [
          [color11, color12, color13],
          [color21, color22, color23],
          "N", "N", "N"
      ]
  };

    const http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        const palette = JSON.parse(http.responseText).result;

        color3 = `rgb(${palette[2][0]}, ${palette[2][1]}, ${palette[2][2]})`
        color4  = `rgb(${palette[3][0]}, ${palette[3][1]}, ${palette[3][2]})`
        color5 = `rgb(${palette[4][0]}, ${palette[4][1]}, ${palette[4][2]})`

        backgroundgradient.style.background = `linear-gradient(270deg, rgb(${color11},${color12},${color13}), rgb(${color21},${color22},${color23}),${color3},${color4},${color5})`;
        backgroundgradient.style.backgroundSize = "600% 600%";
        backgroundgradient.style.animation = "gradientMove 10s ease infinite";
    
        previewgradient.style.background = `linear-gradient(270deg, rgb(${color11},${color12},${color13}), rgb(${color21},${color22},${color23}),${color3},${color4},${color5})`;
        previewgradient.style.backgroundSize = "600% 600%";
        previewgradient.style.animation = "gradientMove 10s ease infinite";
      }

};
http.open("POST", url, true);
http.send(JSON.stringify(data));
  }
});


const overlay=document.getElementById("overlay")
const displayelements = document.querySelector('.dot');
const mediacircle = document.querySelector('.container3');

document.addEventListener('keydown', function(event) {
  if (event.key === 'w') {  
  const middleelement = document.querySelector('.container .item:nth-child(3)');  
  overlay.style.visibility = 'visible';
  overlay.style.opacity = '1';
  middleelement.classList.add("annimate");
  mediacircle.style.visibility="visible"
  displayelements.style.visibility="visible"
  displayelements.style.opacity="1"
  displayelements.classList.add("annimate");
  displayelements.classList.add("annimation");
  }
});


document.addEventListener('keydown', function(event) {
  if (event.key === 's') {
  const middleelement = document.querySelector('.container .item:nth-child(3)');
  overlay.style.visibility = 'collapse';
  overlay.style.opacity = '0';
  middleelement.classList.remove("annimate");
  mediacircle.style.visibility="collapse"
  displayelements.style.visibility="collapse"
  displayelements.style.opacity="0"
  displayelements.classList.remove("annimation");
  }
});


// backgroundgradient.addEventListener('click',function


//})
let darkmodestate=false
darkmode=document.getElementById("darkmode")
infintiescroll=document.getElementById("infinitescroll")
darcircle=document.getElementById("darkcircle")
menubar=document.querySelector(".menubar")
darcircle.addEventListener('click',function(){
  if (darkmodestate === false){
  darkcircle.style.marginRight = '5.7vw';
  infinitescroll.style.background="rgba(0,0,0,0.9)";
  menubar.style.color = "white";
  darkcircle.style.background="white"
  darkmode.style.borderColor="white"
  darkmodestate=true
}
else{
  darkcircle.style.marginRight = '4vw';
  infinitescroll.style.background="rgba(255, 255, 255, 0.9)";
  menubar.style.color = "black";
  darkcircle.style.background="black"
  darkmode.style.borderColor="black"
  darkmodestate=false

}


})


 // required dom elementsconst buttonEl = document.getElementById('button');
const messageEl = document.getElementById('message');
const titleEl = document.getElementById('real-time-title');

// initial states and global variables
messageEl.style.display = 'none';
let isRecording = false;
let socket;
let recorder;



const run = async () => {
  isRecording = !isRecording;
  buttonEl.innerText = isRecording ? 'Stop' : 'Record';
  titleEl.innerText = isRecording ? 'Click stop to end recording!' : 'Click start to begin recording!'
 
  if (!isRecording) {
 
    if (recorder) {
      recorder.pauseRecording();
      recorder = null;
    }
    
    if (socket) {
      socket.send(JSON.stringify({terminate_session: true}));
      socket.close();
      socket = null;
    }
 
  } else {
    // TODO: setup websocket and handle events
  }
 };
 
 buttonEl.addEventListener('click', () => run());

