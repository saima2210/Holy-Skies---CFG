let bttn = document.getElementById("btn1")
let username = document.getElementById("nameH")
let currentUsername = document.getElementById("output1")

function username() {
    currentUsername.innerHTML = nameH.value
}

bttn.addEventListener("click", username)



let btn = document.getElementById("btn4")
let text = document.getElementById("textBox")
let out1 = document.getElementById("output")

function post() {
    out1.innerHTML = text.value
}

btn.addEventListener("click", post)