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


//email validation

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

//password validation

function validationpassword(){
    var form = document.getElementById("form");
    var password = document.getElementById("password").value;
    var text = document.getElementById("validationpassword");
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(password.length >= 8){
        if (password.length <= 14){
            form.classList.add("valid");
            form.classList.remove("invalid");
            text.innerHTML = "";
        }
        else {
            form.classList.remove("valid")
            form.classList.add("invalid")
            text.innerHTML = "Passoword length must be between (8-14)";
            text.style.color = "#ffffff";
        }
    }
    else{
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Passoword length must be between (8-14)";
        text.style.color = "#ffffff";
        }
    }
    /*if(password.match(lowerCaseLetters)) {
        form.classList.remove("invalid");
        form.classList.add("valid");
            text.innerHTML = "";
    } 
    else {
    form.classList.remove("valid");
    form.classList.add("invalid");
        text.innerHTML = "Passoword must have lower case letters";
        text.style.color = "#ffffff";
    }

    // Validate capital letters

    if(password.match(upperCaseLetters)) {
        form.classList.remove("invalid");
        form.classList.add("valid");
        text.innerHTML = "";
    } 
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Passoword must have capital letters";
        text.style.color = "#ffffff";
    }

    // Validate numbers
    if(password.match(numbers)) {
        form.classList.remove("invalid");
        form.classList.add("valid");
        text.innerHTML = "";
        text.style.color = "#ffffff";
    } else 
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Passoword must have numbers";
        text.style.color = "#ffffff";
    }}*/

    