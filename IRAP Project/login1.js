attempt=4;
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username=="Admin" && password=="UCC123@321") {
    alert ("Login Successfully");
    window.location = "user.html"; 
  }
  else
  {
    
    attempt--;
    if (attempt<= 0){
      document.getElementByield("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      alert("No more attempts!")
    }
    y=attempt-1
    alert("You have left "+y);
    alert("Incorrect Username or Password");
     
  }
  
  
}




/*
var loggedIn = false;

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  loggedIn = login(username, password);
  status();
}

function login(username) {
  var storedUsername = "ucc";

  return username == storedUsername;
}
function login(password) {
  var storedPassword = "ucc123";

  return password == storedPassword;
}
function status() {
  if (loggedIn) {
    window.location.href = "user.html";
  } else {
    alert("Incorrect Username or Password");
  }
}
/*
var attemp = 3;
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if (username == "UcLogin" && password == "UC123@"){
  alert ("Login Successfully");
window.location = "user.html"; 
return false;
}
else{
  attempt --;
  alert("You have left"+attempt+ "");
};
  if (attempt == 0){
    document.getElementByield("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    }
*/
