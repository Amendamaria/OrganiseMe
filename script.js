let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");



signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    tiltle.innerhtml = "Sign In"
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    tiltle.innerhtml = "Sign In"
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");

}

