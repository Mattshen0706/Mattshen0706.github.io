// navigator.mediaDevices.getUserMedia({
//   video: true,
//   audio: true
// }).then(async function(stream) {
//   let recorder = RecordRTC(stream, {
//       type: 'video'
//   });
//   recorder.startRecording();

//   const sleep = m => new Promise(r => setTimeout(r, m));
//   await sleep(3000);

//   recorder.stopRecording(function() {
//       let blob = recorder.getBlob();
//       invokeSaveAsDialog(blob);
//   });
// });




















const sensitivity = 0.01; // Adjust this value to change sensitivity
const section=document.querySelector(".infinitescroll")
const container2=document.querySelector(".container2")

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


let functionEnabled = true;

    document.addEventListener('keydown', function(event) {
      if (functionEnabled = true){
        if (event.key === 'a') {
          // Call your function here
          appendPrev();
        }

        if (event.key === 'd') {
          // Call your function here
          appendNext();
        }
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









const mediacircle = document.querySelector('.container3');


const dot1=document.getElementById("dot1")
const dot2=document.getElementById("dot2")
const dot3=document.getElementById("dot3")
const dot4=document.getElementById("dot4")
const dot5=document.getElementById("dot5")
const dot6=document.getElementById("dot6")
const dot7=document.getElementById("dot7")
const dot8=document.getElementById("dot8")
const dot9=document.getElementById("dot9")
const dot10=document.getElementById("dot10")
const dot11=document.getElementById("dot11")
const dot12=document.getElementById("dot12")


mediacircle.appendChild(dot1)
mediacircle.appendChild(dot2)
mediacircle.appendChild(dot3)
mediacircle.appendChild(dot4)
mediacircle.appendChild(dot5)
mediacircle.appendChild(dot6)
mediacircle.appendChild(dot7)
mediacircle.appendChild(dot8)
mediacircle.appendChild(dot9)
mediacircle.appendChild(dot10)
mediacircle.appendChild(dot11)
mediacircle.appendChild(dot12)


// const mediacircle2 = document.querySelector('.container4');

// const dot21=document.getElementById("dot21")
// const dot22=document.getElementById("dot22")
// const dot23=document.getElementById("dot23")
// const dot24=document.getElementById("dot24")
// const dot25=document.getElementById("dot25")
// const dot26=document.getElementById("dot26")
// const dot27=document.getElementById("dot27")
// const dot28=document.getElementById("dot28")
// const dot29=document.getElementById("dot29")
// const dot210=document.getElementById("dot210")
// const dot211=document.getElementById("dot211")
// const dot212=document.getElementById("dot212")


// mediacircle2.appendChild(dot21)
// mediacircle2.appendChild(dot22)
// mediacircle2.appendChild(dot23)
// mediacircle2.appendChild(dot24)
// mediacircle2.appendChild(dot25)
// mediacircle2.appendChild(dot26)
// mediacircle2.appendChild(dot27)
// mediacircle2.appendChild(dot28)
// mediacircle2.appendChild(dot29)
// mediacircle2.appendChild(dot210)
// mediacircle2.appendChild(dot211)
// mediacircle2.appendChild(dot212)


// const mediacircle3 = document.querySelector('.container5');


// const dot31=document.getElementById("dot31")
// const dot32=document.getElementById("dot32")
// const dot33=document.getElementById("dot33")
// const dot34=document.getElementById("dot34")
// const dot35=document.getElementById("dot35")
// const dot36=document.getElementById("dot36")
// const dot37=document.getElementById("dot37")
// const dot38=document.getElementById("dot38")
// const dot39=document.getElementById("dot39")
// const dot310=document.getElementById("dot310")
// const dot311=document.getElementById("dot311")
// const dot312=document.getElementById("dot312")


// mediacircle3.appendChild(dot31)
// mediacircle3.appendChild(dot32)
// mediacircle3.appendChild(dot33)
// mediacircle3.appendChild(dot34)
// mediacircle3.appendChild(dot35)
// mediacircle3.appendChild(dot36)
// mediacircle3.appendChild(dot37)
// mediacircle3.appendChild(dot38)
// mediacircle3.appendChild(dot39)
// mediacircle3.appendChild(dot310)
// mediacircle3.appendChild(dot311)
// mediacircle3.appendChild(dot312)


function appendNextDot(){
  let dots = document.querySelectorAll('.dot');
    mediacircle.appendChild(dots[0]);
}

function appendPrevDot(){
  let dots = document.querySelectorAll('.dot');
    mediacircle.prepend(dots[dots.length-1]);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'j') {
    // Call your function here
    appendPrevDot();
    for (let i = 0; i < 9; i++) {
      const dotss = mediacircle.children[i];
    if (dotss) {
      dotss.style.transform =`rotate(${-i*40}deg) translateX(65vh)` ; 
      dotss.style.opacity = '1'; // Make dot visible
    }
  }
}

if (event.key === 'l') {
  // Call your function here
  appendNextDot();
  for (let i = 0; i < 9; i++) {
  const dotss = mediacircle.children[i];
  if (dotss) {
    dotss.style.transform =`rotate(${-i*40}deg) translateX(65vh)`; 
    dotss.style.opacity = '1'; // Make dot visible
  }
}
  }

});


const overlay=document.getElementById("overlay")



document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
  if (event.key === 'w') {  
  functionEnabled = false;
  const middleelement = document.querySelector('.container .item:nth-child(3)');  
  overlay.style.visibility = 'visible';
  overlay.style.opacity = '1';
  
  middleelement.classList.add("annimate");
  mediacircle.style.visibility="visible"
  if (darkmodestate === true){
  light.style.background="none"
  light.style.boxShadow= "none"
  light.style.filter="none";
  overlay.style.background = "black";
  }
else{
  overlay.style.background = "white";
}

  for (let i = 0; i < 9; i++) {
    const dotss = mediacircle.children[i];
    if (dotss) {
      dotss.style.transform =`rotate(${-i*40}deg) translateX(65vh)`; 
      dotss.style.opacity = '1'; // Make dot visible
    }

  }
  // for (let i = 0; i < 5; i++) {
  //   const dotss = mediacircle.children[i];
  //   if (dotss) {
  //     dotss.style.animation = `${animationNames[i]} 1s forwards`;
  //     dotss.style.opacity = '1'; // Make dot visible
  //   }
  // }
}

if (event.key === 's') {
  functionEnabled = true;
  const middleelement = document.querySelector('.container .item:nth-child(3)');
  overlay.style.visibility = 'collapse';
  overlay.style.opacity = '0';
  middleelement.classList.remove("annimate");
  mediacircle.style.visibility="collapse";

  if (darkmodestate === true){
    light.style.background="white"
    light.style.boxShadow= "0px -50px 200px rgb(255, 255, 255,0.8),0px -100px 200px rgb(255, 255, 255,0.6),0px -150px 200px rgb(255, 255, 255,0.4),0px -200px 200px rgb(255, 255, 255,0.2)"
    light.style.filter="blur(20px)";
  }
  for (let i = 0; i < 9; i++) {
    const dotss = mediacircle.children[i];
    if (dotss) {
      dotss.style.transform =`rotate(0deg) translateX(0vh)`; 
      dotss.style.opacity = '0'; // Make dot visible
    }
  }}

});


