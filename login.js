var emailLogin = document.getElementById("emailLogin");
var passwordLogin = document.getElementById("passwordLogin");

function setFormValue(targeter, holder, descriptor) {
  targeter.addEventListener("input", function () {
    var valueHold = targeter.value;
    holder[descriptor] = valueHold;
  });
}

var auth = {};

setFormValue(emailLogin, auth, "email");
setFormValue(passwordLogin, auth, "password");

var login = document.getElementById("login");
login.addEventListener("click", function (e) {
  console.log(auth);

  var userInfo = localStorage.getItem(auth["email"]);

  if (auth["password"] === JSON.parse(userInfo)["password"]) {
    alert("User Login Process Successful");
  } else {
    alert("Password does not match that in storage.");
  }

  console.log(userDetails);

  e.preventDefault();
});
