const signUpButton = document.getElementById('signUp');
const closeSignUp = document.getElementById('xButton');
const closeSignUpOnWindow = document.getElementById('signupBox');


signUpButton.addEventListener('click', function(e) {
    signupBox.style.display = 'block';
});

closeSignUp.addEventListener('click', function(e) {
    signupBox.style.display = 'none';
})

closeSignUpOnWindow.addEventListener('click', function(e) {
    if (e.target == signupBox) {
        signupBox.style.display = 'none';
    }
})