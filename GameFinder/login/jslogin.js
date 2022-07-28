//Carrousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex = slideIndex + n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("manual-btn");
  if (n > slides.length) {
      slideIndex = 1;
      dots[slideIndex+2].style.opacity = "0.25";
    }    
  if (n < 1) {
      slideIndex = slides.length
    }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  dots[slideIndex-1].style.opacity = "1";
  dots[slideIndex-2].style.opacity = "0.25";
}


//email validation when you are typing

function validationemail(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("validationemail");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
    }
    else{
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Email must have the following format XXXX@YYY.zzz"
        text.style.color = "#ffffff";
    }
}

//password validation when you are typing

function validationpassword(){
    var form = document.getElementById("form");
    var password = document.getElementById("password").value;
    var text = document.getElementById("validationpassword");
    var pattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,14}$/;

    if (password.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
    }
    else{
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "The password must have: (8 to 14) characters, 1 digit, 1 lowercase letter, 1 uppercase letter."
        text.style.color = "#ffffff";
    }
}

//Password hide/show
function seepassword(){
    var pass = document.getElementById("password");
    var hide = document.getElementById ("hide1");
    var show = document.getElementById ("hide2");

    if (pass.type === 'password'){
        pass.type = "text";
        show.style.display = "block";
        hide.style.display = "none";
    }
    else{
        pass.type = "password";
        show.style.display = "none";
        hide.style.display = "block";
    }
}