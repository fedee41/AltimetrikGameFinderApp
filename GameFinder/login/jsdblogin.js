//data of email and password from html
emailHTML = document.getElementById('email');
passwordHTML = document.getElementById('password');
//array to obtain data
emailJSON = [];
id = [];
passwordJSON = [];
flag = false;       /*the flag give me if i have access to login */


fetch('http://localhost:3000/users')
.then(response => response.json())
.then(data => {
  console.log(data)
  let i=0;
    while (i <data.length){
        id[i] = data[i].id;
        emailJSON[i] = data[i].email;
        passwordJSON[i] =data[i].password; 
        console.log("id:" + data[i].id + "email:" + data[i].email + "password:" + data[i].password);
        ++i;
    }
})
  .catch ((err) => console.error('Request Failed', (err))), /*Catch errors*/

  //funcionality of Login button
  document.getElementById("login").addEventListener("click",() => {
    let i = 0;
    console.log("Validation" + "email: " + emailHTML.value + " password: " + passwordHTML.value);
    //validation
    while (i<emailJSON.length){
        if(emailHTML.value == emailJSON[i] && passwordHTML.value == passwordJSON[i]) {
            console.log("Now you are logged in");
            flag = true;
        }
        console.log("id:" + id[i] + "email:" + emailJSON[i] + "password:" + passwordJSON[i] + "\n")
        ++i;
    }
    if(flag === true){
      window.open('../app/gamefinder.html');
      window.close();
    }
    else{
      console.log("Incorrect password")
    }
  })

  