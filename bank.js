document.getElementById("submit").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email");
  const valueEmail = userEmail.value;
  const userPassword = document.getElementById("user-password");
  const valuePassword = userPassword.value;
  if (valueEmail == "sajjad@gmail.com" && valuePassword == "sajjad") {
    window.location.href = "banking.html";
  }
});
