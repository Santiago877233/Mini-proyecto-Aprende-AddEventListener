
const input = document.getElementById ("inputTexto");

input.addEventListener("keydown", function(event){
    document.getElementById("tecla").textContent = "Tecla presionada:" + event.key;

});