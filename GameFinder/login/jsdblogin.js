const api_Url = 'http://localhost:3000/users'

//Get all form data to a global variable
var email = document.getElementById("email");
var password = document.getElementById("password");
var login = document.getElementById("login");

var form = document.getElementById("form");

login.addEventListener("click", Login_form);

//Function that is valid and if it is valid it calls the fetch function
function Login_form(event) {
    event.preventDefault();
        if (validate_email(email.value) && validate_password(password.value)) {
            Login_fetch(email.value, password.value);
        } else {
            //snackbar();
        }
    };

function Login_fetch(email, password) {
    //Variables for fetch
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    var form_string = JSON.stringify({
    email: email,
    password: password,
    });

    var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: form_string,
    redirect: "follow",
    };

  fetch(api_Url, requestOptions)
    .then((response) => response.text())
    .then((result) => {
        return window.location.href = '../app/gamefinder.html';
    }) 
    .catch((error) => snackbar(error));

};


function validate_email(_valid_email){
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let is_valid = false;
    if (_valid_email.match(pattern)){
        is_valid = true;
    }
    return is_valid
};

function  validate_password(_valid_pass){
    let pattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,14}$/;
    let is_valid = false;
    if (_valid_pass.match(pattern)){
        is_valid = true;
    }
    return is_valid
};

function snackbar(error) {
    // Get the snackbar DIV
    var message = document.getElementById("snackbar");
    message.style.display = "flex";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ message.style.display = "none";}, 3000);
  };