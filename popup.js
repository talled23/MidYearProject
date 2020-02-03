let i = 1;
function counter() {
    document.getElementById("Counter").innerHTML=i++;
    document.getElementById('Counter').style.padding = "16px 45px 16px 45px";
}

document.getElementById("Counter").addEventListener("click", counter)