//window.getElementById("rickardo").addEventListener("click", function() { window.open("https://www.latlmes.com/tech/comp-sci-lab-answers-1", "_blank")})

let i = 0;
function counter() {
    document.getElementById("Counter").innerHTML=i++;
    document.getElementById('Counter').style.padding = "16px 45px 16px 45px";
}

document.getElementById("Counter").addEventListener("click", counter )

