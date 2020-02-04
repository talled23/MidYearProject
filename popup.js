let i = 1;
function counter() {
    document.getElementById("Counter").innerHTML=i++;
    document.getElementById('Counter').style.padding = "16px 45px 16px 45px";
}

function pythagor() {
    num1 = parseFloat(document.getElementById("input1").value)
    num2 = parseFloat(document.getElementById("input2").value)
    final = Math.pow(num1, 2) + Math.pow(num2, 2)
    final = Math.sqrt(final)
    document.getElementById("answer").innerHTML=final;
}

document.getElementById("Counter").addEventListener("click", counter)
document.getElementById("pythagorean").addEventListener("click", pythagor)


function encrypt() {
    fs=readFile('cipher.txt',data)
}
function decrypt() {
    fs=readFile('cipher.txt',data)
}

document.getElementById('encrypt').addEventListener("click",encrypt)
document.getElementById('decrypt').addEventListener("click",decrypt)
