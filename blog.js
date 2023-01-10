function trigger() {

    document.getElementById("hover").addEventListener("mouseover", popup)

    function popup()
    {
        alert("Write for Us!")
    }
} 


const btn = document.getElementById("btn4")
const text = document.getElementById("textBox")
const out1 = document.getElementById("output")

function post() {
    out1.innerHTML = text.value
}

console.log(out1);

btn.addEventListener("click", post())
