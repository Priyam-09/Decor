function validateForm(event) {
  event.preventDefault();
  const user = document.getElementById("directName").value;
  if (user.length < 10) {
    document.getElementById("directerror").innerText =
      "Username must have more than 10 characters.";
    // return false;
  }
  const num = document.getElementById("number").value;
  if (num < 25 || age > 100) {
    document.getElementById("directageerror").innerText =
      "Number must be higher than 25 and less than 100.";
    //return false;
  }
//return true;
//call the api
}
