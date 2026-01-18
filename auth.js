function signup() {
  fetch("/api/signup", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  }).then(() => location.href = "login.html");
}

function login() {
  fetch("/api/login", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(r => r.json())
  .then(d => {
    if (d.success) location.href = "dashboard.html";
    else alert("Invalid login");
  });
}
