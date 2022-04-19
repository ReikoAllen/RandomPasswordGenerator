const passwordField = document.getElementById('password');
const alertBox = document.querySelector(".wrapper-alert-box");
const copyItem = document.querySelector(".copy");

// random password generator function 

function randomPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYZ{}[],';:?+-_=~./*&^%$#@!~><";
    let password = "";
    const passwordLength = 16;

    for (let i = 0; i < passwordLength; i++) {
        const randomChar = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomChar, randomChar + 1);
    };
    passwordField.value = password;

    // show message box when the password has been generated
    alertBox.classList.add('active');
    alertBox.innerHTML = "Password: <strong>" + passwordField.value + " </strong> has executed!";
    setTimeout(() => {
        alertBox.classList.remove('active');
    }, 1000);
};

// function for copy to Clipboard 

function copyPassword() {
    let copyText = passwordField;
    // select the text field 
    copyText.select();
    copyText.setSelectionRange(0, 99999); // for mobile devices
    document.execCommand("copy");

    // show message box when the password was copied to clipboard
    if (document.querySelector("#password").value.length == 0) {
        alertBox.classList.add("deny");
        alertBox.innerHTML = "Password hasn't generated yet!";
        setTimeout(function() {
            alertBox.classList.remove('deny');
        }, 2000);
    } else {
        alertBox.classList.add('active');
        alertBox.innerHTML = "Password: <strong>" + passwordField.value + "</strong> has been copied!";
        // remove the password from input in 2 seconds
        setTimeout(() => {
            passwordField.value = '';
        }, 2000);
        setTimeout(() => {
            alertBox.classList.remove('active');
        }, 3000);
    };

};

// add keyboard events 

document.addEventListener('keyup', function(event) {
    console.log(`${event.key} is pressed on keyboard.`);
    if (event.key === ' ') {
        copyPassword();
    } else if (event.key === 'Enter') {
        randomPassword();
    };
});
