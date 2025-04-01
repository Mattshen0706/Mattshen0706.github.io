const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements=document.querySelectorAll('.transform1, .transform2, .transform3');
hiddenElements.forEach((el)=> observer.observe(el));



const button = document.getElementById("button1");
const submissionpage = document.getElementById("submissionpage");

button.addEventListener('click',function(){
    if (submissionpage.style.visibility === 'hidden') {
        submissionpage.style.visibility = 'visible';
        submissionpage.classList.toggle('fade');
      } else {
        submissionpage.style.visibility = 'hidden'; 
      }
      
    });


