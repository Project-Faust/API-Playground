//FRONTEND JAVASCRIPT to be used by my "login.handlebars template to communicate with the users.js login post method"

const form = document.getElementById('login-form');

form.addEventListener('login', event => {
  event.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      // If there was an error, display it to the user
      alert(data.error);
    } else {
      // If the login was successful, redirect to the homepage
      window.location.href = '/';
    }
  })
  .catch(error => {
    console.error(error);
  });
});

