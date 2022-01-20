
let user = [{ user1: "", username: "", email: "", password: "" }, { user2: "", username: "", email: "", password: "" }];

let nameOfUser = document.querySelector(".username");
let inputemail = document.querySelector(".email");
let inputpass = document.querySelector(".password");
let btn = document.querySelector(".btn");
let inputLength;

btn.addEventListener('click', function () {

    if (nameOfUser.value == "" || inputemail.value == "" || inputpass.value == "") {
        document.getElementById('error').textContent = "Please fill the compulsory fields!";
    }
    else if (inputpass.value.length < 8) {
        document.getElementById('error').textContent = "Password too short!";
    }
    else if (inputpass.value.length > 12) {
        document.getElementById('error').textContent = "Password too long!";
    }
    else {
        inpuValue();
        document.getElementById('error').textContent = "";
        clearInput();
    }
});

function inpuValue() {

    user[0].username = nameOfUser.value;
    user[0].email = inputemail.value;
    user[0].password = inputpass.value;
    console.log(user);

}

function clearInput() {

    document.getElementById('username').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('success').style.display = "inline";
}

