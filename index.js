const btn = document.getElementById("btn");
const luz = document.querySelector(".luz");

function toggleBtn(){
    btn.classList.toggle("ativar");
    luz.classList.toggle("ligar");
}