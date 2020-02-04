let i = 1;
function counter() {
    document.getElementById("Counter").innerHTML=i++;
    document.getElementById('Counter').style.padding = "16px 45px 16px 45px";
}

function pythagor() {
    num1 = int(document.getElementById("input1").value)
    num2 = int(document.getElementById("input2").value)
    document.getElementById("answer").innerHTML=num1+num2;
}

document.getElementById("Counter").addEventListener("click", counter)

function encrypt() {
    fs=readFile('cipher.txt',data)
}
function decrypt() {
    fs=readFile('cipher.txt',data)
}

document.getElementById('encrypt').addEventListener("click",encrypt)
document.getElementById('decrypt').addEventListener("click",decrypt)
