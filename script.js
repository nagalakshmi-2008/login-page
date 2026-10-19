const signInBox = document.getElementById('signInBox');
const signUpBox = document.getElementById('signUpBox');
const showSignUp = document.getElementById('showSignUp');
const showSignIn = document.getElementById('showSignIn');

// Switch forms
showSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    signInBox.classList.add('hide');
    signUpBox.classList.remove('hide');
});

showSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    signUpBox.classList.add('hide');
    signInBox.classList.remove('hide');
});

// Save registration data
document.getElementById('signUpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('username', document.getElementById('regUser').value);
    localStorage.setItem('email', document.getElementById('regEmail').value);
    localStorage.setItem('phone', document.getElementById('regPhone').value);
    localStorage.setItem('password', document.getElementById('regPass').value);
    
    alert('Registration Successful! Please Sign In.');
    signUpBox.classList.add('hide');
    signInBox.classList.remove('hide');
});

// Verify login data
document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const userIn = document.getElementById('loginUser').value;
    const passIn = document.getElementById('loginPass').value;

    if (userIn === localStorage.getItem('username') && passIn === localStorage.getItem('password')) {
        alert('Welcome! Login successful.');
    } else {
        alert('Incorrect username or password.');
    }
});