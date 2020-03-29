function check_password() {
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");

    if (password1.value == password2.value) {
        if ((password1.value).length >= 8) {
            alert("Valid password");
        }
        else {
            alert("The passwords are not at least 8 characters long")
        }
    }
    else {
        alert("The passwords entered don't match")
    }
};