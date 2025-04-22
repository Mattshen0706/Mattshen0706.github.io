
const sensitivity = 0.01; // Adjust this value to change sensitivity
const section=document.querySelector(".infinitescroll")

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


const middleelement = document.querySelector('.container .item:nth-child(3)');

function appendNext(){
    let items = document.querySelectorAll('.item');
        container.appendChild(items[0]);
}

function appendPrev(){
    let items = document.querySelectorAll('.item');
        container.prepend(items[items.length-1]);
}

section.addEventListener('wheel',function(event){
    const scrollAmount = event.deltaY * sensitivity;
    section.scrollBy(0, scrollAmount);
    if (event.deltaX*0.0000000001>0){
        appendNext()
    }else{
        appendPrev();
    }
    }, { passive: false });


    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
          // Call your function here
          appendPrev();
        }
      });

      document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
          // Call your function here
          appendNext();
        }
      });