// backgroundgradient.addEventListener('click',function

const light=document.querySelector('.light')
//})
let darkmodestate=false
darkmode=document.getElementById("darkmode")
infintiescroll=document.getElementById("infinitescroll")
darkcircle=document.getElementById("darkcircle")
menubar=document.querySelector(".menubar")
darkcircle.addEventListener('click',function(){
  if (darkmodestate === false){
  darkcircle.style.marginRight = '5.7vw';
  infinitescroll.style.background="rgba(0,0,0,1)";
  container2.style.background="rgba(0,0,0,1)";
  menubar.style.color = "white";
  darkcircle.style.background="white"
  darkmode.style.borderColor="white"
  darkmodestate=true
  light.style.background="white"
  light.style.boxShadow= "0px -50px 200px rgb(255, 255, 255,0.8),0px -100px 200px rgb(255, 255, 255,0.6),0px -150px 200px rgb(255, 255, 255,0.4),0px -200px 200px rgb(255, 255, 255,0.2)"
  light.style.filter="blur(20px)";
}
else{
  darkcircle.style.marginRight = '4vw';
  infinitescroll.style.background="rgba(255, 255, 255, 1)";
  container2.style.background="rgba(255, 255, 255, 1)";
  menubar.style.color = "black";
  darkcircle.style.background="black"
  darkmode.style.borderColor="black"
  darkmodestate=false
  light.style.background="none"
  light.style.boxShadow= "none"
  light.style.filter="none";

}

})




































