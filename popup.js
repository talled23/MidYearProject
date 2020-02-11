let i = 0; a= 16; b=45; c=16; d=45; font=16;
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
    document.getElementById('stinky').innerHTML="&#129033; A | &#129035; B";
    num1 = parseFloat(document.getElementById("input1").value)
    num2 = parseFloat(document.getElementById("input2").value)
    final = Math.pow(num1, 2) + Math.pow(num2, 2)
    final = Math.sqrt(final)
    document.getElementById("answer").innerHTML='C = '+final;
}
function baseConvert() {
    document.getElementById('stinky').innerHTML="&#129033; Number | &#129035; Base";
    num1 = parseFloat(document.getElementById("input1").value)
    num2 = parseFloat(document.getElementById("input2").value)
    if (num2>=2 && num2<=36) {
        final = num1.toString(num2)
        document.getElementById("answer").innerHTML=final + " base " + num2;
    }else {
        document.getElementById("answer").innerHTML="Please enter a base in between 2 and 36";
    }
}
function fibb(){
    document.getElementById('stinky').innerHTML='&#129033;&#129033;&#129033;Number in Sequence';
    num = parseFloat(document.getElementById('input1').value)
    if (num>=0) {
        num--;
        var a = 1, b = 0, temp;
        while (num >= 0){
            queen = a;
            a = a + b;
            b = queen;
            num--;
        }
        document.getElementById("answer").innerHTML="Answer: " + b;
    }else {
        document.getElementById("answer").innerHTML="Please enter a valid number";
    }
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
    document.getElementById('stinky').innerHTML='&#129033; Row | &#129035; Column';
    num2 = parseFloat(document.getElementById("input2").value)
    final = factorialize(num1)
    final /= factorialize(num2) * factorialize(num1-num2)
    document.getElementById("answer").innerHTML="Answer: " + final;
}
function encrypt() {
    msg = document.getElementById("cipher-input").value.toUpperCase();
    key = parseInt(document.getElementById("key").value)
    if ((msg=="") || (key=="")) {
        document.getElementById("output").innerHTML="Please fill in all entries"; 
    }else {
        let result = '';
        let charcode = 0;
        for (let i = 0; i < msg.length; i++) {
            charcode = (msg[i].charCodeAt()) + key;
            result += String.fromCharCode(charcode);
        }
        document.getElementById("output").innerHTML=result; 
    }
}
function decrypt() {
    msg = document.getElementById("cipher-input").value.toUpperCase();
    key = parseInt(document.getElementById("key").value)
    if (msg=="" || key=="") {
        document.getElementById("output").innerHTML="Please fill in all entries"; 
    }else {
        let result = '';
        let charcode = 0;
        for (let i = 0; i < msg.length; i++) {
            charcode = (msg[i].charCodeAt()) - key;
            result += String.fromCharCode(charcode);
        }
        document.getElementById("output").innerHTML=result; 
    }
}


document.getElementById("Counter").addEventListener("click", counter)
document.getElementById("base").addEventListener("click", baseConvert)
document.getElementById("fibb").addEventListener("click", fibb)
document.getElementById("pythagorean").addEventListener("click", pythagor)
document.getElementById("pascal").addEventListener("click", triangle)
document.getElementById('encrypter').addEventListener("click", encrypt)
document.getElementById('decrypter').addEventListener("click", decrypt)