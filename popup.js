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
function fibb() {
    num1 = parseFloat(document.getElementById("input1").value)
    document.getElementById("answer").innerHTML=num1
}
function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
}
function triangle() {
    num1 = parseFloat(document.getElementById("input1").value)
    num2 = parseFloat(document.getElementById("input2").value)
    final = factorialize(num1)
    final /= factorialize(num2) * factorialize(num1-num2)
    document.getElementById("answer").innerHTML=final;
}
function encrypt() {
    fs=readFile('cipher.txt',data)
}
function decrypt() {
    fs=readFile('cipher.txt',data)
}


document.getElementById("Counter").addEventListener("click", counter)
document.getElementById("fibb").addEventListener("click", fibb)
document.getElementById("pythagorean").addEventListener("click", pythagor)
document.getElementById("pascal").addEventListener("click", triangle)
document.getElementById('encrypt').addEventListener("click",encrypt)
document.getElementById('decrypt').addEventListener("click",decrypt)