//  // required dom elements
// const buttonEl = document.getElementById('button');
// const messageEl = document.getElementById('message');
// const titleEl = document.getElementById('real-time-title');

// // initial states and global variables
// messageEl.style.display = 'none';
// let isRecording = false;
// let socket;
// let recorder;



// const run = async () => {
//   isRecording = !isRecording;
//   buttonEl.innerText = isRecording ? 'Stop' : 'Record';
//   titleEl.innerText = isRecording ? 'Click stop to end recording!' : 'Click start to begin recording!'
 
//   if (!isRecording) {
 
//     if (recorder) {
//       recorder.pauseRecording();
//       recorder = null;
//     }
    
//     if (socket) {
//       socket.send(JSON.stringify({terminate_session: true}));
//       socket.close();
//       socket = null;
//     }
 
//   } else {


// // get session token from backendconst response = await fetch('http://localhost:8000');
// const data = await response.json();

// if(data.error){
//    alert(data.error)
// }
   
// const { token } = data;

// // establish wss with AssemblyAI at 16000 sample rate
// socket = new WebSocket(`wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`);

// // handle incoming messages to display transcription to the DOMconst texts = {};
// socket.onmessage = (message) => {
//    let msg = '';
//    const res = JSON.parse(message.data);
//    texts[res.audio_start] = res.text;
//    const keys = Object.keys(texts);
//    keys.sort((a, b) => a - b);
//    for (const key of keys) {
//        if (texts[key]) {
//            msg += ` ${texts[key]}`;
//        }
//    }
//    messageEl.innerText = msg;
// };

// // handle error
// socket.onerror = (event) => {
//    console.error(event);
//    socket.close();
// }
   
// // handle socket close
// socket.onclose = event => {
//    console.log(event);
//    socket = null;
// }

// // handle socket open
// socket.onopen = () => {
//    // begin recording
//    messageEl.style.display = '';
//    navigator.mediaDevices.getUserMedia({ audio: true })
//    .then((stream) => {
//        recorder = new RecordRTC(stream, {
//        type: 'audio',
//        mimeType: 'audio/webm;codecs=pcm', // endpoint requires 16bit PCM audio
//        recorderType: StereoAudioRecorder,
//        timeSlice: 250, // set 250 ms intervals of data
//        desiredSampRate: 16000,
//        numberOfAudioChannels: 1, // real-time requires only one channel
//        bufferSize: 4096,
//        audioBitsPerSecond: 128000,
//        ondataavailable: (blob) => {
//            const reader = new FileReader();
//            reader.onload = () => {
//                const base64data = reader.result;

//                // audio data must be sent as a base64 encoded string
//                if (socket) {
//                    socket.send(JSON.stringify({ audio_data: base64data.split('base64,')[1] }));
//                }
//            };
//            reader.readAsDataURL(blob);
//        },
//    });

//    recorder.startRecording();
//    })
//    .catch((err) => console.error(err));
// };




//   }
//  };

//  buttonEl.addEventListener('click', () => run());

