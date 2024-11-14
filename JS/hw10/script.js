function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    icon.src = "eye-open.png"; 
  } else {
    input.type = "password";
    icon.src = "eye-closed.png"; 
  }
}

function comparePasswords() {
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;
  const message = document.getElementById("message");

  if (password1 === password2) {
    alert("You are welcome");
    message.style.display = "none";
  } else {
    message.style.display = "block";
  }
}
