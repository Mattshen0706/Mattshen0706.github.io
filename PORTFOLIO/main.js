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

document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault();
  }
});

let container=document.getElementById("container")
const photo1=document.getElementById("photo1")
const photo2=document.getElementById("photo2")
const photo3=document.getElementById("photo3")
const photo4=document.getElementById("photo4")
const photo5=document.getElementById("photo5")

// const photo6=document.getElementById("photo6")
// const photo7=document.getElementById("photo7")
// const photo8=document.getElementById("photo8")
// const photo9=document.getElementById("photo9")
// const photo10=document.getElementById("photo10")
// const photo11=document.getElementById("photo11")

container.appendChild(photo1)
container.appendChild(photo2)
container.appendChild(photo3)
container.appendChild(photo4)
container.appendChild(photo5)

// container.appendChild(photo6)
// container.appendChild(photo7)
// container.appendChild(photo8)
// container.appendChild(photo9)
// container.appendChild(photo10)
// container.appendChild(photo11)
// for (let i=0;i<50;i++){                                                                                    
//     let div=document.createElement('div');
//     div.className="item";
//     div.textContent=i;
//     container.appendChild(div)        
// }


function appendNext1(){
    let items = document.querySelectorAll('.item');
        container.appendChild(items[0]);
}

function appendPrev1(){
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
      if (functionEnabled === true){
        if (event.key === 'a') {
          // Call your function here
          appendPrev1();
        }

        if (event.key === 'd') {
          // Call your function here
          appendNext1();
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





const photocircle = document.querySelector('.container3');
const chefcircle = document.querySelector('.container4');
const graphiccircle = document.querySelector('.container5');
const athletecircle = document.querySelector('.container6');
const fashioncircle = document.querySelector('.container7');


const overlay=document.getElementById("overlay")

let myDictionary={}

myDictionary["photo1"] = ".container3"
myDictionary["photo2"] = ".container4"
myDictionary["photo3"] = ".container5"
myDictionary["photo4"] = ".container6"
myDictionary["photo5"] = ".container7"


const photos = document.querySelectorAll('.photo'); // creates a list

photos.forEach(photo => {
  photocircle.appendChild(photo); //iterates through the list
});


const chefs = document.querySelectorAll('.chef'); // creates a list

chefs.forEach(chef => {
  chefcircle.appendChild(chef); //iterates through the list
});

const graphics = document.querySelectorAll('.graphic'); // creates a list

graphics.forEach(graphic => {
  graphiccircle.appendChild(graphic); //iterates through the list
});


const athletes = document.querySelectorAll('.athlete'); // creates a list

athletes.forEach(athlete => {
  athletecircle.appendChild(athlete); //iterates through the list
});

const fashions = document.querySelectorAll('.fashion'); // creates a list

fashions.forEach(fashion => {
  fashioncircle.appendChild(fashion); //iterates through the list
});



function appendNext(){
  const middleelement = document.querySelector('.container .item:nth-child(3)');  
  const targetElementId = myDictionary[middleelement.id];
  const targetElement = document.querySelector(targetElementId);
  const items = targetElement.children;
  targetElement.appendChild(items[0]);
}

function appendPrev(){
  const middleelement = document.querySelector('.container .item:nth-child(3)');  
  const targetElementId = myDictionary[middleelement.id];
  const targetElement = document.querySelector(targetElementId);
  const items = targetElement.children; 
  targetElement.prepend(items[items.length-1]);
}


let circlemovement="True"


document.addEventListener('keydown', function(event) {

  const middleelement = document.querySelector('.container .item:nth-child(3)');  
  const targetElementId = myDictionary[middleelement.id];
  const targetElement = document.querySelector(targetElementId);
  if (functionEnabled === false){
  if (circlemovement==="True"){
  if (event.key === 'a') {
    // Call your function here
    appendNext();
    for (let i = 0; i < 12; i++) {
      const items = targetElement.children[i];
      if (items) {
        const targetAngle = -i * 40;
        items.style.transform =`rotate(${targetAngle}deg) translateX(65vh)`; 
        items.style.opacity = '1'; //
      }
}
  }

if (event.key === 'd') {
  // Call your function here
  appendPrev();
  for (let i = 0; i < 12; i++) {
    const items = targetElement.children[i];
    if (items) {
      const targetAngle = -i * 40;
      items.style.transform =`rotate(${targetAngle}deg) translateX(65vh)`; 
      items.style.opacity = '1'; //
  }
}
}
}
}
});






// DARKMODE


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







document.addEventListener('keydown', function(event){

  if (event.key === 'w') {  
  const middleelement = document.querySelector('.container .item:nth-child(3)');  
  console.log('middleelement:', middleelement);
  console.log('middleelement.id:', middleelement.id);
  console.log('Key pressed:', event.key);
  console.log(middleelement);
  functionEnabled = false;
  overlay.style.visibility = 'visible';
  overlay.style.opacity = '1';
  middleelement.classList.add("annimate");
  container2.style.visibility="hidden"
  container2.style.height="0"
  container2.style.width="0"
  container.style.height="60vh"
  if (darkmodestate === true){
  light.style.background="none"
  light.style.boxShadow= "none"
  light.style.filter="none";
  overlay.style.background = "black";
  }
else{
  overlay.style.background = "white";
}
const targetElementId = myDictionary[middleelement.id];
const targetElement = document.querySelector(targetElementId);
console.log('targetElementId',targetElementId)
console.log('targetElement',targetElement)
targetElement.style.visibility="visible"
  for (let i = 0; i < 12; i++) {
    const items = targetElement.children[i];
    items.classList.add('movement')
    if (items.classList.contains("movement")) {
      const targetAngle = -i * 40;
      items.style.right="25vw";
      items.style.transform =`rotate(${targetAngle}deg) translateX(65vh)`; 
      items.style.opacity = '1'; //
    }
    else{
      items.style.right="0";
      items.style.transform =`rotate(0deg) translateX(0vh)`; 
      items.style.opacity = '1'; 

    }
  }
}



if (event.key === 's') {
  const middleelement = document.querySelector('.container .item:nth-child(3)'); 
  functionEnabled = true;
  overlay.style.visibility = 'collapse';
  overlay.style.opacity = '0';
  middleelement.classList.remove("annimate");
  
  console.log('middleelement:', middleelement);
  console.log('middleelement.id:', middleelement.id);
  console.log('Key pressed:', event.key);
  console.log(middleelement);
  overlay.style.visibility = 'hidden';
  overlay.style.opacity = '0';
  middleelement.classList.remove("annimate");
  container2.style.visibility="visible"
  container2.style.height="100vh"
  container2.style.width="100vw"
  container2.style.marginTop="75vh"
  if (darkmodestate === true){
  light.style.background="white"
  light.style.boxShadow= "0px -50px 200px rgb(255, 255, 255,0.8),0px -100px 200px rgb(255, 255, 255,0.6),0px -150px 200px rgb(255, 255, 255,0.4),0px -200px 200px rgb(255, 255, 255,0.2)"
  light.style.filter="blur(20px)";
  overlay.style.background = "black";
  }
  else{
  overlay.style.background = "white";
  }
  
  
  
  const targetElementId = myDictionary[middleelement.id];
  const targetElement = document.querySelector(targetElementId);
  
  
  console.log('targetElementId',targetElementId)
  console.log('targetElement',targetElement)
  
  
  
  targetElement.style.visibility="hidden"
  for (let i = 0; i < 12; i++) {
    const items = targetElement.children[i];
    if (items) {
      items.style.transform =`rotate(0deg) translateX(0)`; 
      items.style.opacity = '0'; //
    }
  }

  
}

});






const dots = document.querySelectorAll(".dot");

dots.forEach(dot => {
  dot.addEventListener('click', function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      circlemovement="True"
      this.classList.add('movement');
      this.style.width = "12vw";  
      this.style.height = "12vw";
      this.style.opacity = "1";
      this.style.right = "25vw";
      this.style.top = "0";
      this.style.borderRadius = "10vw";
      this.style.zIndex="6"

      const index = Array.from(this.parentElement.children).indexOf(this);
      const targetAngle = -index * 40;
      this.style.transform = `rotate(${targetAngle}deg) translateX(65vh)`;

    } else {
      // Remove 'active' from all other dots

      dots.forEach(d => {
        d.classList.remove("active");
        d.classList.add("movement");
        d.style.width = "12vw";
        d.style.height = "12vw";
        d.style.opacity = "1";
        d.style.right = "25vw";
        d.style.top = "0";
        d.style.borderRadius = "10vw";
        // Optional: reapply the circular transform if needed
        const index = Array.from(d.parentElement.children).indexOf(d);
        const targetAngle = -index * 40;
        d.style.transform = `rotate(${targetAngle}deg) translateX(65vh)`;
        this.style.zIndex="6"
      });

      // Enlarge the clicked dot
      circlemovement="False"
      this.classList.add("active");
      this.classList.remove('movement')
      this.style.width = "100vw";
      this.style.height = "100vh";
      this.style.opacity = "1";
      this.style.right="23vw";
      this.style.top="-40vh"
      this.style.borderRadius="0"
      this.style.zIndex="10"
      this.style.transform = "rotate(180deg) translateX(0)";
      
    }
  });
});


































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


