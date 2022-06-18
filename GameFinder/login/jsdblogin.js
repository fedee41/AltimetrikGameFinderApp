//data of email and password from html
emailHTML = document.getElementById('email');
passwordHTML = document.getElementById('password');
//array to obtain data
emailJSON = [];
id = [];
passwordJSON = [];
flag = false;       /*the flag give me if i have access to login */


fetch('http://localhost:3000/users',{
    'method': 'GET',
    'mode': 'no-cors',
    'headers': {
        'Content-Type': 'application/json',
    }
})
  .then(response => response.json())
  .then(json => {
    let i=0;
    while (i <json.user.length){
        id[i] = json.user[i].id;
        emailJSON[i] = json.user[i].email;
        password[i] =json.user[i].password; 
        console.log("id:" + json.User[0].id + "email:" + json.User[0].email + "password:" + json.user[i].password);
        ++i;
    }
  })
  .catch ((err) => console.error('Request Failed', (err)), /*Catch errors*/

  //funcionality of Login button
  document.getElementById("login").addEventListener("click",() => {
    let i = 0;
    console.log("Validation" + "email" + emailHTML.value + "password" + passwordHTML.value);
    //validation
    while (i<emailJSON.length){
        //
        if(emailHTML.value == nombreJSON[i] && passwordHTML.value == passwordJSON[i]) {
            console.log("Now you are logged in");
            flag = true;
        }
        console.log("id:" + id[i] + "email:" + emailJSON[i] + "password:" + passwordJSON[i] + "\n")
        ++i;
    }
  })

  if(flag == true){
    window.open('gamefinder.html');
    window.close();
  }
  else{
    console.log("Incorrect password")
  }