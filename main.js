var data = {};

var matric = document.getElementById("matricReg");
var firstName = document.getElementById("firstNameReg");
var lastName = document.getElementById("lastNameReg");
var email = document.getElementById("emailReg");
var password = document.getElementById("passwordReg");

function setFormValue(targeter, holder, descriptor) {
  targeter.addEventListener("input", function () {
    var valueHold = targeter.value;
    holder[descriptor] = valueHold;
  });
}

setFormValue(matric, data, "matric");
setFormValue(firstName, data, "firstName");
setFormValue(lastName, data, "lastName");
setFormValue(email, data, "email");
setFormValue(password, data, "password");

var register = document.getElementById("register");
register.addEventListener("click", function () {
  var info = JSON.stringify(data);

  localStorage.setItem(`${data["email"]}`, info);

  alert("Registration Completed Successfully");

  console.log(info);
});
