generatednumber=Math.floor(Math.random()*10);
userguess=-1;


// function guessfunction(guess){

// };

// while guess


const button1 = document.getElementById("guessbutton");
let guesslist=[];

const displaytext = document.getElementById('name1');
const displaytext2 = document.getElementById('name2');

button1.addEventListener('click',function displayguess(){
    const userguess = document.getElementById('numberguessed').value;
    console.log("hello world");
    console.log(userguess);
    guesslist.push(userguess);
    displaytext.innerHTML = guesslist;
    if (userguess!=generatednumber){
        displaytext2.innerHTML = "INCORRECT";
    }else{
        displaytext2.innerHTML = "CORRECT";
    }
});


button1.addEventListener('click',displayguess());


// getElementById('dispuserguess').innerHTML="Your guess is" + xval



function displayguess(){
    if (keyCode === 13) {
    const userguess = document.getElementById('numberguessed').value;
    console.log("hello world");
    console.log(userguess);
    guesslist.push(userguess);
    displaytext.innerHTML = guesslist;
    if (userguess!=generatednumber){
        displaytext2.innerHTML = "INCORRECT";
    }else{
        displaytext2.innerHTML = "CORRECT";
    }
    }
};



// getElementById('dispuserguess').innerHTML="Your guess is" + xval




