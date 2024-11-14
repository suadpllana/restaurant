
function login(event){
    event.preventDefault()
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;


if(username === "admin" && password === "admin1234"){
    window.location.href = "./dashboard/dashboard.html"
}
else{
    alert("Kredencialet e juaja jane gabim! Provo perseri")
}

}

function enter(e){
    if(e.key === "Enter"){
        login()
    }
}
function openModal(){
    document.getElementById("overlay").style.display = "flex"
}
function closeModal(){
    document.getElementById("overlay").style.display = "none"
}
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const a = document.querySelectorAll(".anchor")
    if(window.scrollY > 300){
        navbar.style.backgroundColor = "#005bb5";
        navbar.style.borderBottom = "none"
        a.forEach((element) => {
            element.style.color = "black"
        })
    }
    else{   
        navbar.style.backgroundColor = "transparent"
           navbar.style.borderBottom = "2px solid yellow";
           a.forEach((element) => {
            element.style.color = "white"
           })
    }
});

document.addEventListener("DOMContentLoaded", () =>  {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.map(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    });

    elements.forEach(element => observer.observe(element));
});

const ulRef = document.getElementById("ulRef")
  let tx = 0

    function moveForward(){
      if(tx > -50){
        tx -= 25
       
      }
      ulRef.style.transform = `translateX(${tx}%)`;

    }
    function moveBackwards(){
      if(tx < 0){
        tx += 25
      }
      ulRef.style.transform = `translateX(${tx}%)`;

    }

    const form = document.getElementById('form');
    const result = document.getElementById('result');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      result.innerHTML = "Please wait..."
    
        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = "Form submitted successfully";
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
            });
    });

    function toggleMenu() {
        const hamburgerMenu = document.querySelector(".hamburgerNav");
        hamburgerMenu.classList.toggle("hide"); 
    }
    
