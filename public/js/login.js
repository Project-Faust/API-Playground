const login = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  fetch('/api/login', {
    meth od: 'POST',
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
      alert(response.statusText);
    }
  };
};

document.querySelector('#login-btn').addEventListener('click', login);