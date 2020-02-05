let i = 0;
let a= 16;
let b=45;
let c=16;
let d=45;
let font=16;
function counter() {
    i++;
    if (i==69) {
        document.getElementById("Counter").innerHTML= "Nice";
    }else if(i==420){
        document.getElementById("Counter").innerHTML= "Nicer";
    }else if(i==1000){
        document.getElementById("Counter").innerHTML= "Nicest";
    }else{
        document.getElementById("Counter").innerHTML=i;
    }
    if (i<=500) {
        a+=0.1;
        b+=0.1;
        c+=0.1;
        d+=0.1;
        font+=0.1;
    }
    document.getElementById("Counter").style.boxSizing= "10px";
    document.getElementById("Counter").style.fontSize=`${font}px`
    document.getElementById('Counter').style.padding = `${a}px ${b}px ${c}px ${d}px`;
}
function pythagor() {
    num1 = parseFloat(document.getElementById("input1").value)
    num2 = parseFloat(document.getElementById("input2").value)
    final = Math.pow(num1, 2) + Math.pow(num2, 2)
    final = Math.sqrt(final)
    document.getElementById("answer").innerHTML=final;
}
function fibb(){
    
    num = parseFloat(document.getElementById('input1').value)
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      queen = a;
      a = a + b;
      b = queen;
      num--;
    }
    document.getElementById("answer").innerHTML=b;
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