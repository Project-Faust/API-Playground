const register = async (event) => {
    event.preventDefault();

    const name = await document.querySelector('#name-signup').value;
    const email = await document.querySelector('#email-signup').value;
    const password = await document.querySelector('#password-signup').value;

    if (name && email && password) {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#register-btn').addEventListener('click', () => {
    console.log('Clicked')
});
document.querySelector('#register-btn').addEventListener('click', register);